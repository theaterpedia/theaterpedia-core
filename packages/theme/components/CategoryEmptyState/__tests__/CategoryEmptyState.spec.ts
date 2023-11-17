import { mount } from '@vue/test-utils';
import CategoryEmptyState from '@crearis/theme-main/components/CategoryEmptyState/CategoryEmptyState.vue';

describe('<CategoryEmptyState />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(CategoryEmptyState);

    expect(getByTestId('category-empty-state'));
  });
});
