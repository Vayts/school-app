import React from 'react';
import PropTypes from 'prop-types';
import { FileHandlerDesign, FileHandlerInput, FileHandlerWrapper } from '@src/components/UI/FileHandler/style';

const FileHandler = () => {
	return (
		<FileHandlerWrapper>
			<FileHandlerDesign>
				<span className='icon-upload'/>
				<p>Upload files</p>
			</FileHandlerDesign>
			<FileHandlerInput type='file'/>
		</FileHandlerWrapper>
	);
};

FileHandler.propTypes = {
	
};

export default FileHandler;
