// @ts-ignore
import { catchFirstErrorMessage, isKeyOf, isObject } from '#pruvious'
import {
  __,
  booleanValidator,
  booleanishSanitizer,
  emailValidator,
  generateToken,
  getModuleOption,
  pruviousReadBody,
  query,
  requiredValidator,
  stringSanitizer,
  stringValidator,
  // @ts-ignore
} from '#pruvious/server'
import { Endpoints } from '@erpgap/odoo-sdk-api-client'
import { appendResponseHeader, defineEventHandler, setResponseStatus } from 'h3'
import { $fetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  const api: Endpoints = event.context.apolloClient.api
  const body = await pruviousReadBody(event)
  const data: Record<string, any> = isObject(body) ? body : {}
  const email = isKeyOf(data, 'email') ? stringSanitizer({ value: data.email }) : undefined
  const password = isKeyOf(data, 'password') ? stringSanitizer({ value: data.password }) : undefined
  const remember = isKeyOf(data, 'remember') ? booleanishSanitizer({ value: data.remember }) : false
  const errors = await catchFirstErrorMessage({
    email: [
      () => requiredValidator({ __, language: event.context.language, value: email }),
      () => stringValidator({ value: email }),
      () => emailValidator({ value: email }),
    ],
    password: [
      () => requiredValidator({ __, language: event.context.language, value: password }),
      () => stringValidator({ value: password }),
    ],
    remember: [() => booleanValidator({ value: remember })],
  })

  if (Object.keys(errors).length) {
    setResponseStatus(event, 422)
    return errors
  }

  const response = await api.mutation({ mutationName: 'LoginMutation' } as any, { email, password } as any)
 
  if (response.errors?.length) {
    setResponseStatus(event, 400)
    return response.errors[0].message
  }
  
  // @todo resolve PORT in production
  const userData = await $fetch(`http://localhost:${3000}/api/odoo/query-no-cache`, {
    method: 'post',
    body: [{ queryName: 'LoadUserQuery' }, null],
    headers: { Cookie: (response.data as any)?.cookie },
  }).catch(() => null)
  
  if (!userData?.partner) {
    setResponseStatus(event, 400)
    return 'Error while fetching user data'
  }

  if ((response.data as any)?.cookie) {
    appendResponseHeader(event, 'Set-cookie', (response.data as any)?.cookie + '; odoo-user=' + encodeURIComponent(JSON.stringify(userData.partner)))
    appendResponseHeader(event, 'Set-cookie', 'odoo-user=' + encodeURIComponent(JSON.stringify(userData.partner)) + '; Path=/')
  } else {
    setResponseStatus(event, 400)
    return 'Unable to set cookie'
  }

  let user = await query('users', event.context.language).select(['id']).where('email', email).first()

  if (!user) {
    const createResult = await query('users').select(['id']).create({ email, password, isActive: true })

    if (createResult.success) {
      user = createResult.record
    } else {
      setResponseStatus(event, 500)
      return createResult.message ?? createResult.errors
    }
  }

  // @todo check diff between user (Pruvious) and userData

  // Dummy token
  const token = generateToken(
    user.id,
    remember ? getModuleOption('jwt').expirationLong : getModuleOption('jwt').expiration,
  )

  return token
})
