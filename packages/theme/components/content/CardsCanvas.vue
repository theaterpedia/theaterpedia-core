<template>
  <div>
    <!-- // TODO: artboard class 'phone-5' noch vergrößeren in Abhängigkeit von viewport-size -->
    <div class="sticky top-24 phone-5 h-screen pb-96 bg-base-200">
      <div class="prose pt-4 ml-4">
        <slot />
      </div>
    </div>
    <component
      :is="item.component"
      v-for="(item, i) in items"
      :key="i"
      v-bind="item.props"
      class="sticky"
      :class="item.props.classes"
      :style="'top: ' + item.props.top + '; left: ' + item.props.left + ';' + (item.props.rotate ? ' transform: rotate(' + item.props.rotate + 'deg);' : '')"
    />
    <div class="canvasborder h-8 pb-4 bg-base-200" />
    <div class="canvasbottom mt-4" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  headline: { type: String, default: 'none' }
})

</script>
