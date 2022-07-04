import { SET_AUTH } from '@store/auth/actionTypes';
import axios from '@src/api/axios';
import { getNotification } from '@src/notifications/notification';

export const loginFetch = (userData, setLoading, setErrors, navigate) => {
	return async (dispatch) => {
		setLoading(true);
		try {
			const response = await axios.post('/auth/login', JSON.stringify(userData), {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			dispatch(setAuth(response.data.user));
			navigate('/');
		} catch (err) {
			if (err?.response?.data.message === 'WRONG_LOGIN_PASSWORD') {
				setErrors({ login: 'Wrong login or password', password: 'Wrong login or password' });
				getNotification('Wrong login or password!', 'error');
			} else if (err?.response?.data.message === 'CONNECTION_ERROR') {
				getNotification('Something went wrong. Try later!', 'error');
			} else {
				getNotification('Something went wrong. Try later!', 'error');
			}
		} finally {
			setLoading(false);
		}
	};
};

export function setAuth(user) {
	return {
		type: SET_AUTH,
		payload: user,
	};
}

export const refreshUser = (setLoading = null) => {
	return async (dispatch) => {
		try {
			const response = await axios.get('/auth/refresh', {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: true,
			});
			dispatch(setAuth(response.data.user));
		} catch (err) {
			return err;
		} finally {
			if (setLoading) {
				setLoading(false);
			}
		}
	};
};
