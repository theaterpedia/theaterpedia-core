/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AttributeValue, Category, Product, ProductResponse, ProductTemplateListResponse, ProductVariant, ProductVariantData, ProductVariantResponse, QueryProductArgs, QueryProductVariantArgs, QueryProductsArgs } from '../graphql';
import { QueryName } from '../server/queries';

export const useProductVariant = (combinationId?: number, productTemplateId?: number) => {

  const loading = ref(false);
  const productVariant = useState<ProductVariant>(`product-${combinationId}-${productTemplateId}`, () => ({}));

  const loadProductVariant = async (params: QueryProductVariantArgs) => {
    loading.value = true;
    const { data } = await useSdk().odoo.query<QueryProductVariantArgs, ProductVariantResponse>({queryName: QueryName.ProductVariantQuery}, params);
    loading.value = false;

    productVariant.value = data?.value.product;
  };

  return {
    loading,
    loadProductVariant,
    productVariant,
  };
};
