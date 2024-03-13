<script setup lang="ts">
import { useDark } from '@vueuse/core'
usePageTitle()

const isDark = useDark()
const bodyClass = ref('')

onMounted(() => {
  // Need this class for cypress testing
  bodyClass.value = 'hydrated'
})
</script>

<template>
  <Body data-theme="grey" class="font-body" :class="(isDark ? 'dark ' : '') + bodyClass" />
  <VitePwaManifest />
  <NuxtPage />
</template>
