import { defineEventHandler } from 'h3'
import { Endpoints } from '@erpgap/odoo-sdk-api-client'
// @ts-ignore
import { query } from '#pruvious/server'
// @ts-ignore
import { slugify } from '#pruvious'

export default defineEventHandler(async (event) => {
  const api: Endpoints = event.context.apolloClient.api
  const odooPosts = await api.query<any, any>({ queryName: 'GetPostsQuery' } as any, {} as any)

  await query('posts')
    // .whereNotIn('syncId', odooPosts.data.posts.posts.map((post: any) => post.id))
    .delete()

  for (const odooPost of odooPosts.data.posts.posts) {  
    let post = await query('posts')
      .select(['id'])
      .where('syncId', odooPost.id)
      .whereLt('updatedAt', new Date(odooPost.writeDate).getTime())
      .first()

    if (post) {
      await query('posts')
        .where('id', post.id)
        .update({
          syncId: odooPost.id,
          title: odooPost.name,
          path: slugify(odooPost.name) + `(${odooPost.id})`, // @todo should be included in Odoo and unique
          blocks: [], // @todo must be an array
        })
    } else {
      const res = await query('posts')
        .select(['id'])
        .create({
          syncId: odooPost.id,
          title: odooPost.name,
          path: slugify(odooPost.name) + `(${odooPost.id})`, // @todo should be included in Odoo and unique
          blocks: [], // @todo must be an array
        })

      if (res.success) {
        post = res.record
      }
    }

    if (!odooPost.syncId) {
      await api.mutation(
        { mutationName: 'UpdatePostSyncId' } as any,
        { post: { id: 4, syncId: post.id, }, } as any
      ).catch(e => console.log(e.networkError.result.errors))
    }
  }
  
  return odooPosts
})
