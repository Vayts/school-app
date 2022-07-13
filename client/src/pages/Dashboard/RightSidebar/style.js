import styled from 'styled-components';

export const RightSidebarWrapper = styled.div`
  background-color: #fff;
  width: 400px;
  display: flex;
	align-items: center;
	flex-direction: column;
	height: 100vh;
	padding: 15px;
	position: fixed;
	right: 0;
  box-shadow: 0 0 20px rgba(132, 132, 132, 0.2);
	transition: all 0.15s;
	
	@media (max-width: 1919px) {
		transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(100%)')};
	}
`;

export const RightSidebarButton = styled.div`
  position: absolute;
	top: 10px;
	right: 10px;
	z-index: 3;
	display: none;
	
	span {
		&:before {
			font-size: 20px;
		}
		
		&:hover {
			cursor: pointer;
			transition: all 0.2s;

      &:before {
        color: #2d5bff;
      }
		}
	}

  @media (max-width: 1900px) {
    display: block;
  }
`;
