export interface Discount {
  list_price?: string;
  has_discounted_price?: boolean;
  price?: string;
}
export interface VariantPrice {
  combinationInfoVariant: Discount;
}

// #DEBUG 0.5.1 ProductFilterType
export interface ProductFilterType {
  filterName: string;
  id: string;
  label: string;
}
