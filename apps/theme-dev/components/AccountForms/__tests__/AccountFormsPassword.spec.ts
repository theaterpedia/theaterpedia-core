import { mount } from '@vue/test-utils';
import AccountFormsPassword from '../../AccountForms/AccountFormsPassword.vue';

describe('<AccountFormsPassword />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AccountFormsPassword);

    expect(getByTestId('account-forms-password'));    
  });
});