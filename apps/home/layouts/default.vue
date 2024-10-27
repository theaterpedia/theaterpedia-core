<script setup lang="ts">
import {
  SfBadge,
  SfButton,
  SfDropdown,
  SfIconClose,
  SfIconExpandMore,
  SfIconPerson,
  SfIconSearch,
  SfIconShoppingCart,
  SfListItem,
  SfModal,
  useDisclosure,
} from '@crearis/vue'
import { defineLayout } from '#pruvious'

defineLayout({
  label: 'default',
  // @ts-expect-error TODO
  allowedBlocks: ['Hero', 'Link', 'Container', 'Image', 'Prose', 'Video'],
  // @ts-expect-error TODO
  allowedRootBlocks: ['Hero', 'Container', 'Image', 'Prose', 'Video'],
})

const { isOpen: isAccountDropdownOpen, toggle: accountDropdownToggle } = useDisclosure()
const { isOpen: isSearchModalOpen, open: searchModalOpen, close: searchModalClose } = useDisclosure()
const { fetchCart, data: cart } = useSfCart()
const { fetchCustomer, data: account } = useCustomer()

fetchCart()
fetchCustomer()
usePageTitle()

const cartLineItemsCount = computed(
  () => cart.value?.lineItems.reduce((total, { quantity }) => total + quantity, 0) ?? 0,
)

const accountDropdown = [
  {
    label: 'account.heading',
    link: paths.account,
  },
  {
    label: 'account.ordersAndReturns.section.myOrders',
    link: paths.accountMyOrders,
  },
  {
    label: 'account.ordersAndReturns.section.returns',
    link: paths.accountReturns,
  },
  {
    label: 'account.logout',
    link: '/',
  },
]
const NuxtLink = resolveComponent('NuxtLink')
</script>

<template>
  <UiNavbarTop filled>
    <SfButton
      class="!px-2 mr-auto hidden lg:flex text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900"
      variant="tertiary"
      :tag="NuxtLink"
      :to="`${paths.category}/13`"
    >
      <template #suffix>
        <SfIconExpandMore class="hidden lg:block" />
      </template>
      <span class="hidden lg:flex whitespace-nowrap">Portal</span>
    </SfButton>
    <NuxtLazyHydrate when-visible>
      <UiSearch class="hidden md:block flex-1" />
    </NuxtLazyHydrate>
    <nav v-show="cartLineItemsCount > 0" class="hidden md:flex md:flex-row md:flex-nowrap">
      <NuxtLazyHydrate when-visible>
        <SfButton
          class="group relative text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 mr-1 -ml-0.5 rounded-md"
          :tag="NuxtLink"
          :to="paths.cart"
          :aria-label="$t('numberInCart', cartLineItemsCount)"
          variant="tertiary"
          square
        >
          <template #prefix>
            <SfIconShoppingCart />
            <SfBadge
              :content="cartLineItemsCount"
              class="outline outline-primary-700 bg-white !text-neutral-900 group-hover:outline-primary-800 group-active:outline-primary-900 flex justify-center"
              data-testid="cart-badge"
            />
          </template>
        </SfButton>
      </NuxtLazyHydrate>
      <NuxtLazyHydrate when-visible>
        <SfDropdown v-model="isAccountDropdownOpen" placement="bottom-end">
          <template #trigger>
            <SfButton
              variant="tertiary"
              class="relative text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 rounded-md"
              :class="{ 'bg-primary-900': isAccountDropdownOpen }"
              data-testid="account-dropdown-button"
              @click="accountDropdownToggle()"
            >
              <template #prefix>
                <SfIconPerson />
              </template>
              {{ account?.firstName }}
            </SfButton>
          </template>
          <ul class="rounded bg-white shadow-md border border-neutral-100 text-neutral-900 min-w-[152px] py-2">
            <li v-for="{ label, link } in accountDropdown" :key="label">
              <template v-if="label === 'account.logout'">
                <UiDivider class="my-2" />
                <SfListItem
                  tag="button"
                  class="text-left"
                  data-testid="account-dropdown-list-item"
                  @click="accountDropdownToggle()"
                >
                  {{ $t(label) }}
                </SfListItem>
              </template>
              <SfListItem
                v-else
                :tag="NuxtLink"
                :to="link"
                :class="{ 'bg-neutral-200': $route.path === link }"
                data-testid="account-dropdown-list-item"
              >
                {{ $t(label) }}
              </SfListItem>
            </li>
          </ul>
        </SfDropdown>
      </NuxtLazyHydrate>
    </nav>
    <SfButton
      variant="tertiary"
      class="relative text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 rounded-md md:hidden"
      square
      :aria-label="$t('openSearchModalButtonLabel')"
      @click="searchModalOpen"
    >
      <SfIconSearch />
    </SfButton>
  </UiNavbarTop>
  <main>
    <slot />
  </main>
  <NuxtLazyHydrate when-idle>
    <UiNavbarBottom />
  </NuxtLazyHydrate>
  <NuxtLazyHydrate when-visible>
    <UiFooter />
  </NuxtLazyHydrate>
  <NuxtLazyHydrate when-idle>
    <SfModal
      v-model="isSearchModalOpen"
      class="w-full h-full z-50"
      tag="section"
      role="dialog"
      aria-labelledby="search-modal-title"
    >
      <header class="mb-4">
        <SfButton square variant="tertiary" class="absolute right-4 top-2" @click="searchModalClose">
          <SfIconClose class="text-neutral-500" />
        </SfButton>
        <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
          {{ $t('search') }}
        </h3>
      </header>
      <UiSearch :close="searchModalClose" />
    </SfModal>
  </NuxtLazyHydrate>
</template>
