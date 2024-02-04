<template>
  <NuxtLayout
    name="defaultshop"
    back-href="paths.home"
    back-label-desktop="Homepage"
    back-label-mobile="Home"
    heading="Default-Shop-Page"
  >
    <div v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
      <RenderContent :content="component.fields.content" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">

definePageMeta({
  layout: false,
});

import { useSfContent } from '../composables/useSfContent';
const { getContent, data: content } = useSfContent('home-page');

getContent();
</script>
