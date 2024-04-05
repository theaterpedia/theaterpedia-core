import { defineCollection } from '#pruvious'
import { pageLikeCollection } from '#pruvious/standard'
import { uniqueValidator } from '#pruvious/server'

export default defineCollection(
  pageLikeCollection({
    name: 'posts',
    pathPrefix: 'posts',
    additionalFields: {
      syncId: {
        type: 'number',
        options: {
          required: true,
          min: 1,
        },
        additional: {
          immutable: true,
          unique: 'allLanguages',
          validators: [uniqueValidator],
          index: true,
          nullable: false,
        },
      },
    },
  }),
)
