<script setup lang="ts">
const { loadCategoryList, categories } = useCategory();
const breadcrumbs = ref([{ name: 'Home', link: '/' }]);

await loadCategoryList({ filter: { parent: true } });
</script>

<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <MainBanner />
    <CategoryCard :categories="categories" />
    <NuxtLazyHydrate when-visible>
      <LazyDisplay />
    </NuxtLazyHydrate>
    <section class="pb-16">
      <NuxtLazyHydrate when-visible>
        <LazyProductSlider heading="Inspired by your picks" />
      </NuxtLazyHydrate>
    </section>
  </NuxtLayout>
</template>