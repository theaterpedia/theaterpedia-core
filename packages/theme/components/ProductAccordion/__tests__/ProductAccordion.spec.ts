import { mount } from '@vue/test-utils';
import ProductAccordion from '../../ProductAccordion/ProductAccordion.vue';
import { mockProduct } from '@crearis/data-main/composables/useProductAttribute/__tests__/useProduct.mock';

describe('<ProductAccordion />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductAccordion, {
      props: {
        product: mockProduct,
      },
    });

    expect(getByTestId('product-accordion'));
  });
});
