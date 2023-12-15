import { mount } from '@vue/test-utils';
import ProductProperties from '../ProductProperties.vue';
import { mockProduct } from '@crearis/data-main/composables/useProductAttribute/__tests__/useProduct.mock';

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
