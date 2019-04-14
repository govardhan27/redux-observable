import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic, rootReducer } from './reducer';

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeEnhancers(
			applyMiddleware(epicMiddleware)
		)
	);

	epicMiddleware.run(rootEpic);

	return store;
}


