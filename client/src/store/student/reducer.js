import {
	SET_ATTENDANCE, SET_AVERAGE_GRADE,
	SET_BASE_INFO, SET_DAYS_WITHOUT_BAD_GRADES,
	SET_DEADLINES,
	SET_DEADLINES_FILTER,
	SET_EVENTS, SET_EVENTS_FILTER, SET_STUDENT_WORKLOAD,
} from '@store/student/actionTypes';

export const initialState = {
	student: {
		attendance: 0,
		deadlines: [],
		deadlinesFilter: 'all',
		events: [],
		eventsFilter: 'school',
		avgGrade: null,
		daysWithoutBadGrades: null,
		workload: [],
	},
};

export const studentReducer = (state = initialState, action) => {
	switch (action.type) {
	case SET_BASE_INFO: 
		return {
			student: { ...state.student },
		};
	case SET_ATTENDANCE:
		return {
			student: { ...state.student, attendance: action.payload },
		};
	case SET_DEADLINES:
		return {
			student: { ...state.student, deadlines: action.payload },
		};
	case SET_DEADLINES_FILTER:
		return {
			student: { ...state.student, deadlinesFilter: action.payload },
		};
	case SET_EVENTS:
		return {
			student: { ...state.student, events: action.payload },
		};
	case SET_EVENTS_FILTER:
		return {
			student: { ...state.student, eventsFilter: action.payload },
		};
	case SET_AVERAGE_GRADE:
		return {
			student: { ...state.student, avgGrade: action.payload },
		};
	case SET_DAYS_WITHOUT_BAD_GRADES:
		return {
			student: { ...state.student, daysWithoutBadGrades: action.payload },
		};
	case SET_STUDENT_WORKLOAD:
		return {
			student: { ...state.student, workload: action.payload },
		};
	default: 
		return state;
	}
};
