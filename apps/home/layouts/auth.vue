<script setup lang="ts">
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'auth',
  allowedBlocks: ['Login', 'Subnavigation'],
  allowedRootBlocks: ['Login', 'Subnavigation'],
})

defineProps<{
  heading: string;
}>();

const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <UiNavbarTop />
  <main
    :class="[
      'mx-auto px-4 pt-4 pb-20 md:px-0 md:mt-4',
      { 'md:mb-8': heading },
      heading ? 'md:max-w-[630px]' : 'md:max-w-[677px]',
    ]"
  >
    <h1 v-if="heading" class="font-bold mb-10 typography-headline-3 md:typography-headline-2">{{ heading }}</h1>
    <slot />
  </main>
  <UiFooter />
</template>
