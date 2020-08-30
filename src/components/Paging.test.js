import { mount } from '@vue/test-utils';
import Paging from './Paging.vue';

test('paging mount', () => {
    const wrapper = mount(Paging, {
        props: {
            page: {
                number: 0,
                size: 20,
                totalElements: 38,
                totalPages: 2
            },
            links: {
                first: { href: "/discovery/v2/events.json?keyword=test&page=0&size=20" },
                last: { href: "/discovery/v2/events.json?keyword=test&page=1&size=20" },
                next: { href: "/discovery/v2/events.json?keyword=test&page=1&size=20" },
                self: { href: "/discovery/v2/events.json?size=20&keyword=test" },
            }
        }
    });

    const info = wrapper.find('.info')
    expect(info.text()).toContain('1-20 of 38')
})