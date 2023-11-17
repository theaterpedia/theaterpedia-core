<template>
  <NuxtLayout>
    <!-- div v-for="(component, index) in content" :key="`${component.fields.component}-${index}`">
      <RenderContent :content="component.fields.content" />
    </!-->
  </NuxtLayout>
</template>

<script setup lang="ts">

//TODO: useContent is not working (came from sdk > but we want to use it from nuxt-content)
// const { getContent, data: content } = useContent('home-page');

// getContent();
</script>
