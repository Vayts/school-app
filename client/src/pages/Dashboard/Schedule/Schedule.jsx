import React, { useEffect, useState } from 'react';
import {
	ScheduleWrapper,
	ScheduleTitle,
	ScheduleList,
	ScheduleItem,
	ScheduleImageWrapper,
	ScheduleImage,
	ScheduleInfo,
	ScheduleDate,
	ScheduleEventTitle,
	ScheduleEventAuthor,
	ScheduleRequired,
	ScheduleBottomInfo,
	ScheduleUpperInfo,
	ScheduleNothingText,
} from '@src/pages/Dashboard/Schedule/style';
import { Loader } from '@src/components/Loader/Loader';
import PropTypes from 'prop-types';

export const Schedule = ({ date }) => {
	const [scheduleList, setSchedule] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setLoading(true);
		fetch(`http://localhost:8080/calendar/schedule/${date}`)
			.then((response) => response.json())
			.then((value) => {
				setSchedule(value.schedule);
				setLoading(false);
			});
	}, [date]);
	
	return (
		<ScheduleWrapper>
			<ScheduleTitle>Schedule</ScheduleTitle>
			<ScheduleList>
				{loading ? <Loader/>
					:	scheduleList.length === 0 
						? (
							<ScheduleNothingText>Nothing. Have a good time!</ScheduleNothingText>
						)
						: scheduleList.map((el) => {
							const lessonStart = new Date(el.start);
							const lessonEnd = new Date(el.end);
							return (
								<ScheduleItem key={el.id}>
									<ScheduleImageWrapper>
										<ScheduleImage src={`./assets/img/${el.name.toLowerCase()}.png`}/>
									</ScheduleImageWrapper>
									<ScheduleInfo>
										<ScheduleUpperInfo>
											<ScheduleDate>{`${lessonStart.toLocaleString('ru-RU', { year: 'numeric', month: 'numeric', day: 'numeric' })}`}</ScheduleDate>
											<ScheduleDate>{` ${lessonStart.toLocaleString('ru-Ru', { hour: '2-digit', minute: '2-digit' })} - ${lessonEnd.toLocaleString('ru-Ru', { hour: '2-digit', minute: '2-digit' })}`}</ScheduleDate>
										</ScheduleUpperInfo>
										<ScheduleEventTitle>{el.name}</ScheduleEventTitle>
										<ScheduleBottomInfo>
											<ScheduleEventAuthor>{el.teacher}</ScheduleEventAuthor>
											{el.required ? <ScheduleRequired>must-visit</ScheduleRequired> : null}
										</ScheduleBottomInfo>
									</ScheduleInfo>
								</ScheduleItem>
							);
						})}
			</ScheduleList>
		</ScheduleWrapper>
	);
};

Schedule.propTypes = {
	date: PropTypes.instanceOf(Date),
};
