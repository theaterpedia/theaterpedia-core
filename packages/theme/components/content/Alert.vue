<script setup>
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
      <div>
        <h3 class="m-0 text-base font-medium text-yellow-800">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h3>
        <div class="mt-2 text-sm text-yellow-700">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>
