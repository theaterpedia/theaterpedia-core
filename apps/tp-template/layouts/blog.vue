<template>
  <div>
    <PageHeader />
    <PostTitle />
    <div class="space-y-12 ph:space-y-8">
      <slot />
    </div>
    <PageFooter />
    <UiFooter />
  </div>
</template>

<script lang="ts" setup>
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'Blog post'
});

</script>
