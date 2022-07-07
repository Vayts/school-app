import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText, ErrorTextWrapper, ErrorWrapper } from './style';

export const ErrorMessage = ({ name }) => (
	<ErrorWrapper>
		<ErrorTextWrapper name={name}>
			{(msg) => {
				// eslint-disable-next-line no-console
				console.log(msg);
				return <ErrorText>{msg}</ErrorText>;
			}}
		</ErrorTextWrapper>
	</ErrorWrapper>
);

ErrorMessage.propTypes = {
	name: PropTypes.string,
};
