import { mount } from '@vue/test-utils';
import Breadcrumbs from '../../ui/Breadcrumbs/Breadcrumbs.vue';

describe('<Breadcrumbs />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Breadcrumbs, {
      props: {
        breadcrumbs: [],
      },
    });

    expect(getByTestId('breadcrumbs'));
  });
});
