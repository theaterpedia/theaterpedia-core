<script setup lang="ts">

const { loadCategoryList, categories } = useCategory();

await loadCategoryList({ filter: { parent: true } });
</script>

<template>
  <LazyMainBanner />
  <LazyCategoryCard :categories="categories" />
  <LazyDisplay />
  <section class="pb-16">
    <LazyProductSlider heading="Inspired by your picks" />
  </section>
</template>
