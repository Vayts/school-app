import styled from 'styled-components';

export const HomeworkFormWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(1px);
  z-index: ${({ open }) => (open ? 5 : -10)};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transition: ${({ open }) => (open ? 'opacity 0.2s' : 'none')};
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const HomeworkFormHolder = styled.div`
  height: 100vh;
  width: 25%;
  align-items: center;
  background-color: #fff;
  z-index: 10;
  padding: 25px;
  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: ${({ open }) => (open ? 'all 0.2s' : 'none')}
`;

export const HomeworkFormSubjectTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`;
export const HomeworkFormTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
`;

export const HomeworkFormButtonsHolder = styled.div`
	margin-top: 15px;
  display: flex;
	align-items: center;
	justify-content: center;
`;

export const HomeworkCloseButton = styled.div`
  position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	
	span {
		
		&:before {
      color: #2d5bff;
			font-size: 20px;
		}
		
		&:hover {
			transform: scale(1.1);
		}
	}
`;
