<template>
  <Slide class="card shadow-md box-content p-0" :class="[classObject]">
    <figure v-show="imageTag !== 'none'" class="my-0">
      <img :src="image" alt="Movie">
    </figure>
    <div class="card-body py-2 px-4">
      <h2 v-show="headline !== 'none'" class="card-title text-base mt-0 mb-0">
        Card {{ headline }}
      </h2>
      <p v-show="subline !== 'none'" class="mb-0">
        {{ subline }}
      </p>
      <ContentSlot :use="$slots.default" unwrap="p" />
    </div>
  </Slide>
</template>

<script setup lang="ts">
import { defineComponent, computed } from 'vue'
import { Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineComponent({
  components: {
    Slide
  }
})

const props = defineProps({
  headline: { type: String, default: 'none' },
  overline: { type: String, default: 'none' },
  subline: { type: String, default: 'none' },
  imageTag: { type: String, default: 'none' },
  isSmall: { type: Boolean, default: false }
})

const classObject = computed(() => ({
  'card-side': props.isSmall
}))

const image = computed(() => (
  props.imageTag === 'none' ? 'none' : props.isSmall ? 'https://placeimg.com/200/280/' + props.imageTag : 'https://placeimg.com/400/225/' + props.imageTag
))

</script>
