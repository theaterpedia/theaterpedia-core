<script lang="ts" setup>
import { DESIGN } from '~/constants'

const colorMode = useColorMode()
const theme = ref(DESIGN.THEMES.theaterpedia)
const themes = Object.values(DESIGN.THEMES)
const variants = Object.values(DESIGN.VARIANTS)
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  }
})
</script>

<template>
  <div class="flex flex-col">
    <select v-show="false" v-model="theme" class="select w-full max-w-xs">
      <option disabled selected>
        Theme
      </option>
      <option v-for="curTheme of themes" :key="curTheme">
        {{ curTheme }}
      </option>
    </select>
    <select v-model="colorMode.preference" class="select w-full max-w-xs">
      <option disabled selected>
        Theme
      </option>
      <option v-for="curVariant of variants" :key="curVariant">
        {{ theme }}-{{ curVariant }}
      </option>
    </select>
  </div>
</template>
