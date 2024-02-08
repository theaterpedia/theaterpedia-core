import { mount } from '@vue/test-utils';
import AccountData from '../../AccountData/AccountData.vue';

describe('<AccountData />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(AccountData, {
      props: {
        header: 'Header',
        buttonText: 'Button Text'
      }
    });

    expect(getByTestId('account-data'));
  });
});
