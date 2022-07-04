import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';

export const AttendanceBlockWrapper = styled.div`
	background-color: #FFECE1;
	padding: 25px;
  border-radius: 16px;
	flex-basis: 30%;
  display: flex;
	flex-direction: column;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);
`;

export const ProgressBarControl = styled.div`
	text-align: left;
	margin-bottom: 40px;
  display: flex;
	align-items: center;
	justify-content: space-between;
	p {
    font-weight: 700;
    font-size: 16px;
		margin: 0;
	}
`;

export const ProgressBarControlList = styled.ul`
	padding: 0;
  display: flex;
	margin: 0;
	list-style: none;
`;

export const ProgressBarControlItem = styled.li`
	cursor: pointer;
	display: block;
	color: ${({ selected }) => (selected ? '#FF7F37' : '#FC9D68')};
	margin: 0 5px;
  font-size: 16px;
	border-bottom: ${({ selected }) => (selected ? '2px solid #FF7F37' : '2px solid transparent')};
`;

export const ProgressBar = styled(CircularProgressbar)`
	width: 220px;
`;

export const ProgressBarWrapper = styled.div`
	text-align: center;
`;
