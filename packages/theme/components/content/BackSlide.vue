<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { onMounted } from 'vue'

const appConfig = useAppConfig()
// const vueApp = useNuxtApp().vueApp

type ThemeColor = 'primary' | 'secondary' | 'accent' | 'warn'

const props = withDefaults(defineProps<{
  image: string
  filters?: string
  themeColor?: ThemeColor
}>(), {
  image: 'heute_hier_und_jetzt.jpg',
  filters: '',
  themeColor: 'primary'
})

const LOOKUP: Record<ThemeColor, { bg: string, text: string }> = {
  primary: { bg: 'bg-primary', text: 'text-primary-content' },
  secondary: { bg: 'bg-secondary', text: 'text-secondary-content' },
  accent: { bg: 'bg-accent', text: 'text-accent-content' },
  warn: { bg: 'bg-warn', text: 'text-warn-content' }
}

/* TODO: Alex
we need here:
- 'imageSize' default = 650
- onmounted/onresized in browser recalc based on breakpoint
    const breakpoints = useBreakpoints(breakpointsTailwind)
    imageSize = breakpoints.greater('xl') ? 950 : breakpoints?.greater('lg') ? 800 : 650

- get image from cloudinary based on imageSize > usage as background-image (div)
*/

const imageSize = 800

const imageURL = computed(() => (
  props.image === 'none' ? undefined : appConfig.domain['image-base-url'] + (props.filters ? '/c_scale,w_' + imageSize + ',' + props.filters + '/' : '/c_scale,w_') + imageSize + '/' + appConfig.domain['image-folder'] + '/' + props.image
))

const classes = computed(() => LOOKUP[props.themeColor])
</script>

<template>
  <!-- Background Slide 1 -->
  <section class="container bg-base-200 flex flex-col md:flex-row max-w-full md:flex-row md:h-[600px]">
    <div
      class="w-full h-[600px] md:h-auto md:w-[50rem] bg-cover md:bg-fixed bg-left-bottom bg-no-repeat lg:bg-auto"
      :style="'background-image: url(' + imageURL + ');'"
    />
    <div class="md:w-2/5 xl:w-1/2" :class="classes.bg">
      <div class="sticky bottom-0 pb-12 px-4">
        <div
          class="md:mt-72 prose-sm sm:prose-base xl:prose-lg md:w-72 lg:w-96 pt-10"
          :class="classes.text"
        >
          <ContentSlot
            :use="
              $slots.default"
            unwrap="p"
          />
        </div>
      </div>
    </div>
  </section>
</template>
