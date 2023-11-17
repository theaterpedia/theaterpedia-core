<script lang="ts" setup>
const appConfig = useAppConfig()
const route = useRoute()
const isHome = ref(route.fullPath === '/')
</script>

<template>
  <footer class="bg-base-100 pt-10 w-full">
    <div v-show="false" class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
      <div class="mx-10">
        <NuxtLink
          to="/"
          class="text-xl text-gray-300 hover:text-gray-100 "
        >
          appConfig.domain.textlogo
        </NuxtLink>
        <p>appConfig.domain.claim</p>
      </div>
      <!-- Col-1 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
          Legal
        </div>

        <!-- Links -->
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Impressum
        </a>
        <a
          href="#"
          class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
        >
          Datenschutz
        </a>
      </div>

      <!-- Col-3 -->
      <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
        <!-- Col Title -->
        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
          Sitemap
        </div>
      </div>
    </div>

    <!-- Copyright Bar -->
    <div class="pt-2">
      <div
        class="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl"
      >
        <div class="mt-2">
          © 2022 Theaterpedia e.V.<br>
          wir setzen auf Open-Source: VueJS | NuxtJS | TailwindCSS | DaisyUI | PostgreSQL | Supabase | Github
        </div>
      </div>
    </div>
  </footer>
</template>
