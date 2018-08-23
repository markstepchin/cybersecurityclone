import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import fields from './ducks/fields';

const store = createStore(combineReducers({ fields }), {}, devToolsEnhancer());

// console.log(store.getState());

export default store;
