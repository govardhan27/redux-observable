import { ofType } from 'redux-observable';
import { delay, mapTo } from 'rxjs/operators';
import { PING, PONG } from '../constants/actionTypes';

//action creators

export const ping = () => ({ type: PING });
export const pong = () => ({ type: PONG });


//EPIC
export const pingEpic = action$ =>
	action$.pipe(
		ofType(PING),
		delay(5000),
		mapTo(pong())
	);