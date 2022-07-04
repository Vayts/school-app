import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const ErrorTextWrapper = styled(ErrorMessage)`

`;

export const ErrorText = styled.p`
	width: 100%;
  font-size: 14px;
  color: #be2828;
  margin: 0;
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 8px 0;
  height: 16px;
`;
