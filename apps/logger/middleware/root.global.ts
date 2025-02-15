export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo('/dashboard/collections/logs', { external: true })
  }
})
