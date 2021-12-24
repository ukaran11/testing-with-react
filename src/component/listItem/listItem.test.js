import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../../Utils';
import ListItem from './index';

describe('ListItem Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some text'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
})