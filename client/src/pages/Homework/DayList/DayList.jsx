import React, { useCallback, useState } from 'react';
import AnimateHeight from 'react-animate-height';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import BlockTitle from '@src/components/BlockTitle/BlockTitle';
import { Button } from '@src/components/UI/Button/Button';
import moment from 'moment';
import {
	HomeworkAnimBlock, HomeworkButtonWrapper, HomeworkDate, HomeworkDescriptionText, HomeworkDescriptionTitle,
	HomeworkInfo, HomeworkInfoAuthor,
	HomeworkListDay,
	HomeworkListDayItem, HomeworkSubContent, HomeworkTaskContent,
	HomeworkTaskImgWrapper,
	HomeworkTaskItem,
	HomeworkTaskList, HomeworkTaskTitle,
} from './style';

const DayList = ({ homeworks, setHomework }) => {
	const [open, setOpen] = useState(null);
	
	const handleOpenClick = (e) => {
		const id = e.currentTarget.dataset.id;
		if (id === open) {
			setOpen(null);
			return false;
		}
		setOpen(id);
	};
	
	const setHomeworkHandler = (item) => {
		return () => {
			setHomework({ open: true, subject: item.subject, title: item.title });
		};
	};
	
	return (
		<HomeworkListDay>
			{Object.keys(homeworks).map((el) => {
				return (
					<HomeworkListDayItem key={`${el}-key`}>
						<BlockTitle text={el}/>
						<HomeworkTaskList>
							{homeworks[el].homeworks.map((item) => {
								return (
									<HomeworkTaskItem key={item._id}>
										<HomeworkTaskContent data-id={item._id} open={open === item._id} onClick={handleOpenClick}>
											<HomeworkTaskImgWrapper>
												<span className='icon-homework-task'/>
											</HomeworkTaskImgWrapper>
											<HomeworkTaskTitle>{`${item.subject} - ${item.title}`}</HomeworkTaskTitle>
										</HomeworkTaskContent>
										<HomeworkAnimBlock
											id={uuidv4()}
											duration={500}
											height={open === item._id ? 'auto' : 0}
										>
											<HomeworkSubContent>
												<HomeworkDescriptionTitle>Description</HomeworkDescriptionTitle>
												<HomeworkDescriptionText>{item.description}</HomeworkDescriptionText>
												<HomeworkInfo>
													<HomeworkDate>
														{moment(item.deadline).format('HH:mm')}
													</HomeworkDate>
													<HomeworkInfoAuthor>
														{item.teacherName}
													</HomeworkInfoAuthor>
												</HomeworkInfo>
												<i/>
												<HomeworkButtonWrapper>
													<Button title='Send answer' handler={setHomeworkHandler(item)}/>
												</HomeworkButtonWrapper>
											</HomeworkSubContent>
										</HomeworkAnimBlock>
									</HomeworkTaskItem>
								);
							})}
						</HomeworkTaskList>
					</HomeworkListDayItem>
				);
			},
			)}
		</HomeworkListDay>
	);
};

DayList.propTypes = {
	homeworks: PropTypes.object,
	setHomework: PropTypes.func,
};

export default DayList;
