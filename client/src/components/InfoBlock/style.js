import styled from 'styled-components';

export const InfoBlockWrapper = styled.div`
  background-color: #fff;
  padding: 25px 25px 0;
  flex-basis: 38%;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);
`;

export const InfoBlockControlPanel = styled.ul`
  width: 70%;
  margin: 20px auto 20px;
  display: flex;
  justify-content: space-around;
  padding: 0;
  list-style: none;
`;

export const InfoBlockControlItem = styled.li`
  font-weight: 700;
  font-size: 14px;
  color: ${({ selected }) => (selected ? '#000' : '#5C5C5C')};
  border-bottom: ${({ selected }) => (selected ? '2px solid #2D5BFF' : '2px solid transparent')};
  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    color: black;
  }
	
	&:first-letter {
		text-transform: uppercase;
	}
`;

export const InfoBlockContent = styled.div`
  position: relative;
  height: 300px;
  width: 100%;

`;

export const InfoBlockList = styled.ul`
  max-height: 300px;
  overflow-y: scroll;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4264DF;
    border-radius: 10px;
  }
`;

export const InfoBlockListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  padding: 5px 0;
`;

export const InfoBlockImgWrapper = styled.div`
  min-width: ${({ big }) => (big ? '80px' : '48px')};
  min-height: ${({ big }) => (big ? '80px' : '48px')};
	background-color: #A2A2DA66;
 	border-radius: 8px;
 	display: flex;
 	justify-content: center;
 	align-items: center;
`;

export const InfoBlockImg = styled.img`
	vertical-align: top;
  width: ${({ big }) => (big ? '80px' : '30px')};
  height: ${({ big }) => (big ? '80px' : '30px')};
`;

export const InfoBlockInfo = styled.div`
  display: flex;
`;

export const InfoBlockMainInfo = styled.div`
	margin-left: 10px;
`;

export const InfoBlockTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  margin: 0 0 10px;

  text-overflow: ellipsis;
  max-width: ${({ big }) => (big ? '50px' : '200px')};;
  width: 100%;
  overflow:hidden;
  white-space: nowrap;
`;

export const InfoBlockText = styled.p`
  font-size: 14px;
  margin: 0;
  color: #5C5C5C;
  text-overflow: ellipsis;
  width: 100%;
	max-width: 200px;
  overflow: hidden;
	white-space: nowrap;
`;

export const InfoBlockDateWrapper = styled.div`
	text-align: center;
  border-left: 2px solid #ECF0FF;
	width: 20%;
`;

export const InfoBlockDate = styled.p`
  margin: 0;
  font-weight: 700;
  font-size: 14px;
  color: #5C5C5C;
`;

export const InfoBlockTime = styled.p`
	margin: 0;
	font-size: 14px;
`;

export const InfoBlockNothingText = styled.p`
	font-size: 20px;
	text-align: center;
`;
