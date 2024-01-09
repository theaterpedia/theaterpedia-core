import { mount } from '@vue/test-utils';
import ProductAccordion from '../../ProductAccordion/ProductAccordion.vue';
import { mockProduct } from '@crearis/data-main/composables/useSfProductAttribute/__tests__/useSfProduct.mock';

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
