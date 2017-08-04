import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import member from './member'

export default combineReducers({
    routing : routerReducer,
    member: member
});