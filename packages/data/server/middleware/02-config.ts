// @ts-ignore
import { useRuntimeConfig } from '#imports'
// @ts-ignore
import { cacheModuleOptions } from '#pruvious/server'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()
  cacheModuleOptions(runtimeConfig)
})
