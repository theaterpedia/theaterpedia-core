import { useCart } from '../useCart';

describe('useCart', () => {
  it('should return account data', async () => {
    const { fetchCart, data } = useCart();

    await fetchCart();

    expect(data.value).not.toBeUndefined();
  });
});
