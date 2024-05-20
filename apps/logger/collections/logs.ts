import { defineCollection } from "#pruvious";

export default defineCollection({
  name: 'logs',
  mode: 'multi',
  apiRoutes: {
    create: false,
    createMany: false,
    update: false,
    updateMany: false,
  },
  dashboard: {
    icon: 'FileText',
    fieldLayout: [
      ['domainCode', 'logCode', 'loggedAt', 'type'],
      ['message'],
    ],
    overviewTable: {
      columns: [{ field: 'message', width: 30 }, 'domainCode', 'logCode', 'type', 'loggedAt'],
      searchLabel: ['message', 'domainCode'],
    },
  },
  search: {
    default: [
      { field: 'domainCode', reserve: 5 },
      { field: 'logCode', reserve: 32 },
      { field: 'type', reserve: 7 },
      'message'
    ],
  },
  fields: {
    domainCode: {
      type: 'text',
      options: {
        required: true,
      },
      additional: {
        immutable: true,
        index: true,
      },
    },
    logCode: {
      type: 'select',
      options: {
        choices: {
          'ms-sync': 'Microsoft Sync',
          'odoo-sync': 'Odoo Sync',
        },
        required: true,
      },
      additional: {
        immutable: true,
        index: true,
      },
    },
    loggedAt: {
      type: 'date-time',
      options: {
        required: true,
      },
      additional: {
        immutable: true,
        index: true,
      },
    },
    type: {
      type: 'button-group',
      options: {
        choices: {
          info: 'Info',
          warning: 'Warning',
          error: 'Error',
        },
        required: true,
      },
      additional: {
        immutable: true,
        index: true,
      },
    },
    message: {
      type: 'text-area',
      options: {},
      additional: {
        immutable: true,
      },
    },
  },
})
