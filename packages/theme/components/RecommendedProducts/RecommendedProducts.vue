<template>
  <p data-testid="recommended-products" class="my-4 typography-text-lg">
    {{ $t('recommendedProducts') }}
  </p>
  <ProductSlider :items="products" />
</template>

<script setup lang="ts">
import type { RecommendedProductsProps } from '@crearis/theme-main/components/RecommendedProducts/types';

defineProps<RecommendedProductsProps>();
</script>
