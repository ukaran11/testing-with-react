import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

// describe('Header', () => {
    // it('It should render without errors', () => {
    //     expect(1).toBe(1);
    // });
// })

describe('Header Component', () => {
    it('Should render without errorss', () => {
        const component = shallow(<Header />);
        console.log(component.debug())
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    })
})