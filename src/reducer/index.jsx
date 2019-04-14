import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import { pingEpic } from '../actions/ping';
import pingReducer from './pinReducer';

export const rootEpic = combineEpics(
	pingEpic
);

export const rootReducer = combineReducers({
	pingReducer
});