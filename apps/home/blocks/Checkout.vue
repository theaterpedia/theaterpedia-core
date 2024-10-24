<script setup>
import { SfButton } from '@crearis/vue';
import { defineBlock, repeaterField, textSubfield, linkSubfield, imageSubfield } from '#pruvious'
import checkoutContent from '~/components/checkoutContent.vue';

defineBlock({
  icon: 'Pencil',
  label: 'Checkout',
})

// eslint-disable-next-line vue/define-macros-order
defineProps({
 
})

const NuxtLink = resolveComponent('NuxtLink');
</script>

<template>
  <NarrowContainer>
    <checkoutContent />
  </NarrowContainer>
</template>