import styled from 'styled-components';

export const TitleText = styled.h2`
	font-size: ${({ fz }) => (fz || '20px')};
	font-weight: 800;
	text-align: ${({ align }) => (align || 'left')};
	margin: 5px 0;
`;
