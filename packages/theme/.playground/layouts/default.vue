<template>
  <div>
    <AppNavbar config-style="default" />
    <AppLoadingBar />
    <div class="max-w-2xl md:max-w-3xl lg:max-w-4xl px-4 py-10 m-auto sm:px-8 sm:rounded">
      <main class="prose prose-gray dark:prose-invert max-w-none pt-10">
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a,
.prose h4 a {
  @apply no-underline;
  &:hover {
    @apply border-b;
  }
}
</style>
