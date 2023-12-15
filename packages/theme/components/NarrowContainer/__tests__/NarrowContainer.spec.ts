import { mount } from '@vue/test-utils';
import NarrowContainer from '../NarrowContainer/NarrowContainer.vue';

describe('<NarrowContainer />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(NarrowContainer);

    expect(getByTestId('narrow-container'));
  });
});
