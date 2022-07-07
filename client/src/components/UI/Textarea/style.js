import styled from 'styled-components';

export const TextAreaElem = styled.textarea`
	resize: none;
	height: ${({ height }) => (height || '150px')};
  width: ${({ width }) => (width || '100%')};
  background-color: ${({ validation }) => {
		if (validation === 'valid') {
			return '#E6FFE2';
		}
		if (validation === 'error') {
			return '#FFF2F2';
		}
		return '#F0F0F0';
	}};
	border-radius: 10px;
	padding: 7px;
  border: ${({ validation }) => {
		if (validation === 'valid') {
			return '1px solid #B2FFA6';
		}
		if (validation === 'error') {
			return '1px solid #FF3030';
		}
		return '1px solid transparent';
	}};

  &:hover {
    border-color: #1B4AF0;
	  transition: all 0.1s;
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
	}};
  }
`;

export const TextAreaCounter = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #5C5C5C;
	text-align: right;
	margin: 0;
`;
