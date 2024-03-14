// @ts-ignore
import { __ } from '#pruvious/server'
import { defineEventHandler, deleteCookie, setResponseStatus } from 'h3'

export default defineEventHandler(async (event) => {
  if (!event.context.auth.isLoggedIn) {
    setResponseStatus(event, 401)
    return __(event, 'pruvious-server', 'Unauthorized due to either invalid credentials or missing authentication')
  }

  deleteCookie(event, 'session_id')
  deleteCookie(event, 'odoo-user')

  return true
})
