import {
	GradeBlockBottomText,
	GradeBlockImg,
	GradeBlockText,
	GradeBlockWrapper,
} from '@src/pages/Dashboard/GradeBlock/style';
import React from 'react';

const GradeBlock = () => {
	return (
		<GradeBlockWrapper>
			<GradeBlockImg src='./assets/img/gradeDay.png'/>
			<GradeBlockText>123</GradeBlockText>
			<GradeBlockBottomText>Days without bad grades</GradeBlockBottomText>
		</GradeBlockWrapper>
	);
};

GradeBlock.propTypes = {
	
};

export default GradeBlock;
