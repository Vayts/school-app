import styled from 'styled-components';

export const SmallProfileWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
  justify-content: center;
	align-items: center;
	margin-bottom: 30px;
`;

export const SmallProfileImage = styled.img`
	width: 100px;
	height: 100px;
`;

export const SmallProfileName = styled.h3`
	font-size: 24px;
	font-weight: 800;
	margin: 10px 0 0;
`;

export const SmallProfileRole = styled.span`
  display: block;
  margin-top: 5px;
  background-color: #438a35;
  border-radius: 4px;
  padding: 5px 15px;
  color: #fff;
  user-select: none;
	
	&:first-letter {
		text-transform: uppercase;
	}
`;
