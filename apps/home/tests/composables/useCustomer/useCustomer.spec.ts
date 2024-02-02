import { describe, expect, it } from 'vitest'
import { useCustomer } from '@crearis/data-main/composables/useCustomer'

describe('useCustomer', () => {
  it('should return account data', async () => {
    const { fetchCustomer, data } = useCustomer()

    await fetchCustomer()

    expect(data.value).not.toBeUndefined()
  })
})
