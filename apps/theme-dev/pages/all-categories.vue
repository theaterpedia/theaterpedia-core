<template>
  <NuxtLayout name="default" :breadcrumbs="breadcrumbs">
    <CategoryPageContent
      v-if="productsCatalog"
      :title="$t('allProducts')"
      :total-products="productsCatalog.pagination.totalResults"
      :products="productsCatalog.products"
    >
      <template #sidebar>
        <CategoryTree :categories="categories" :parent="{ name: $t('allProducts'), href: paths.allCategories }" />
        <CategorySorting />
        <CategoryFilters :facets="productsCatalog.facets" />
      </template>
    </CategoryPageContent>
  </NuxtLayout>
</template>

<script setup lang="ts">
import type { Breadcrumb } from '../components/ui/Breadcrumbs/types';

definePageMeta({
  layout: false,
});

const { fetchProducts, data: productsCatalog } = useSfProducts();
const { t } = useI18n();

await fetchProducts();

const breadcrumbs: Breadcrumb[] = [
  { name: t('home'), link: '/' },
  { name: t('allProducts'), link: paths.allCategories },
];
const subCategories = productsCatalog.value?.subCategories;
const categories = computed(
  () =>
    subCategories?.map(({ name, productCount }) => ({
      name,
      count: productCount || undefined,
      href: paths.allCategories,
    })) || [],
);
</script>
