import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { HOMEWORK_EXTENSIONS } from '@constants/extensions';
import {
	FilesDeleteButton,
	FilesListBoard,
	FilesListImg,
	FilesListImgWrapper,
	FilesListItem,
	FilesListName,
	FilesListWrapper,
} from './style';

export const FilesList = ({ filesArr, setFieldValue }) => {
	const deleteFile = (e) => {
		e.stopPropagation();
		e.preventDefault();
		
		const newArr = filesArr.filter((el, index) => {
			if (Number(e.currentTarget.dataset.index) !== index) {
				return el;
			}
			return null;
		});
		setFieldValue('files', newArr);
	};
	
	return (
		<FilesListWrapper>
			<FilesListBoard>
				{filesArr.map((el, index) => {
					const type = el.name.split('.').pop();
					const imgPath = HOMEWORK_EXTENSIONS[type] ? HOMEWORK_EXTENSIONS[type].img : 'errExt.png';
					
					return (
						<FilesListItem key={`${el.name}`}>
							<FilesListImgWrapper href={URL.createObjectURL(filesArr[index])} download>
								<FilesDeleteButton data-index={index} onClick={deleteFile}>
									<span className='icon-close'/>
								</FilesDeleteButton>
								<FilesListImg title={el.name} src={`./assets/img/${imgPath}`}/>
								<FilesListName>{`${el.name.slice(0, 4).trim()}.${type}`}</FilesListName>
							</FilesListImgWrapper>
						</FilesListItem>
					);
				})}
			</FilesListBoard>
		</FilesListWrapper>
	);
};

FileList.propTypes = {
	filesArr: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
	})),
};
