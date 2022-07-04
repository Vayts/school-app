import React from 'react';
import PropTypes from 'prop-types';
import { BlockTitleText } from '@src/components/BlockTitle/style';

const BlockTitle = ({ text }) => {
	return (
		<BlockTitleText>{text}</BlockTitleText>
	);
};

BlockTitle.propTypes = {
	text: PropTypes.string,
};

export default BlockTitle;
