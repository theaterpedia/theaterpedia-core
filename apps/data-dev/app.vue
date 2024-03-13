<template>
  <Body class="font-body" :class="bodyClass" />
  <VitePwaManifest />
    <NuxtPage />
</template>

<script setup lang="ts">
usePageTitle();

const bodyClass = ref('');
const nuxtApp = useNuxtApp();
nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

onMounted(() => {
  // Need this class for cypress testing
  bodyClass.value = 'hydrated';
});
</script>
