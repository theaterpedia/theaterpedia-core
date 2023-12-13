import { useCustomerReturns } from '@crearis/data-main/composables/useCustomerReturns/useCustomerReturns';

describe('useCustomerReturns', () => {
  it('should return account data', async () => {
    const { fetchCustomerReturns, data } = useCustomerReturns();

    await fetchCustomerReturns();

    expect(data.value).not.toBeUndefined();
  });
});
