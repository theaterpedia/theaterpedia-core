<template>
  <NuxtLayout
    name="dev"
    back-href="paths.home"
    back-label-desktop="Homepage"
    back-label-mobile="Home"
    heading="Default-Shop-Page"
  >
  <div class="prose">
    <H1 class="text-4xl font-mona">DEV && Admin-Page</H1>
    <p class="text-xl font-mona">
      here you find dev-content for testing-purpose and for managing the migration from the vsf-shop to the pruvious-driven setup
    </p>
    <p class="text-xl font-mona">
      premium
    </p>
    <p class="text-xl font-mono">
      premium
    </p>
    <nuxt-link to="dashboard/collections/pages">Dashboard</nuxt-link>
    <br />
    <nuxt-link to="temp2">Temp2</nuxt-link>
    <br />
    <nuxt-link to="shop">VSF-Shop-Page</nuxt-link>
  </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
</script>
