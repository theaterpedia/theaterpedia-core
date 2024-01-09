import type { SfCart } from '@vue-storefront/unified-data-model';
import { toRefs } from '@vueuse/shared';
import type { UseCartReturn, UseCartState, FetchCart } from './types';

/**
 * @description Composable for managing cart.
 * @returns {@link UseCartReturn}
 * @example
 * const { data, loading } = useSfCart();
 */
export const useSfCart: UseCartReturn = () => {
  const state = useState<UseCartState>('useSfCart', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching the cart.
   * @example
   * getCart();
   */
  const fetchCart: FetchCart = async () => {
    state.value.loading = true;
    try {
      const { data, error } = await useAsyncData<SfCart>(() => useSdk().commerce.getCart());
      useHandleError(error.value);
      state.value.data = data.value;
      return data;
    } catch (error) {
      throw new Error(error as string);
    } finally {
      state.value.loading = false;
    }
  };

  return {
    fetchCart: fetchCart,
    ...toRefs(state.value),
  };
};
