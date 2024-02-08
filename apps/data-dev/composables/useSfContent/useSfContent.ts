import type { UseContentReturn, UseContentState, GetContent } from './types';

/**
 * @description Composable for managing content from CMS.
 * @param url Parameter of the content to fetch.
 * @returns {@link UseSfContent}
 * @example
 * const { data, loading, getContent } = useSfContent<ContentFieldsType>('url');
 */
export const useSfContent: UseContentReturn = (url) => {
  const state = useState<UseContentState>(`content-${url}`, () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching the content.
   * @example
   * getContent();
   */
  const getContent: GetContent = async () => {
    state.value.loading = true;
    try {
      const { data, error } = await useAsyncData(() => useSdk().commerce.getContent({ url }));
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
    getContent,
    ...toRefs(state.value),
  };
};
