<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'
const y = useWindowScroll().y
</script>

<template>
  <div class="bg-base-100 sm:rounded">
    <!-- stop layout-shift when shrinking/unshrinking Navbar-->
    <div :class="y < 160 ? '' : ' pb-36'" />

    <AppNavbar config-style="reactive" />
    <main class=" md:px-3 lg:px-6 max-w-none 2xl:mx-auto 2xl:max-w-screen-2xl">
      <slot>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </slot>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b;
  }
}
</style>
