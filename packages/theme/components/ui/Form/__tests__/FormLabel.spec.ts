import { mount } from '@vue/test-utils';
import FormLabel from '@crearis/theme-main/components/ui/Form/FormLabel.vue';

describe('<FormLabel />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(FormLabel);

    expect(getByTestId('form-label')); 
  });
});
