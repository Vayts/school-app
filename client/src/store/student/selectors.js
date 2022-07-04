import { createSelector } from 'reselect';

export const getStudentAttendance = (state) => state.student.student.attendance;
export const getStudentAvgGrade = (state) => state.student.student.avgGrade;
export const getStudentBadGrades = (state) => state.student.student.daysWithoutBadGrades;
export const getStudentDeadlines = (state) => state.student.student.deadlines;
export const getStudentDeadlinesFilter = (state) => state.student.student.deadlinesFilter;
export const getStudentEvents = (state) => state.student.student.events;
export const getStudentEventsFilter = (state) => state.student.student.eventsFilter;
export const getStudentWorkload = (state) => state.student.student.workload;

export const getFilteredDeadlines = createSelector(
	[getStudentDeadlines, getStudentDeadlinesFilter],
	(deadlines, filter) => {
		const nextDay = new Date().getTime() + (24 * 60 * 60 * 1000);
		const nextDayStart = new Date(new Date(nextDay).setHours(0, 0, 0, 0)).getTime();
		
		switch (filter) {
		case 'all': {
			return deadlines;
		}
		case 'tomorrow': {
			const nextDayEnd = new Date(new Date(nextDay).setHours(23, 59, 59, 999)).getTime();

			return deadlines.filter((el) => {
				const deadlineTime = new Date(el.deadline).getTime();

				if (nextDayStart < deadlineTime && deadlineTime < nextDayEnd) {
					return el;
				}
				return null;
			});
		}
		case 'week': {
			const nextWeek = nextDay + ((24 * 60 * 60 * 1000) * 7);
			const weekEnd = new Date(new Date(nextWeek).setHours(23, 59, 59, 999)).getTime();
			return deadlines.filter((el) => {
				const deadlineTime = new Date(el.deadline).getTime();

				if (nextDayStart < deadlineTime && deadlineTime < weekEnd) {
					return el;
				}
				return null;
			});
		}
		case 'month': {
			const nextMonth = nextDay + ((24 * 60 * 60 * 1000) * 30);
			const weekEnd = new Date(new Date(nextMonth).setHours(23, 59, 59, 999)).getTime();
			return deadlines.filter((el) => {
				const deadlineTime = new Date(el.deadline).getTime();
				
				if (nextDayStart < deadlineTime && deadlineTime < weekEnd) {
					return el;
				}
				return null;
			});
		}
		default: {
			return deadlines;
		}
		}
	},
);

export const getFilteredEvents = createSelector(
	[getStudentEvents, getStudentEventsFilter],
	(events, filter) => {
		switch (filter) {
		case 'school': {
			return events.filter((el) => {
				if (el.type === 'school') {
					return el;
				}
				return null;
			});
		}
		case 'city': {
			return events.filter((el) => {
				if (el.type === 'city') {
					return el;
				}
				return null;
			});
		}
		case 'state': {
			return events.filter((el) => {
				if (el.type === 'state') {
					return el;
				}
				return null;
			});
		}
		default: {
			return events;
		}
		}
	},
);
