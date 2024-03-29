import { toRefs } from '@vueuse/shared';
import type { UseProductReturn, UseProductState, FetchProduct } from './types';

/**
 * @description Composable managing product data
 * @param {string} slug Product slug
 * @returns {@link UseProductReturn}
 * @example
 * const { data, loading, fetchProduct } = useSfProduct('product-slug');
 */
export const useSfProduct: UseProductReturn = (slug) => {
  const state = useState<UseProductState>(`useSfProduct-${slug}`, () => ({
    data: null,
    loading: false,
  }));

  /** Function for fetching product data
   * @param {string} slug Product slug
   * @example
   * fetchProduct('product-slug');
   */
  // #TODO _05 reactivate with odoo
  const fetchProduct: FetchProduct = async (slug) => {
    // state.value.loading = true;
    // const { data, error } = await useAsyncData(() => useSdk().commerce.getProduct({ slug }));
    // useHandleError(error.value);
    // state.value.data = data.value;
    // state.value.loading = false;
    // return data;
    return {};
  };

  return {
    fetchProduct,
    ...toRefs(state.value),
  };
};
