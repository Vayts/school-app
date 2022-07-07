import React from 'react';
import PropTypes from 'prop-types';
import { ControlPanelWrapper } from '@src/components/ControlPanel/style';

const ControlPanel = ({arr}) => {
	return (
		<ControlPanelWrapper>
			{/*{arr.map((el) => {*/}
			{/*	return */}
			{/*})}*/}
		</ControlPanelWrapper>
	);
};

ControlPanel.propTypes = {
	arr: PropTypes.array,
};

export default ControlPanel;
