import styled from 'styled-components';

export const HomeworkWrapper = styled.div`
	padding: 50px 50px 0;
	width: 100%;
  display: flex;
	flex-direction: column;
	max-height: 100vh;
`;

export const HomeworkTitle = styled.h1`
	margin: 10px 0;
`;

export const HomeworkContent = styled.div`
  height: 100%;
	width: 60%;
	margin: 0 auto;
  overflow-y: scroll;
  position: relative;
  border-top: 2px solid rgba(0, 0, 0, 0.12);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4264DF;
    border-radius: 10px;
  }
`;

export const HomeworkControlPanel = styled.div`
  width: 60%;
  display: flex;
	padding: 20px 0;
	border-radius: 16px;
`;

export const HomeworkControlItem = styled.p`
  margin: 0 10px;
  font-size: 18px;
  font-weight: 500;
  color: ${({ selected }) => (selected ? '#2D5BFF' : '#000')};
  border-bottom: ${({ selected }) => (selected ? '2px solid #2D5BFF' : '2px solid transparent')};

  &:hover {
	  cursor: pointer;
    transition: all 0.2s;
    color: #4e6ee0;
  }

  &:first-letter {
    text-transform: uppercase;
  }
`;
