import type { FetchProducts, UseProductsReturn, UseProductsState } from './types';

/**
 * @description Composable for managing products.
 * @returns {@link UseSfProducts}
 * @example
 * const { data, loading, fetchProducts } = useSfProducts();
 */
export const useSfProducts: UseProductsReturn = () => {
  const state = useState<UseProductsState>('products', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching products.
   * @example
   * getProducts();
   */
  const fetchProducts: FetchProducts = async () => {
    state.value.loading = true;
    const { data, error } = await useAsyncData(useSdk().commerce.getProducts);
    useHandleError(error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data;
  };

  return {
    fetchProducts,
    ...toRefs(state.value),
  };
};
