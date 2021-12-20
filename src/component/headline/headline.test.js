import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAttr } from '../../../Utils';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props} />);
    return component;
} 

describe('Headline Component', () => {
    describe('Have props', () => {

    });

    describe('Have No Props', () => {
        
    })
})