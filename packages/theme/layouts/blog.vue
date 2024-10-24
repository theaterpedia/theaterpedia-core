<script lang="ts" setup>
// THIS IS NOT RUNNING > pruvious does not support layers
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'Blog post',
})
</script>

<template>
  <div>
    <PageHeader />
    <PostTitle />
    <div class="space-y-12 ph:space-y-8" >
      <slot />
    </div>
    <PageFooter />
    <UiFooter />
  </div>
</template>
