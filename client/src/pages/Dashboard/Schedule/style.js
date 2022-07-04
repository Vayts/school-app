import styled from 'styled-components';

export const ScheduleWrapper = styled.div`
	width: 100%;
`;

export const ScheduleTitle = styled.h3`
	text-align: center;
	font-size: 24px;
	font-weight: 800;
	margin: 10px 0;
`;

export const ScheduleList = styled.ul`
	padding: 10px 0;
	height: 295px;
	position: relative;
	overflow-y: scroll;
	
	&::-webkit-scrollbar {
    width: 6px;
  }
	
	&::-webkit-scrollbar-thumb {
    background-color: #4264DF;
		border-radius: 10px;
  }
`;

export const ScheduleItem = styled.li`
	min-width: 100%;
	flex-basis: 100%;
	flex-grow: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
  margin-bottom: 15px;
	padding-right: 15px;
`;

export const ScheduleImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #A2A2DA66;
  border-radius: 10px;
`;

export const ScheduleImage = styled.img`
	width: 60px;
`;

export const ScheduleInfo = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

export const ScheduleDate = styled.p`
	color: #747474;
	font-size: 14px;
  margin: 0 0 8px;

  &:last-child {
    font-weight: 700;
  }
`;

export const ScheduleEventTitle = styled.p`
	font-weight: 700;
	font-size: 18px;
	margin: 0 0 8px;
`;

export const ScheduleEventAuthor = styled.p`
	margin: 0;
  color: #747474;
	font-size: 12px;
`;

export const ScheduleBottomInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ScheduleUpperInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ScheduleRequired = styled.span`
  display: block;
  padding: 2px 5px;
  background-color: #438a35;
	color: #fff;
	border-radius: 5px;
	font-size: 12px;
`;

export const ScheduleNothingText = styled.p`
	margin: 0;
	font-size: 20px;
	font-weight: 400;
	text-align: center;
`;
