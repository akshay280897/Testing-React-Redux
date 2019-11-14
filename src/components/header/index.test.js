import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Header Component',()=> {
    it('It should render without props',() =>{
        const component = shallow(<Header/>);
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(0);
    });
    it('It should render with props',() =>{
        const props = {
            header : 'testing props',
            desc : 'Testing component using enzyme'
        }
        const component = shallow(<Header {...props}/>);
        const wrapper = component.find('.para');
        expect(wrapper.length).toBe(1);
    });
});