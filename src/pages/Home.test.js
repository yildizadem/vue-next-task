import { mount } from '@vue/test-utils'
import Home from './Home.vue';

test('Home mount', () => {
    const wrapper = mount(Home);

    expect(wrapper.text()).toContain('Search events at Ticketmaster')
})