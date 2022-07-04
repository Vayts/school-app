import styled from 'styled-components';

export const InputElem = styled.input`
  height: ${({ height }) => (height || '40px')};
  font-size: ${({ fontSize }) => (fontSize || '14px')};
  width: ${({ width }) => (width || 'auto')};
  background-color: ${({ validation }) => {
		if (validation === 'valid') {
			return '#E6FFE2';
		}
		if (validation === 'error') {
			return '#FFF2F2';
		}
		return '#F0F0F0';
	}};
  border-radius: 8px;
  padding-left: 10px;
	border: ${({ validation }) => {
		if (validation === 'valid') {
			return '1px solid #B2FFA6';
		}
		if (validation === 'error') {
			return '1px solid #FF3030';
		}
		return '1px solid transparent';
	}};;

  &::placeholder {
    color: #5C5C5C;
    font-size: 14px;
    line-height: 18px;
  }
	
	&:hover {
		border-color: #1B4AF0;
	}

  &:focus {
	  outline: none;
	  border-color: ${({ validation }) => {
		if (validation === 'valid') {
			return '#B2FFA6';
		}
		if (validation === 'error') {
			return '#FF3030';
		}
		return '#FF7F37';
	}};;;
  }

`;
