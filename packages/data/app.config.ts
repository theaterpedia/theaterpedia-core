export default defineAppConfig({
  data: {
    name: 'Hello from Crearis-Data layer',
    setting1: 'Setting 1'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {

  }
}
