<template>
  <Body class="font-body" :class="bodyClass" />
  <div class="h-screen justify-center align-middle">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
usePageTitle();

const bodyClass = ref('');

onMounted(() => {
  // Need this class for cypress testing
  bodyClass.value = 'hydrated';
});
</script>
