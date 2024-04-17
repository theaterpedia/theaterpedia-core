import { defineCollection } from '#pruvious'

export default defineCollection({
  name: 'settings',
  mode: 'single',
  fields: {
    siteId: {
      type: 'text',
      options: {
        required: true,
      },
    },
    syncUser: {
      type: 'record',
      options: {
        collection: 'users',
        recordLabel: 'email',
        description: 'An admin user with Odoo sync privileges for this site instance.',
        required: true,
      },
    }
  },
})
