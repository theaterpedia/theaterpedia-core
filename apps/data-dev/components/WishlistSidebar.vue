<script setup lang="ts">
import { SfDrawer, SfButton, SfIconClose } from '@crearis/vue';
import { onClickOutside } from '@vueuse/core';
import { useToast } from 'vue-toastification';
import type { Product, WishlistItem } from '@crearis/data-main/graphql';

const { wishlist, wishlistRemoveItem, wishlistTotalItems, loading } = useWishlist();
const { wishlistSidebarIsOpen, toggleWishlistSideBar } = useUiState();
const toast = useToast();

const WishlistRef = ref();
onClickOutside(WishlistRef, () => {
  wishlistSidebarIsOpen.value = false;
});

const handleWishlistRemoveItem = async (firstVariant: Product) => {
  await wishlistRemoveItem(firstVariant.id);
};
</script>

<template>
  <div class="w-full">
    <div
      v-if="wishlistSidebarIsOpen"
      class="fixed !w-screen !h-screen inset-0 bg-neutral-500 bg-opacity-50 transition-opacity duration-1000 top-index"
    />
    <div>
      <transition
        enter-active-class="transition duration-500 ease-in-out"
        leave-active-class="transition duration-500 ease-in-out"
        enter-from-class="translate-x-full"
        enter-to-class="translate-x-0"
        leave-from-class="translate-x-0"
        leave-to-class="translate-x-full"
      >
        <SfDrawer
          v-show="wishlistSidebarIsOpen"
          ref="WishlistRef"
          :model-value="true"
          :disable-click-away="true"
          :disable-esc="true"
          placement="right"
          class="shadow-none z-[100] w-full lg:w-[420px] bg-white"
          data-testid="category-sidebar"
        >
          <div class="flex flex-col h-full">
            <div class="p-4 flex justify-between items-center">
              <span class="font-bold text-lg text-black">Wishlist</span>
              <SfButton variant="tertiary" :aria-label="$t('closeListSettings')" @click="toggleWishlistSideBar">
                <template #prefix>
                  <SfIconClose class="text-neutral-500" />
                </template>
              </SfButton>
            </div>
            <div v-if="!loading">
              <div v-if="wishlistTotalItems > 0" class="overflow-y-scroll h-[800px] p-4 text-black">
                <div class="flex items-center font-medium pb-6">
                  <p class="text-gray-600 mr-1">Number of products :</p>
                  {{ wishlistTotalItems }}
                </div>
                <div v-for="item in wishlist?.wishlistItems || []" :key="item?.id">
                  <WishlistCollectedProductCard
                    :product="item?.product as Product"
                    @remove-from-wishlist="handleWishlistRemoveItem(item?.product as Product)"
                  />
                </div>
              </div>
              <div
                v-else
                class="flex items-center justify-center flex-col py-48 text-black"
                data-testid="cart-page-content"
              >
                <NuxtImg
                  src="/images/empty-cart.svg"
                  :alt="$t('emptyCartImgAlt')"
                  width="192"
                  height="192"
                  loading="lazy"
                />
                <h2 class="mt-8 font-medium">Your Wishlist is empty</h2>
              </div>
            </div>
            <div v-else class="flex items-center justify-center h-full">
              <p class="text-black inline">loading...</p>
            </div>
          </div>
        </SfDrawer>
      </transition>
    </div>
  </div>
</template>