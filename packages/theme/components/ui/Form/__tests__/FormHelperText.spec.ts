import { mount } from '@vue/test-utils';
import FormHelperText from '@crearis/theme-main/components/ui/Form/FormHelperText.vue';

describe('<FormHelperText />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(FormHelperText);

    expect(getByTestId('form-helper-text')); 
  });
});
