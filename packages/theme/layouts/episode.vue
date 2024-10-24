<script lang="ts" setup>
// THIS IS NOT RUNNING > pruvious does not support layers
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'Episode',
})

import { usePage } from '#pruvious/client'

const page = usePage()
</script>

<template>
  <div>
    <H1> {{ page?.fields.videoTitle }} </H1>
    <p> {{ page?.fields.videoURL }} </p>
    <div class="space-y-12 ph:space-y-8" :class="{ 'border-b pb-23 dark:border-white/10': page?.fields.footerBorder }">
      <slot />
    </div>
    <UiFooter />
  </div>
</template>
