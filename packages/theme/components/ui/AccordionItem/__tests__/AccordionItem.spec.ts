import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AccordionItem from '../AccordionItem.vue';

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
