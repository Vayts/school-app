import { toast } from 'react-toastify';

export const getNotification = (msg, type) => {
	toast[type](msg, {
		position: 'top-center',
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};
