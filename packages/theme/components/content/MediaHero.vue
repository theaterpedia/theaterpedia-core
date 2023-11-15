<template>
  <div class="hero hero-primary lg:min-h-full lg:py-4 bg-base-200">
    <div class="hero-content flex-col w-full" :class="heroClasses">
      <img v-show="image" :src="image" alt="Movie" class="max-w-sm rounded-lg w-full md:w-3/5">
      <YoutubeContent v-show="embedTag==='demo'" class="px-3 mb-12 w-full lg:mb-0 md:w-3/5" />
      <div class="w-full" :class="heroStyle !== 'center' ? 'md:w-2/5' : ''">
        <ContentSlot :use="$slots.default" unwrap="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue'

const props = defineProps({
  imageTag: { type: String, default: 'none' },
  embedTag: { type: String, default: 'none' }, // 'demo', youtube-id ...
  heroStyle: { type: String, default: 'right' } // 'right, left, center
})

const image = computed(() => (
  props.imageTag === 'none' ? undefined : 'https://placeimg.com/400/225/' + props.imageTag
))

const heroClasses = computed(() => ({
  'md:flex-row-reverse': props.heroStyle === 'right',
  'md:flex-row': props.heroStyle === 'left'
}))

</script>
