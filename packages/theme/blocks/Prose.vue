<script lang="ts" setup>
import { defineBlock, editorField } from '#pruvious'

defineBlock({
  icon: 'Pencil',
})

// eslint-disable-next-line vue/define-macros-order
defineProps({
  text: editorField({
    required: true,
    toolbar: ['bold', 'italic', 'link', 'heading2', 'heading3', 'paragraph', 'link', 'bulletList'],
  }),
})
</script>

<template>
  <Container class="content-block">
    <PruviousHTML :html="text" class="max-w-content prose" />
  </Container>
</template>
