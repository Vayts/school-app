import React from 'react';
import PropTypes from 'prop-types';
import { InputElem } from './style';

export const Input = ({ onChange, onBlur, fontSize, value, width, height, type, id, name, placeholder, error, validation }) => {
	return (
		<InputElem
			placeholder={placeholder}
			onChange={onChange}
			onBlur={onBlur}
			value={value || ''}
			width={width}
			height={height}
			type={type}
			id={id}
			name={name}
			fontSize={fontSize}
			error={error}
			validation={validation}
		/>
	);
};

Input.propTypes = {
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	fontSize: PropTypes.number,
	value: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string, 
	error: PropTypes.object, 
	validation: PropTypes.string,
};
