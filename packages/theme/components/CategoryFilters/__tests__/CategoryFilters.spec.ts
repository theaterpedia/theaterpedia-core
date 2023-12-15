import { mount } from '@vue/test-utils';
import CategoryFilters from '../../CategoryFilters/CategoryFilters.vue';

describe('<CategoryFilters />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategoryFilters, {
      props: {
        facets: [],
      },
    });

    expect(getByTestId('category-filters'));
  });
});
