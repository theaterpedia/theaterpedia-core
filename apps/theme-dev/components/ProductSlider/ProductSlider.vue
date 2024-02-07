<template>
  <SfScrollable
    buttons-placement="floating"
    class="items-center pb-4"
    :wrapper-class="wrapperClass"
    data-testid="product-slider"
  >
    <!-- #TODO _06 Re-Enable Images -->
    <UiProductCard
      v-for="product in items"
      :key="product.id"
      class="max-w-[192px]"
      :name="product.name ?? ''"
      :slug="product.slug"
      image-url="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/display-2.png"
      image-alt="Pack it up"
      :price="product.price?.value.amount"
      :rating-count="product.rating?.count"
      :rating="product.rating?.average"
    />
  </SfScrollable>
</template>

<script setup lang="ts">
import { SfScrollable } from '@crearis/vue';
import type { ProductSliderProps } from '../ProductSlider/types';

defineProps<ProductSliderProps>();
</script>
