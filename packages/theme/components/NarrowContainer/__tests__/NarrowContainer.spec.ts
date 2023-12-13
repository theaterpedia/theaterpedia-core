import { mount } from '@vue/test-utils';
import NarrowContainer from '@crearis/theme-main/components/NarrowContainer/NarrowContainer.vue';

describe('<NarrowContainer />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(NarrowContainer);

    expect(getByTestId('narrow-container'));
  });
});
