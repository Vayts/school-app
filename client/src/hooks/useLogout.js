import { useDispatch } from 'react-redux';
import { setAuth } from '@store/auth/actions';
import { useNavigate } from 'react-router-dom';
import { axiosPrivate } from '@src/api/axios';

export const useLogout = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return async () => {
		dispatch(setAuth({}));
		try {
			const response = await axiosPrivate.get('/auth/logout');
			if (response) {
				navigate('/login');
			}
		} catch (err) {
			// eslint-disable-next-line no-console
			console.log(err);
		}
	};
};
