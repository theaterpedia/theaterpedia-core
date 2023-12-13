import { mount } from '@vue/test-utils';
import ContactInformationForm from '@crearis/theme-main/components/ContactInformation/ContactInformationForm.vue';

describe('<ContactInformationForm />', () => {
  it('should render component', () => {

    const { getByTestId } = mount(ContactInformationForm);

    expect(getByTestId('contact-information-form'));   
  });
});