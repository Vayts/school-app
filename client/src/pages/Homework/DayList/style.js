import styled from 'styled-components';
import AnimateHeight from 'react-animate-height';

export const HomeworkListDay = styled.ul`
  list-style: none;
  width: 100%;
	padding: 15px;
`;

export const HomeworkListDayItem = styled.li`
  background-color: #fff;
  border-radius: 16px;
	padding: 25px;
  margin-bottom: 20px;
	flex-basis: 45%;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);
  transition: all 0.2s;
	
	&:last-child {
		margin-bottom: 0;
	}
`;

export const HomeworkTaskList = styled.ul`
	margin-top: 25px;
	list-style: none;
	padding: 0;
`;

export const HomeworkTaskItem = styled.li`

`;

export const HomeworkTaskContent = styled.div`
  display: flex;
	align-items: center;
  padding: 10px 10px;
	background-color: ${({ open }) => (open ? 'rgba(124, 123, 123, 0.15)' : 'transparent')};

  &:hover {
	  cursor: pointer;
    transition: all 0.1s;
    background-color: rgba(124, 123, 123, 0.15);
  }
`;

export const HomeworkTaskImgWrapper = styled.div`
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(108, 108, 108);
  border-radius: 50%;

  span {
    &:before {
      font-size: 20px;
      color: #ffffff;
    }
  }
`;

export const HomeworkTaskTitle = styled.p`
	margin-left: 10px;
	user-select: none;
`;

export const HomeworkAnimBlock = styled(AnimateHeight)`
  border: 1px solid rgba(124, 123, 123, 0.15);
  border-top: none;

  i {
    height: 1px;
    display: block;
    width: 100%;
    background-color: rgba(124, 123, 123, 0.15);
  }
`;

export const HomeworkSubContent = styled.div`
	padding: 15px;
`;

export const HomeworkDescriptionTitle = styled.p`
	font-size: 16px;
	font-weight: 800;
`;

export const HomeworkDescriptionText = styled.p`
	margin: 0 0 10px;
`;

export const HomeworkInfo = styled.div`
  display: flex;
	justify-content: space-between;
`;

export const HomeworkInfoAuthor = styled.p`
	font-size: 14px;
`;

export const HomeworkDate = styled.p`
  font-size: 14px;
`;

export const HomeworkButtonWrapper = styled.div`
  display: inline-block;
	align-items: flex-start;
	text-align: left;
	justify-content: flex-start;
	padding: 10px 0 0;
`;
