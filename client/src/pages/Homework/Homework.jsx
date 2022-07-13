import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
	HomeworkContent,
	HomeworkControlItem,
	HomeworkControlPanel, HomeworkListDay,
	HomeworkListDayItem, HomeworkTaskImgWrapper, HomeworkTaskItem, HomeworkTaskList, HomeworkTaskTitle, HomeworkTitle,
	HomeworkWrapper,
} from '@src/pages/Homework/style';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentDeadlines } from '@store/student/selectors';
import { deadlinesFetch } from '@store/student/actions';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import BlockTitle from '@src/components/BlockTitle/BlockTitle';
import { v4 as uuidv4 } from 'uuid';
import DayList from '@src/pages/Homework/DayList/DayList';
import HomeworkForm from '@src/pages/Homework/HomeworkForm/HomeworkForm';
import { homeworkParser } from '../../../helpers/homeworkParse';

export const Homework = () => {
	const [isLoading, setLoading] = useState(true);
	const [selected, setSelected] = useState('all');
	const deadlines = useSelector(getStudentDeadlines);
	const homeworks = homeworkParser(deadlines);
	const axiosPrivate = useAxiosPrivate();
	const dispatch = useDispatch();
	const [homework, setHomework] = useState({ open: false, subject: '', title: '', id: '' });
	
	useEffect(() => {
		const controller = new AbortController();
		dispatch(deadlinesFetch(setLoading, controller, axiosPrivate));
		return () => {
			controller.abort();
		};
	}, []);
	
	return (
		<>
			<HomeworkWrapper>
				<HomeworkTitle>Homeworks</HomeworkTitle>
				<HomeworkControlPanel>
					<HomeworkControlItem>All</HomeworkControlItem>
					<HomeworkControlItem>Incomplete</HomeworkControlItem>
					<HomeworkControlItem>Complete</HomeworkControlItem>
				</HomeworkControlPanel>
				<HomeworkContent>
					<DayList setHomework={setHomework} homeworks={homeworks}/>
				</HomeworkContent>
			</HomeworkWrapper>
			<HomeworkForm homeworkItem={homework} setHomework={setHomework} homeworkId={null} />
		</>
	);
};

Homework.propTypes = {

};
