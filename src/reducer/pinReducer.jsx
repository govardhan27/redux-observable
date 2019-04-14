import { PING, PONG } from '../constants/actionTypes';


export default function (state = { isPinging: false }, action) {
	switch (action.type) {
		case PING:
			return { isPinging: true };

		case PONG:
			return { isPinging: false };

		default:
			return state;
	}
};
