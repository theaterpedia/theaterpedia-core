import { mount } from '@vue/test-utils';
import ProductProperties from '../ProductProperties.vue';
import { mockProduct } from '@crearis/data-main/composables/useSfProductAttribute/__tests__/useSfProduct.mock';

describe('<ProductProperties />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductProperties, {
      props: {
        product: mockProduct
      }
    });

    expect(getByTestId('product-properties'));
  });
});
