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

  if ((response.data as any)?.cookie) {
    appendResponseHeader(event, 'Set-cookie', (response.data as any)?.cookie)
  }

  if (response.errors?.length) {
    setResponseStatus(event, 400)
    return response.errors[0].message
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

  // Dummy token
  const token = generateToken(
    user.id,
    remember ? getModuleOption('jwt').expirationLong : getModuleOption('jwt').expiration,
  )

  return token
})
