import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr, testStore } from '../Utils';

const setUp = (initialState) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />);
    return wrapper;
};

describe('App Component', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title 1',
                body: 'Some text'
            },{
                title: 'Example title 2',
                body: 'Some text'
            },{
                title: 'Example title 3',
                body: 'Some text'
            }];
        }
        wrapper = setUp(initialState);
    });
});