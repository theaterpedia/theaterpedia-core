<template>
  <div class="prose prose-sm lg:prose-base 2xl:prose-lg px-0">
    <div class="pt-2">
      <ContentSlot :use="$slots.overline" unwrap="p" />
    </div>
    <h2 class="m-0">
      <ContentSlot :use="$slots.headline" unwrap="p" />
    </h2>
    <div class="m-0">
      <ContentSlot :use="$slots.subline" unwrap="p" />
    </div>
    <div v-show="$slots.teasertext" class="m-0 mt-4">
      <ContentSlot :use="$slots.teasertext" unwrap="p" />
    </div>
  </div>
</template>
