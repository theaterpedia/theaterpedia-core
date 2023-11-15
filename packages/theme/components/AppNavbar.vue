<script setup lang="ts">

import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const route = useRoute()
const isHome = ref(route.fullPath === '/')

const y = useWindowScroll().y
const { navigation } = useContent()
const appConfig = useAppConfig()
const runtimeConfig = useRuntimeConfig()

const otpmail = runtimeConfig.otploginMail
const pwmail = runtimeConfig.pwloginMail
const pwpw = runtimeConfig.pwloginPw

const props = defineProps({
  configStyle: { type: String, default: 'default' } // extended, reactive
})

// const extended = ref(props.configStyle === 'reactive' && y.value > 80)
</script>

<template>
  <header class="transition-all duration-300" :class="configStyle === 'extended' || (configStyle === 'reactive' && y < 160) ? 'md:px-3 lg:px-6 pt-6 2xl:pt-12 2xl:px-6 2xl:mx-auto 2xl:max-w-screen-2xl':'container'">
    <!-- // TODO: Layout-Sprung Navbar verhindern
           siehe auch layouts/full-width.vue > dort muss mb-36 gesetzt werden
           navbar müsste doppelt eingebunden werden > extended Standard-Navbar scrollt heraus + fixed navbar absolute wird visible geschaltet
     -->
    <!-- Navbar -->
    <!-- nav
      class="flex justify-between md:justify-around bg-primary-600 w-full"
      :class="extended ? 'px-8 md:px-3 py-8 ' : 'py-4 backdrop-blur-md shadow-md fixed top-0 left-0 right-0 z-10'"
    -->
    <nav
      class="flex justify-between md:justify-around bg-base-200"
      :class="configStyle === 'extended' || (configStyle === 'reactive' && y < 160) ? 'py-8 max-w-none 2xl:mx-auto 2xl:max-w-screen-2xl ' : 'py-4 backdrop-blur-md shadow-xl fixed top-0 left-0 right-0 z-10'"
    >
      <!-- Logo Container -->
      <div class="flex items-center min-w-max">
        <!-- Logo -->
        <NuxtLink to="/" class="cursor-pointer">
          <!-- <app-logo :extended="extended" /> -->
          <app-logo
            :extended="props.configStyle === 'extended' || props.configStyle === 'reactive' && y < 160"
            :logo-size="isHome && (props.configStyle === 'extended' || props.configStyle === 'reactive' && y < 160) ? 'lg' : 'sm'"
          />
        </NuxtLink>
      </div>

      <!-- Links Section -->
      <div
        class="text-primary-700 dark:text-primary-200 text-lg items-center md:space-x-8 justify-center justify-items-start md:justify-items-center md:flex md:pt-2 w-full left-0 top-16 px-5 md:px-10 py-3 md:py-0 border-t md:border-t-0"
      >
        <NuxtLink
          v-for="link of navigation"
          v-show="link.title !== 'home' && link.title !== 'Dev' "
          :key="link._path"
          :to="link._path"
          class="flex font-semibold lg:text-2xl active:text-primary hover:text-primary cursor-pointer transition-colors duration-300"
        >
          {{ link.title }}
        </NuxtLink>
      </div>

      <!-- Social icons & Color Mode -->
      <div class="flex space-x-3 transition text-primary-500">
        <NuxtLink
          v-show="!isHome"
          to="/dev"
          active-class="font-bold"
        >
          dev
        </NuxtLink>
        <a v-show="false" v-if="appConfig.socials?.twitter" :href="`https://twitter.com/${appConfig.socials?.twitter}`" title="Twitter" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:twitter" class="w-5 h-5" /></a>
        <a v-show="false" v-if="appConfig.socials?.github" :href="`https://github.com/${appConfig.socials?.github}`" title="GitHub" class="dark:text-primary-100 hover:text-primary-700 dark:hover:text-primary-300"><Icon name="fa-brands:github" class="w-5 h-5" /></a>
        <ColorModeSwitch v-show="!isHome" style="height:unset; min-height:unset" class="bg-base-200 max-w-sm hover:text-primary" />
      </div>

      <!-- Hamberger Menu -->
      <button
        class="w-10 h-10 md:hidden justify-self-end rounded-full hover:bg-gray-100"
      >
        <svg
          class="mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
    </nav>
  </header>
</template>
