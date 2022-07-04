import React from 'react';
import PropTypes from 'prop-types';
import { CustomTooltipText, CustomTooltipTitle, CustomTooltipWrapper } from '@src/components/CustomTooltip/style';

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		if (!payload[0].payload.empty) {
			return (
				<CustomTooltipWrapper>
					<CustomTooltipTitle>{`Your workload on ${label}`}</CustomTooltipTitle>
					<CustomTooltipText>{`${payload[0].value} hour(-s)`}</CustomTooltipText>
				</CustomTooltipWrapper>
			);
		}
	}
};

CustomTooltip.propTypes = {
	payload: PropTypes.array,
	active: PropTypes.bool,
	label: PropTypes.string,
};

export default CustomTooltip;
