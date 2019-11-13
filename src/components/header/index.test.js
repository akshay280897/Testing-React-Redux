import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Header Component',()=> {
    it('It should render without errors',() =>{
        const component = shallow(<Header/>);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });
});