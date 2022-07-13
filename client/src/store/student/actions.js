import {
	SET_ATTENDANCE, SET_AVERAGE_GRADE, SET_DAYS_WITHOUT_BAD_GRADES,
	SET_DEADLINES,
	SET_DEADLINES_FILTER,
	SET_EVENTS,
	SET_EVENTS_FILTER, SET_STUDENT_WORKLOAD,
} from '@store/student/actionTypes';

export function attendanceFetch(setLoading, period, controller, axiosPrivate) {
	return async (dispatch) => {
		setLoading(true);

		try {
			const response = await axiosPrivate.get(`/student/attendance/${period}`, {
				signal: controller.signal,
			});
			setTimeout(() => {
				dispatch(setAttendance(response.data.value));
				setLoading(false);
			}, 400);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setAttendance(attendanceValue) {
	return {
		type: SET_ATTENDANCE,
		payload: attendanceValue,
	};
}

export function deadlinesFetch(setLoading, controller, axiosPrivate) {
	return async (dispatch) => {
		setLoading(true);
		try {
			const response = await axiosPrivate.get('/student/deadlines', {
				signal: controller.signal,
			});
			dispatch(setDeadlines(response.data.value));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setDeadlines(deadlinesArr) {
	return {
		type: SET_DEADLINES,
		payload: deadlinesArr,
	};
}

export function setDeadlinesFilter(filter) {
	return {
		type: SET_DEADLINES_FILTER,
		payload: filter,
	};
}

export function eventsFetch(setLoading, controller, axiosPrivate) {
	return async (dispatch) => {
		setLoading(true);
		try {
			const response = await axiosPrivate.get('/student/events', {
				signal: controller.signal,
			});
			dispatch(setEvents(response.data.value));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setEvents(eventsArr) {
	return {
		type: SET_EVENTS,
		payload: eventsArr,
	};
}

export function setEventsFilter(filter) {
	return {
		type: SET_EVENTS_FILTER,
		payload: filter,
	};
}

export function avgGradeFetch(setLoading, controller, axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate('/student/average_grade', {
				signal: controller.signal,
			});
			dispatch(setAverageGrade(response.data.value));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setAverageGrade(grade) {
	return {
		type: SET_AVERAGE_GRADE,
		payload: grade,
	};
}

export function badGradesFetch(setLoading, controller, axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate('/student/bad_grades', {
				signal: controller.signal,
			});
			dispatch(setBadGrades(response.data.value));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setBadGrades(days) {
	return {
		type: SET_DAYS_WITHOUT_BAD_GRADES,
		payload: days,
	};
}

export function studentWorkloadFetch(setLoading, controller, axiosPrivate) {
	return async (dispatch) => {
		try {
			const response = await axiosPrivate('/student/workload', {
				signal: controller.signal,
			});
			dispatch(setStudentWorkload(response.data.value));
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};
}

function setStudentWorkload(data) {
	return {
		type: SET_STUDENT_WORKLOAD,
		payload: data,
	};
}

// eslint-disable-next-line no-unused-vars
export function sendStudentHomework(setLoading, controller, axiosPrivate, homeworkId, values) {
	return async (dispatch) => {
		const formData = new FormData();
		values.files.forEach((el) => {
			formData.append('file', el);
		});
		formData.append('message', values.message);
		// eslint-disable-next-line no-console
		// console.log(formData.getAll('message'));
		// eslint-disable-next-line no-console
		console.log(formData.getAll('file'));
		setLoading(true);
		try {
			const response = await axiosPrivate.post(`/student/homework/${homeworkId}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				withCredentials: true,
			});
			// eslint-disable-next-line no-console
			console.log(response);
			dispatch();
			// setLoading(false);
		} catch (err) {
			// setLoading(false);
		}
	};
}
