<script setup lang="ts">
const { theme, data } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <pre>{{ data }}</pre>
    <pre>{{ theme }}</pre>
  </div>
</template>