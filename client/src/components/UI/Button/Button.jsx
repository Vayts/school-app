import React from 'react';
import PropTypes from 'prop-types';
import { Loader } from '@src/components/Loader/Loader';
import { ButtonElem } from './style';

export const Button = ({ handler, title, disabled = false, type, primary = false, children, isLoading }) => (
	<ButtonElem primary={primary} type={type} disabled={disabled} onClick={handler} isLoading={isLoading}>
		{title}
		{children}
		{isLoading ? <Loader color='#fff' size={14}/> : null}
	</ButtonElem>
);

Button.propTypes = {
	isLoading: PropTypes.bool,
	disabled: PropTypes.bool,
	handler: PropTypes.func,
	title: PropTypes.string,
	type: PropTypes.string,
	primary: PropTypes.bool,
	children: PropTypes.element,
};
