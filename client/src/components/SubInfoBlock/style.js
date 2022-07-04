import styled from 'styled-components';

export const SubInfoBlockWrapper = styled.div`
	background-color: #fff;
	padding: 25px;
  border-radius: 16px;
	height: 47%;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);
	position: relative;
`;

export const SubInfoBlockImg = styled.img`
	width: ${({ big }) => (big ? '120px' : '80px')};
`;

export const SubInfoBlockText = styled.p`
  font-weight: 800;
  font-size: 28px;
  height: 25%;
  margin: 0 0 10px;
`;

export const SubInfoNothingText = styled.p`
  height: 25%;
  font-weight: 600;
  font-size: 16px;
  margin: 0 0 10px;
`;

export const SubInfoBlockBottomText = styled.p`
  color: #5C5C5C;
  font-size: 16px;
	margin: 0 0 10px;
`;
