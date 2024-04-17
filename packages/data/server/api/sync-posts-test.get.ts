import { defineEventHandler } from 'h3'
import { nanoid } from 'nanoid'
import { Endpoints } from '@erpgap/odoo-sdk-api-client'
import { ensureUser, filterRecordsForThisSite } from '../../utils/sync'
import type { Post } from '../../graphql';
// @ts-ignore
import { query } from '#pruvious/server'

export default defineEventHandler(async (event) => {
  const api: Endpoints = event.context.apolloClient.api
  const odooPostsResponse = await api.query<any, { posts: { posts: Post[] } }>({ queryName: 'GetPostsQuery' } as any, {} as any)
  const odooPosts = await filterRecordsForThisSite(odooPostsResponse.data.posts.posts)
  const response: { created: any[], updated: any[], errors: { [syncId: string]: any } } = { created: [], updated: [], errors: {} }

  // Delete posts that are not in Odoo
  await query('posts')
    .whereNotIn('syncId', odooPosts.map((post) => post.syncId))
    .delete()

  for (const odooPost of odooPosts) {  
    // Find matching post in Pruvious
    let post = await query('posts')
      .selectAll()
      .where('syncId', odooPost.syncId)
      .first()

    // Update post if it is outdated
    if (post && post.updatedAt < new Date(odooPost.writeDate).getTime()) {
      const res = await query('posts')
        .selectAll()
        .where('id', post.id)
        .update(await prepareFields(odooPost))

      if (res.success) {
        response.updated.push(res.records[0])
      } else {
        response.errors[`create:${odooPost.syncId}`] = res.message ?? res.errors
      }
    }
    
    // Create post if it does not exist
    if (!post) {
      const res = await query('posts').select(['id']).create(await prepareFields(odooPost))

      if (res.success) {
        response.created.push(res.record)
      } else {
        response.errors[`create:${odooPost.syncId}`] = res.message ?? res.errors
      }
    }
  }
  
  return response
})

async function prepareFields(odooPost: Post) {
  return {
    syncId: odooPost.syncId,
    version: odooPost.version,
    path: odooPost.seoName || nanoid(),
    title: odooPost.metaTitle || '',
    metaTags: odooPost.metaKeywords ? [{ name: 'keywords', content: odooPost.metaKeywords }] : [],
    blocks: [], // @todo must be an array in Odoo (cannot sync yet)
    publishDate: odooPost.postDate ? new Date(odooPost.postDate).getTime() : null,
    author: odooPost.author ? (await ensureUser(odooPost.author.email))?.id : null,
  }
}
