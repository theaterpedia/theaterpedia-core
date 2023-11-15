<script setup lang="ts">
import { computed } from 'vue'

const appConfig = useAppConfig()
type ThemeColor = 'primary' | 'secondary' | 'accent' | 'warn'

// if bodyImageTag is provided, bodyText will not be rendered
const props = defineProps<{
  headline?: string,
  overline?: string,
  isSubline?: boolean,
  bodyText?: string,
  image?: string,
  themeColor?: string,
  top?: string,
  left?: string,
  classes?: string,
  rotate?: string
}>()

const LOOKUP: Record<ThemeColor, { bg: string, text: string }> = {
  primary: { bg: 'bg-primary', text: 'text-primary-content' },
  secondary: { bg: 'bg-secondary', text: 'text-secondary-content' },
  accent: { bg: 'bg-accent', text: 'text-accent-content' },
  warn: { bg: 'bg-warn', text: 'text-warn-content' }
}

const classes = computed(() => LOOKUP[props.themeColor ? props.themeColor : 'primary'])

const imageSize = 320

const imageURL = computed(() => (
  props.image === 'none' ? undefined : appConfig.domain['image-base-url'] + (props.filters ? '/c_scale,w_' + imageSize + ',' + props.filters + '/' : '/c_scale,w_') + imageSize + '/' + appConfig.domain['image-folder'] + '/' + props.image
))

</script>
<template>
  <div class="card w-80 h-80 shadow-lg" :class="classes.bg + ' ' + classes.text + (rotate ? ' rotate-' + rotate : '')">
    <figure v-show="props.image">
      <img :src="imageURL" alt="Shoes">
    </figure>
    <div class="card-body justify-start content-start flex-grow-0">
      <p v-show="!isSubline && overline" class="text-lg">
        {{ overline }}
      </p>
      <h2 v-show="headline" class="card-title">
        {{ headline }}
      </h2>
      <p v-show="isSubline && overline" class="text-lg">
        {{ overline }}
      </p>
      <div class="prose" :class="classes.text">
        <content-renderer v-if="bodyText" class="prose" :class="classes.text" unwrap="p">
          {{ bodyText }}
        </content-renderer>
        <div v-else class="prose" :class="classes.text">
          <ContentSlot :use="$slots.default" unwrap="p" />
        </div>
      </div>
    <!--figure><img src="https://placeimg.com/400/225/arch" alt="Shoes"></figure -->
    </div>
  </div>
</template>
