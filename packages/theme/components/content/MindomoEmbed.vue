<template>
  <iframe
    width="768"
    height="500"
    style="border: 1px solid #d0d0d0;border-radius: 6px;"
    src="https://www.mindomo.com/de/mindmap/7495dff9e1714e70b935f8fa04cf34f4"
    frameborder="0"
    allowfullscreen
  >Your browser does not support frames. <a href="https://www.mindomo.com/de/mindmap/7495dff9e1714e70b935f8fa04cf34f4" target="_blank">View</a> this map on its original site.</iframe>
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
