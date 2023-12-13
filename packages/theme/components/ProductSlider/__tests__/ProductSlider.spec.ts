import { mount } from '@vue/test-utils';
import ProductSlider from '@crearis/theme-main/components/ProductSlider/ProductSlider.vue';

describe('<ProductSlider />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(ProductSlider, {
      props: {
        items: [],
      },
    });

    expect(getByTestId('product-slider'));
  });
});
