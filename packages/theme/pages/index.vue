<template>
  <div class="prose" v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
    <RenderContent :content="component.fields.content" />
  </div>
</template>

<script setup lang="ts">
import { useSfContent } from '../composables/useSfContent';
const { getContent, data: content } = useSfContent('home-page');

getContent();
</script>
