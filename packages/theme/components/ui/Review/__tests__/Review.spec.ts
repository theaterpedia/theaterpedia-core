import { mount } from '@vue/test-utils';
import Review from '../Review.vue';
import { mockProductReviews } from '@crearis/data-main/composables/useSfProductReviews/__tests__/productReviews.mock';

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
