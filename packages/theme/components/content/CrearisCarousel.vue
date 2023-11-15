<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" class="carousel w-full">
    <slot />
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'BreakPoints',
  components: {
    Carousel,
    Navigation
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      600: {
        itemsToShow: 1.5,
        snapAlign: 'center'
      },
      700: {
        itemsToShow: 2,
        snapAlign: 'center'
      },
      768: {
        itemsToShow: 2.5,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start'
      },
      // 1024 and up
      1280: {
        itemsToShow: 4,
        snapAlign: 'start'
      }
    }
  })
})
</script>

<style lang="css">
.carousel__track {
  gap: 20px;
  padding-bottom: 10px;
}
</style>
