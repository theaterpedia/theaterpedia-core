<template>
  <div v-if="cart?.order?.websiteOrderLine?.length > 0" class="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
    <div class="col-span-7 mb-10 md:mb-0">
      <div
          v-for="orderLine in cart.order?.orderLines"
          :key="orderLine?.id"
        >
        <CartCollectedProductCard :order-line="orderLine" />
      </div>
    </div>
    <UiOrderSummary :cart="cart" class="col-span-5 md:sticky md:top-20 h-fit">
      <NuxtLink :to="paths.checkout">
        <SfButton
          size="lg"
          class="w-full mb-4 md:mb-0"
        >
          {{ $t('goToCheckout') }}
        </SfButton>
      </NuxtLink>
    </UiOrderSummary>
  </div>
  <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
    <NuxtImg src="/images/empty-cart.svg" :alt="$t('emptyCartImgAlt')" width="192" height="192" />
    <h2 class="mt-8">{{ $t('emptyCart') }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { SfButton, SfIconArrowBack } from '@crearis/vue';

const { cart, loadCart } = useCart();

const data:any = ref([
  {
    id: 1,
    attributes: [
      {
        name: 'Size',
        label: '40',
      },
      {
        name: 'Color',
        label: 'White',
      },
    ],
    imageUrl: null,
    imageAlt: 'athletic-mens-walking-sneakers',
    maxValue: 20,
    minValue: 1,
    name: 'athletic-mens-walking-sneakers',
    price: '89.95',
    specialPrice: '100.99',
    quantity: 10,
    slug: '/product/1',
  },
]);

await loadCart();

</script>
