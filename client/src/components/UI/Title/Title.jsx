import React from 'react';
import PropTypes from 'prop-types';
import { TitleText } from '@src/components/UI/Title/style';

const Title = ({ fz, align, text }) => {
	return (
		<TitleText fz={fz} align={align}>{text}</TitleText>
	);
};

Title.propTypes = {
	fz: PropTypes.string,
	align: PropTypes.string,
	text: PropTypes.string,
};

export default Title;
