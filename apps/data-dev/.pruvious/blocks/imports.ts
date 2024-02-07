// @ts-nocheck
import { defineAsyncComponent } from '#imports'

export const blocks = {
  Preset: () => defineAsyncComponent(() => import('../../../../node_modules/pruvious/dist/runtime/blocks/standard/Preset.vue')),
}
