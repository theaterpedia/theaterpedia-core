import { mount } from '@vue/test-utils'
import Divider from '../../ui/Divider/Divider.vue'

describe('<Divider />', () => {
  it('should render component', () => {
    const { getByTestId } = mount(Divider)

    expect(getByTestId('divider'))
  })
})
