import { defineCollection } from '#pruvious'
import { pageLikeCollection } from '#pruvious/standard'
import { uniqueValidator } from '#pruvious/server'

export default defineCollection(
  pageLikeCollection({
    name: 'posts',
    pathPrefix: 'blog',
    icon: 'Pin',
    additionalFields: {
      syncId: {
        type: 'text',
        options: {
          required: true,
        },
        additional: {
          immutable: true,
          unique: 'allLanguages',
          validators: [uniqueValidator],
          index: true,
          nullable: false,
        },
      },
      version: {
        type: 'number',
        options: {
          min: 1,
          required: true
        },
        additional: {
          protected: true,
          nullable: false,
        }
      },
      headline: {
        type: 'text',
        options: {},
      },
      overline: {
        type: 'text',
        options: {},
      },
      teaserText: {
        type: 'text',
        options: {},
      },
      author: {
        type: 'record',
        options: {
          collection: 'users',
        },
      },
    },
  }),
)
