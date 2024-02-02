import { mount } from '@vue/test-utils';
import AddressForm from '@crearis/theme-main/components/AddressForm/AddressForm.vue';
describe('<AddressForm />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AddressForm, {
      props: {
        type: 'billingAddress',
      },
    });
    expect(getByTestId('address-form'));
  });
});
