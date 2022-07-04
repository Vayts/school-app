import { SET_AUTH, EDIT_TOKEN, LOGOUT_AUTH } from '@store/auth/actionTypes';

export const initialState = {
	user: {
		login: '',
		firstName: '',
		id: '',
		role: '',
		token: '',
	},
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_AUTH:
		return {
			user: action.payload,
		};
	case EDIT_TOKEN:
		return { user: { ...state.user, token: action.payload } };
	case LOGOUT_AUTH:
		return { user: {
			login: '',
			firstName: '',
			id: '',
			role: '',
			token: '',
		} };
	default: 
		return state;
	}
};
