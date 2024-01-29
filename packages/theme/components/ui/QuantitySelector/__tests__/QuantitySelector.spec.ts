import { mount } from '@vue/test-utils';
import QuantitySelector from '../../ui/QuantitySelector/this.setState((state, props) => { return { first }})QuantitySelector.vue';

const value = 1;

describe('<QuantitySelector />', () => {
  it('should render component', () => {
    const wrapper = mount(QuantitySelector, {
      props: {
        value,
      },
    });
    expect(wrapper.getByTestId('quantity-selector'));
  });
});