import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BlockTitle from '@src/components/BlockTitle/BlockTitle';
import { Loader } from '@src/components/Loader/Loader';
import { useAxiosPrivate } from '@src/hooks/useAxiosPrivate';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
	InfoBlockContent,
	InfoBlockControlItem,
	InfoBlockControlPanel, InfoBlockDate, InfoBlockDateWrapper,
	InfoBlockImg,
	InfoBlockImgWrapper, InfoBlockInfo,
	InfoBlockList,
	InfoBlockListItem, InfoBlockMainInfo, InfoBlockNothingText, InfoBlockText, InfoBlockTime, InfoBlockTitle,
	InfoBlockWrapper,
} from './style';

const InfoBlock = ({
	blockTitle,
	controlArr,
	dispatcher,
	filterDispatcher,
	filterSelector,
	selectSelector,
	textAttr,
	dateAttr,
	big,
	imgInCloud }) => {
	const [isLoading, setLoading] = useState(false);
	const axiosPrivate = useAxiosPrivate();
	const selected = useSelector(selectSelector);
	const dispatch = useDispatch();
	const filtered = useSelector(filterSelector);
	
	useEffect(() => {
		const controller = new AbortController();
		
		dispatch(dispatcher(setLoading, controller, axiosPrivate));
		
		return () => {
			controller.abort();
		};
	}, []);
	
	const handleControlClick = useCallback(
		(e) => {
			dispatch(filterDispatcher(e.target.dataset.value));
		},
		[],
	);
	
	return (
		<InfoBlockWrapper>
			<BlockTitle text={blockTitle}/>
			<InfoBlockControlPanel>
				{controlArr.map((el) => {
					return (
						<InfoBlockControlItem
							key={uuidv4()}
							onClick={handleControlClick} 
							data-value={el}
							selected={selected === el}
						>
							{el}
						</InfoBlockControlItem>
					);
				})}

			</InfoBlockControlPanel>
			<InfoBlockContent>
				{isLoading ? <Loader/>
					: filtered.length === 0 ? <InfoBlockNothingText>Nothing!</InfoBlockNothingText>
						: (
							<InfoBlockList>
								{filtered.map((el) => {
									return (
										<InfoBlockListItem key={el._id}>
											<InfoBlockInfo>
												<InfoBlockImgWrapper>
													<InfoBlockImg big={big} src={imgInCloud ? `./assets/img/${el.imgUrl}.png` : `./assets/img/${el.type}.png`}/>
												</InfoBlockImgWrapper>
												<InfoBlockMainInfo>
													<InfoBlockTitle>
														{el.title}
													</InfoBlockTitle>
													<InfoBlockText>
														{el[textAttr]}
													</InfoBlockText>
												</InfoBlockMainInfo>
											</InfoBlockInfo>
											<InfoBlockDateWrapper>
												<InfoBlockDate>{el[dateAttr].slice(5, 10).replace('T', ' ').replace('-', '.')}</InfoBlockDate>
												<InfoBlockTime>{el[dateAttr].slice(10, 16).replace('T', ' ')}</InfoBlockTime>
											</InfoBlockDateWrapper>
										</InfoBlockListItem>
									);
								})}
							</InfoBlockList>
						)}
			</InfoBlockContent>
		</InfoBlockWrapper>
	);
};

InfoBlock.propTypes = {
	controlArr: PropTypes.arrayOf(PropTypes.string),
	dispatcher: PropTypes.func, 
	filterSelector: PropTypes.func,
	filterDispatcher: PropTypes.func,
	selectSelector: PropTypes.func,
	blockTitle: PropTypes.string,
	textAttr: PropTypes.string,
	dateAttr: PropTypes.string,
	imgInCloud: PropTypes.bool,
	big: PropTypes.bool,
};

export default InfoBlock;
