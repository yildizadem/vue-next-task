import { mount } from '@vue/test-utils'
import Loader from './Loader.vue';

test('Loader mount', () => {
    const wrapper = mount(Loader, {
        props: {
            loading: true
        }
    });

    expect(wrapper.text()).toContain('Loading...')
})