import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText, ErrorTextWrapper, ErrorWrapper } from './style';

export const ErrorMessage = ({ name }) => (
	<ErrorWrapper>
		<ErrorTextWrapper name={name}>
			{(msg) => {
				return <ErrorText>{msg}</ErrorText>;
			}}
		</ErrorTextWrapper>
	</ErrorWrapper>
);

ErrorMessage.propTypes = {
	name: PropTypes.string,
};
