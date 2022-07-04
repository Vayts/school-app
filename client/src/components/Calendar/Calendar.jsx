import React from 'react';
import PropTypes from 'prop-types';
import { CalendarItem, CalendarWrapper } from '@src/components/Calendar/style';

export const CalendarBlock = ({ setDate, date }) => {
	const onDayClick = (event) => {
		const newDate = `${event.getFullYear()}-${event.getDate()}-${event.getMonth()}`;
		const oldDate = `${date.getFullYear()}-${date.getDate()}-${date.getMonth()}`;
		
		if (newDate === oldDate) {
			return null;
		}
		setDate(event);
	};
	
	return (
		<CalendarWrapper>
			<CalendarItem
				onChange={onDayClick}
				value={date}
				locale='eng'
				next2Label={null}
				prev2Label={null}
				selectRange={false}
				prevLabel={(<span className='icon-arrow-left'/>)}
				nextLabel={(<span className='icon-arrow-right'/>)}
				minDetail='year'
				navigationLabel={({ date }) => (
					<>
						<span>
							{date.toLocaleString('en-US', { month: 'long' })}
							{', '}
						</span>
						<strong>{date.getFullYear()}</strong>
					</>
				)}
			/>
		</CalendarWrapper>
	);
};

CalendarBlock.propTypes = {
	date: PropTypes.instanceOf(Date),
	setDate: PropTypes.func,
};
