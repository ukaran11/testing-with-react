import React from 'react';
import { findByTestAttr, checkProps } from '../../../Utils';
import SharedButton from './index';

describe('Shared Component', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })
})