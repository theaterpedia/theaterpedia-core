import { mount } from '@vue/test-utils';
import AccordionItem from '../../ui/AccordionItem/AccordionItem.vue';

describe('<AccordionItem />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AccordionItem, {
      props: {
        breadcrumbs: [],
      },
    });

    expect(getByTestId('accordion-item'));
  });
});
