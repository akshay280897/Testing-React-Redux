import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import checkPropTypes from 'check-prop-types';

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

    describe('Checking PropTypes',()=>{
        it('It should give warning',()=>{
            const tempProps = {
                header:'test',
                desc:'testing',
                temp:[{
                    fName:'Akshay',
                    lName:'Potdar',
                    age:21
                 }]
            };

            const propsError = checkPropTypes(Header.propTypes,tempProps,'props',Header.name);
            expect(propsError).toBeUndefined();
        })
    });
});