import { mount } from '@vue/test-utils';
import Review from '@crearis/theme-main/components/ui/Review/Review.vue';
import { mockProductReviews } from '@crearis/theme-main/composables/useProductReviews/__tests__/productReviews.mock';

describe('<Review />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Review, {
      props: {
        review: mockProductReviews[0],
      },
    });

    expect(getByTestId('review'));
  });
});
