<template>
  <div :class="logoClass" class="pl-2 md:pl-4 lg:pl-6 xl:pl-8 font-semibold">
    <h1 :class="props.logoSize === 'default' ? 'text-2xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl' : props.logoSize === 'sm' ? 'text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl' : 'text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl'">
      Theater<span class="text-primary">pedia</span>
    </h1>
    <h2 v-show="extended" :class="props.logoSize === 'default' ? 'invisible sm:visible text-sm tracking-tight lg:pl-1 lg:text-lg xl:pl-none xl:tracking-tighter xl:text-2xl 2xl:pl-3 2xl:tracking-wide 2xl:text-2xl' : props.logoSize === 'sm' ? 'invisible lg:visible text-sm lg:tracking-tight xl:text-lg xl:pl-1.5' : 'tracking-wider text-xs sm:text-base lg:text-2xl 2xl:text-4xl 2xl:tracking-tight'">
      <span class="text-primary">Theaterpädagogik</span> digital vernetzen
    </h2>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  extended: { type: Boolean, default: false },
  logoSize: { type: String, default: 'default' } // sm, lg
});

// const colorMode = useColorMode()
// const logoClass = computed(() => colorMode.preference === 'theaterpedia-light' ? 'text-content' : 'text-content')
const logoClass = 'text-content';

</script>
