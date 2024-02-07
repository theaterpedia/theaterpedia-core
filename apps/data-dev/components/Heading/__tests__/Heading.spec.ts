import { mount } from '@vue/test-utils';
import Heading from '../../Heading/Heading.vue';

describe('<Heading />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Heading, {
      props: {
        title: 'test',
      },
    });

    expect(getByTestId('heading'));
  });
});
