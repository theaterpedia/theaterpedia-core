// @ts-ignore
import { __, getBearerToken } from '#pruvious/server'
import { defineEventHandler, setResponseStatus } from 'h3'

export default defineEventHandler(async (event) => {
  if (!event.context.auth.isLoggedIn) {
    setResponseStatus(event, 401)
    return __(event, 'pruvious-server', 'Unauthorized due to either invalid credentials or missing authentication')
  }

  return getBearerToken(event)
})
