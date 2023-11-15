<script lang="ts" setup>
const colorMode = useColorMode()
const theme = 'theaterpedia'
const themes = [
  'system',
  'theaterpedia',
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter'
]
defineProps({
  icon: {
    type: String,
    default: 'heroicons-outline:exclamation'
  }
})
</script>

<template>
  <div class="p-4 rounded-md bg-yellow-50">
    <div class="flex">
      <select v-model="theme" class="select w-full max-w-xs">
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
        <option v-for="curVariant of ['light', 'dark', 'flip', 'flipdark']" :key="curVariant">
          {{ theme }}-{{ curVariant }}
        </option>
      </select>
    </div>
  </div>
</template>
