import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '@store/auth/reducer';
import { studentReducer } from '@store/student/reducer';

export const rootReducer = combineReducers({
	auth: authReducer,
	student: studentReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	// eslint-disable-next-line no-console
	console.log(store.getState());
});
