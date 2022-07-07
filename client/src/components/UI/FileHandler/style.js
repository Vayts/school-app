import styled from 'styled-components';

export const FileHandlerWrapper = styled.label`
	margin: 20px 0 20px;
  width: 100%;
  border: 1px dashed transparent;
  display: block;
  background-color: #F0F0F0;
  min-height: 60px;
  border-radius: 10px;
  font-family: 'Mulish', sans-serif;
  position: relative;
  cursor: pointer;

  &:hover {
    transition: all 0.1s;
    background-color: #eeeeee;
    border-color: #1B4AF0;

    span {
      &:before {
        color: #000000;
      }
    }

    p {
      color: #000000;
    }
  }
`;

export const FileHandlerDesign = styled.div`
	display: flex;
	align-items: center;
  position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	
	span {
		&:before {
			font-size: 30px;
		}
	}
	
	p {
		text-transform: uppercase;
		margin-left: 10px;
		font-weight: 800;
		color: #7c7b7b;
	}
`;

export const FileHandlerInput = styled.input`
	visibility: hidden;
	width: 100%;
	height: 100%;
`;
