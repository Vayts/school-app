import moment from 'moment';

export function homeworkParser(deadlines) {
	const sorted = {};
	deadlines.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).forEach((el) => {
		const date = moment(el.deadline).format('DD.MM.YYYY');
		if (sorted[date]) {
			sorted[date].homeworks.push(el);
		} else {
			sorted[date] = { homeworks: [el] };
		}
	});
	return sorted;
}
