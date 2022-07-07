import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaCounter, TextAreaElem } from '@src/components/UI/Textarea/style';

const Textarea = ({ onChange, onBlur, fontSize, value, width, height, id, name, placeholder, max, validation }) => {
	return (
		<>
			<TextAreaElem
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				value={value || ''}
				width={width}
				height={height}
				id={id}
				name={name}
				maxlength={max}
				fontSize={fontSize}
				validation={validation}
			/>
			<TextAreaCounter>{`${value.length}/${max}`}</TextAreaCounter>
		</>
	);
};

Textarea.propTypes = {
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	fontSize: PropTypes.number,
	value: PropTypes.string,
	width: PropTypes.string,
	height: PropTypes.string,
	id: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	validation: PropTypes.string,
	max: PropTypes.number,
};

export default Textarea;
