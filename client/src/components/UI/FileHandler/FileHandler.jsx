import React from 'react';
import PropTypes from 'prop-types';
import { FileHandlerDesign, FileHandlerInput, FileHandlerWrapper } from '@src/components/UI/FileHandler/style';

const FileHandler = ({ acceptArr, onChange, multiple, value }) => {
	return (
		<FileHandlerWrapper>
			<FileHandlerDesign>
				<span className='icon-upload'/>
				<p>Upload files</p>
			</FileHandlerDesign>
			<FileHandlerInput value='' onChange={onChange} name='files' type='file' accept={acceptArr} multiple={multiple}/>
		</FileHandlerWrapper>
	);
};

FileHandler.propTypes = {
	acceptArr: PropTypes.arrayOf(PropTypes.string),
	onChange: PropTypes.func,
	multiple: PropTypes.bool,
	
};

export default FileHandler;
