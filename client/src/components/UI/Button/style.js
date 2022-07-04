import styled from 'styled-components';

export const ButtonElem = styled.button`
  padding: 10px 35px;
  color: ${({ isLoading }) => (isLoading ? 'transparent' : '#fff')};
  background-color: #2D5BFF;
  font-size: ${({ primary }) => (primary ? '18px' : '16px')};
  font-weight: 800;
  border: none;
  border-radius: 8px;
  text-align: center;
	margin: 0 auto;
	display: block;
	position: relative;

  &:hover {
    background-color: #1B4AF0;
    cursor: pointer;
    transition: all 0.2s;
  }
	
	&:active {
		background-color: #002ED0;
	}

  &[disabled] {
    color: ${({ isLoading }) => (isLoading ? 'transparent' : '#8A8A8A')};
    background: #EFEFEF;
    cursor: default;
  }
`;
