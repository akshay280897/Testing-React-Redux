import postReducer from './reducer';
import {types} from '../../actions/types';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';

describe('Post Reducer',()=>{
    it('should return default state',()=>{
        const newState = postReducer(undefined,{});
        expect(newState).toEqual([]);
    });

    it('should return new state if receiving types',()=>{
        const posts = [{title:'test1'},{title:'test2'},{title:'test3'}];
        const newState = postReducer(undefined,{
            type:types.GET_POSTS,
            payload:posts
        });
        expect(newState).toEqual(posts);
    });

});