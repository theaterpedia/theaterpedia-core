<template>
  <component
    v-for="(component, index) in content"
    :is="componentsMap[component.fields.component]"
    v-bind="component.fields"
    :key="`${component.fields.component}-${index}`"
    data-testid="render-content"
    :class="['className' in component.fields && component.fields.className]"
  />
</template>

<script setup lang="ts">
import Heading from '../Heading/Heading.vue';
import type { RenderContentProps } from '../RenderContent/types';
import RenderContentProductSlider from '../RenderContentProductSlider/RenderContentProductSlider.vue';
import CategoryCard from '../ui/CategoryCard/CategoryCard.vue';
import Display from '../ui/Display/Display.vue';
import Hero from '../ui/Hero/Hero.vue';

defineProps<RenderContentProps>();

const componentsMap = computed(() => ({
  Hero,
  Card: CategoryCard,
  Heading,
  Display,
  ProductSlider: RenderContentProductSlider,
}));
</script>
