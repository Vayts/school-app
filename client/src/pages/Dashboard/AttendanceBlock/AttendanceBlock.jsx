import React, { useCallback, useEffect, useState } from 'react';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import 'react-circular-progressbar/dist/styles.css';
import './custom-progress-bar.css';
import {
	AttendanceBlockWrapper,
	ProgressBar,
	ProgressBarControl, ProgressBarControlItem, ProgressBarControlList,
	ProgressBarWrapper,
} from '@src/pages/Dashboard/AttendanceBlock/style';
import BlockTitle from '@src/components/BlockTitle/BlockTitle';
import { getStudentAttendance } from '@store/student/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { attendanceFetch } from '@store/student/actions';

const AttendanceBlock = () => {
	const axiosPrivate = useAxiosPrivate();
	const dispatch = useDispatch();
	const attendance = useSelector(getStudentAttendance);
	const [period, setPeriod] = useState('week');
	const [isLoading, setLoading] = useState(true);
	
	useEffect(() => {
		const controller = new AbortController();
		dispatch(attendanceFetch(setLoading, period, controller, axiosPrivate));
		
		return () => {
			controller.abort();
		};
	}, [period]);
	
	const handleClick = useCallback(
		(e) => {
			if (!isLoading) {
				setPeriod(e.target.dataset.period);
			} else {
				return null;
			}
		},
		[isLoading],
	);
	
	return (
		<AttendanceBlockWrapper>
			<ProgressBarWrapper>
				<ProgressBarControl>
					<BlockTitle text='Attendance'/>
					<ProgressBarControlList>
						<ProgressBarControlItem selected={period === 'week'} data-period='week' onClick={handleClick}>Week</ProgressBarControlItem>
						<ProgressBarControlItem selected={period === 'month'} data-period='month' onClick={handleClick}>Month</ProgressBarControlItem>
						<ProgressBarControlItem selected={period === 'year'} data-period='year' onClick={handleClick}>Year</ProgressBarControlItem>
					</ProgressBarControlList>
				</ProgressBarControl>
				<ProgressBar
					width={100}
					strokeWidth={13}
					value={attendance}
					text={`${attendance}%`}
				/>
			</ProgressBarWrapper>
		</AttendanceBlockWrapper>
	);
};

export default AttendanceBlock;
