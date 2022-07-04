import React from 'react';
import { useSelector } from 'react-redux';
import { getUserName } from '@store/auth/selectors';
import { RightSidebar } from '@src/pages/Dashboard/RightSidebar/RightSidebar';
import {
	DashboardContent, DashboardContentSplitter, DashboardDownContent, DashboardSubContent,
	DashboardUpContent,
	DashboardWelcomeText,
	DashboardWrapper,
} from '@src/pages/Dashboard/style';
import AttendanceBlock from '@src/pages/Dashboard/AttendanceBlock/AttendanceBlock';
import InfoBlock from '@src/components/InfoBlock/InfoBlock';
import { DEADLINES_PERIOD } from '@constants/deadlinesPeriod';
import {
	avgGradeFetch, badGradesFetch,
	deadlinesFetch,
	eventsFetch,
	setDeadlinesFilter,
	setEventsFilter, studentWorkloadFetch,
} from '@store/student/actions';
import {
	getFilteredDeadlines,
	getFilteredEvents, getStudentAvgGrade, getStudentBadGrades,
	getStudentDeadlinesFilter,
	getStudentEventsFilter, getStudentWorkload,
} from '@store/student/selectors';
import { EVENTS_TYPE } from '@constants/eventsType';
import SubInfoBlock from '@src/components/SubInfoBlock/SubInfoBlock';
import Workload from '@src/pages/Dashboard/Workload/Workload';

const Dashboard = () => {
	const name = useSelector(getUserName);
	
	return (
		<DashboardWrapper>
			<DashboardContent>
				<DashboardWelcomeText>
					Hi, 
					{' '}
					{name}
					!
				</DashboardWelcomeText>
				<DashboardUpContent>
					<AttendanceBlock/>
					<Workload dispatcher={studentWorkloadFetch} selector={getStudentWorkload}/>
				</DashboardUpContent>
				<DashboardDownContent>
					<InfoBlock
						blockTitle='Deadlines'
						dateAttr='deadline'
						textAttr='subject'
						imgInCloud={false}
						controlArr={DEADLINES_PERIOD}
						dispatcher={deadlinesFetch}
						filterDispatcher={setDeadlinesFilter}
						filterSelector={getFilteredDeadlines}
						selectSelector={getStudentDeadlinesFilter}
					/>
					<DashboardSubContent>
						<SubInfoBlock
							dispatcher={avgGradeFetch}
							bottomText='Your average grade'
							imgUrl='ratingLikes.png'
							selector={getStudentAvgGrade}
							big
						/>
						<DashboardContentSplitter/>
						<SubInfoBlock
							dispatcher={badGradesFetch}
							bottomText='Days without bad grades'
							imgUrl='gradeDay.png'
							selector={getStudentBadGrades}
						/>
						{/*<GradeBlock/>*/}
					</DashboardSubContent>
					<InfoBlock
						blockTitle='Events'
						dateAttr='start'
						textAttr='description'
						big
						imgInCloud
						controlArr={EVENTS_TYPE}
						dispatcher={eventsFetch}
						filterDispatcher={setEventsFilter}
						filterSelector={getFilteredEvents}
						selectSelector={getStudentEventsFilter}
					/>
				</DashboardDownContent>
			</DashboardContent>
			<RightSidebar/>
		</DashboardWrapper>
	);
};

export default Dashboard;
