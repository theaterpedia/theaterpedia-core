import { defineEventHandler } from 'h3'
import { nanoid } from 'nanoid'
import { Endpoints } from '@erpgap/odoo-sdk-api-client'
import { ensureUser, filterRecordsForThisSite } from '../../utils/sync'
import type { Event } from '../../graphql';
// @ts-ignore
import { query } from '#pruvious/server'

export default defineEventHandler(async (event) => {
  const api: Endpoints = event.context.apolloClient.api
  const odooEventsResponse = await api.query<any, { events: { events: Event[] } }>({ queryName: 'GetEventsQuery' } as any, {} as any)
  const odooEvents = await filterRecordsForThisSite(odooEventsResponse.data.events.events)
  const response: { created: any[], updated: any[], errors: { [syncId: string]: any } } = { created: [], updated: [], errors: {} }

  // Delete events that are not in Odoo
  await query('events')
    .whereNotIn('syncId', odooEvents.map((event) => event.syncId))
    .delete()

  for (const odooEvent of odooEvents) {  
    // Find matching event in Pruvious
    let event = await query('events')
      .selectAll()
      .where('syncId', odooEvent.syncId)
      .first()

    // Update event if it is outdated
    if (event && event.updatedAt < new Date(odooEvent.writeDate).getTime()) {
      const res = await query('events')
        .selectAll()
        .where('id', event.id)
        .update(await prepareFields(odooEvent))

      if (res.success) {
        response.updated.push(res.records[0])
      } else {
        response.errors[`create:${odooEvent.syncId}`] = res.message ?? res.errors
      }
    }
    
    // Create event if it does not exist
    if (!event) {
      const res = await query('events').select(['id']).create(await prepareFields(odooEvent))

      if (res.success) {
        response.created.push(res.record)
      } else {
        response.errors[`create:${odooEvent.syncId}`] = res.message ?? res.errors
      }
    }
  }
  
  return response
})

async function prepareFields(odooEvent: Event) {
  return {
    syncId: odooEvent.syncId,
    version: odooEvent.version,
    editMode: odooEvent.editMode,
    path: nanoid(), // @todo must be a unique path (missing in Odoo)
    title: odooEvent.metaTitle || '',
    metaTags: odooEvent.metaKeywords ? [{ name: 'keywords', content: odooEvent.metaKeywords }] : [],
    blocks: [], // @todo must be an array in Odoo (cannot sync yet)
    dateBegin: odooEvent.dateBegin ? new Date(odooEvent.dateBegin).getTime() : null,
    dateEnd: odooEvent.dateEnd ? new Date(odooEvent.dateEnd).getTime() : null,
    organizer: odooEvent.organizer ? (await ensureUser(odooEvent.organizer.email))?.id : null,
  }
}
