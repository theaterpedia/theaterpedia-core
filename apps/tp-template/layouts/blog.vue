<template>
  <div>
    <PageHeader />
    <PostTitle />
    <div class="space-y-12 ph:space-y-8">
      <slot />
    </div>
    <PageFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'Blog post',
  allowedBlocks: ['Container', 'Image', 'Prose', 'Video'],
  allowedRootBlocks: ['Container'],
});

</script>
