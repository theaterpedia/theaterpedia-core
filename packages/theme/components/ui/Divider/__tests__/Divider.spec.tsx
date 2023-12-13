import { mount } from '@vue/test-utils';
import Divider from '@crearis/theme-main/components/ui/Divider/Divider.vue';

describe('<Divider />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Divider);

    expect(getByTestId('divider'));
  });
});
