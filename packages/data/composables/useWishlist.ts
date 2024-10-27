/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type {
  MutationWishlistAddItemArgs,
  MutationWishlistRemoveItemArgs,
  WishlistAddItemResponse,
  WishlistData,
  WishlistLoadResponse,
  WishlistRemoveItemResponse,
} from '../graphql';
import { MutationName } from '../server/mutations';
import { QueryName } from '../server/queries';

export const useWishlist = () => {
  const { $sdk } = useNuxtApp();
  const loading = ref(false);

  const wishlist = useState<WishlistData>('wishlist', () => ({}) as WishlistData);

  const loadWishlist = async () => {
    loading.value = true;
    const { data } = await useSdk().odoo.queryNoCache<MutationWishlistAddItemArgs, WishlistLoadResponse>({
      queryName: QueryName.WishlistLoadQuery,
    });
    loading.value = false;

    wishlist.value = data?.value?.wishlistItems || [];
  };

  const wishlistAddItem = async (productId: number) => {
    loading.value = true;
    const { data } = await useSdk().odoo.mutation<MutationWishlistAddItemArgs, WishlistAddItemResponse>(
      { mutationName: MutationName.WishlistAddItem },
      { productId },
    );
    loading.value = false;

    wishlist.value = data?.value.wishlistAddItem;
  };

  const getProductFromProductId = (productId: number) => {
    return wishlist.value?.wishlistItems?.find((item) => item?.product?.id === productId);
  };

  const wishlistRemoveItem = async (productId: number) => {
    const wishlistItem = getProductFromProductId(productId);

    if (!wishlistItem) {
      return;
    }

    loading.value = true;
    const { data } = await useSdk().odoo.mutation<MutationWishlistRemoveItemArgs, WishlistRemoveItemResponse>(
      { mutationName: MutationName.WishlistRemoveItem },
      { wishId: wishlistItem.id },
    );
    loading.value = false;

    wishlist.value = data?.value.wishlistRemoveItem;
  };

  const wishlistTotalItems = computed(() => {
    return wishlist.value?.wishlistItems?.length || 0;
  });

  const isInWishlist = (productId: number) => {
    return wishlist.value?.wishlistItems?.some((item) => item?.product?.id === productId) || false;
  };

  return {
    loading,
    wishlist,
    wishlistTotalItems,

    isInWishlist,
    loadWishlist,
    wishlistAddItem,
    wishlistRemoveItem,
  };
};