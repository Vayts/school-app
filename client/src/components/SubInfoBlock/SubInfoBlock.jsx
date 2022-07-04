import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { Loader } from '@src/components/Loader/Loader';
import {
	SubInfoBlockBottomText,
	SubInfoBlockImg,
	SubInfoBlockText,
	SubInfoBlockWrapper, SubInfoNothingText,
} from '@src/components/SubInfoBlock/style';
import PropTypes from 'prop-types';

const SubInfoBlock = ({ bottomText, imgUrl, dispatcher, selector, big }) => {
	const [isLoading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const axiosPrivate = useAxiosPrivate();
	const data = useSelector(selector);
	
	useEffect(() => {
		const controller = new AbortController();
		dispatch(dispatcher(setLoading, controller, axiosPrivate));
		
		return () => {
			controller.abort();
		};
	}, []);
	
	return (
		<SubInfoBlockWrapper>
			{isLoading ? <Loader />
				: (
					<>
						<SubInfoBlockImg big={big} src={`./assets/img/${imgUrl}`}/>
						{data
							? <SubInfoBlockText>{data}</SubInfoBlockText>
							:	<SubInfoNothingText>You don&apos;t have grades yet</SubInfoNothingText>}
						<SubInfoBlockBottomText>{bottomText}</SubInfoBlockBottomText>
					</>
				)}
		</SubInfoBlockWrapper>
	);
};

SubInfoBlock.propTypes = {
	bottomText: PropTypes.string,
	imgUrl: PropTypes.string,
	dispatcher: PropTypes.func,
	selector: PropTypes.func,
	big: PropTypes.bool,
};

export default SubInfoBlock;
