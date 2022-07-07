import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
	HomeworkCloseButton, HomeworkFormButtonsHolder,
	HomeworkFormHolder,
	HomeworkFormSubjectTitle, HomeworkFormTitle,
	HomeworkFormWrapper,
} from '@src/pages/Homework/HomeworkForm/style';
import Textarea from '@src/components/UI/Textarea/Textarea';
import * as yup from 'yup';
import { HOMEWORK_MESSAGE_MAX_LENGTH } from '@constants/student';
import FileHandler from '@src/components/UI/FileHandler/FileHandler';
import Title from '@src/components/UI/Title/Title';
import { Button } from '@src/components/UI/Button/Button';
import { HOMEWORK_EXTENSIONS } from '@constants/extensions';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { FilesList } from '@src/components/FilesList/FilesList';
import { getNotification } from '@src/notifications/notification';
import { fileTypeValidation } from '../../../../helpers/fileTypeValidation';

const HomeworkForm = ({ homeworkItem, setHomework }) => {
	const validationSchema = yup.object().shape({
		message: yup
			.string()
			.trim()
			.min(0)
			.max(HOMEWORK_MESSAGE_MAX_LENGTH, `Максимум ${HOMEWORK_MESSAGE_MAX_LENGTH} символов`),
		files: yup.mixed().test('files', 'Invalid file type', (value) => fileTypeValidation(value, Object.keys(HOMEWORK_EXTENSIONS))).required(),
	});
	
	const closeForm = useCallback((resetForm) => {
		return () => {
			setHomework({ open: false, title: '', subject: '' });
			resetForm();
		};
	}, []);
	
	const onFileChange = useCallback((setFieldValue, setFieldTouched, values) => {
		return (event) => {
			const file = [...event.target.files];
			const filesName = values.files.map((el) => el.name);
			const approvedFiles = [];
			file.forEach((el) => {
				if (filesName.includes(el.name)) {
					getNotification(`${el.name} already exist`, 'error');
				} else {
					approvedFiles.push(el);
				}
			});
			
			if (approvedFiles.length) {
				setFieldTouched('files', true, false);
				setFieldValue('files', [...values.files, ...approvedFiles]);
			}
		};
	}, []);
	
	return (
		<>
			<HomeworkFormWrapper open={homeworkItem.open}/>
			<HomeworkFormHolder open={homeworkItem.open}>
				<Title fz='25px' text='Send homework'/>
				<HomeworkFormSubjectTitle>{homeworkItem.subject}</HomeworkFormSubjectTitle>
				<HomeworkFormTitle>{homeworkItem.title}</HomeworkFormTitle>
				<Formik
					initialValues={{
						message: '',
						files: [],
					}}
					validateOnChange
					onSubmit={() => {}}
					validationSchema={validationSchema}
				>
					{({ values, isValid, handleChange, handleBlur, handleSubmit, dirty, setFieldValue, touched, errors, setFieldTouched, resetForm }) => {
						return (
							<form>
								<HomeworkCloseButton onClick={closeForm(resetForm)}>
									<span className='icon-close'/>
								</HomeworkCloseButton>
								<Textarea
									id='message'
									placeholder='Message'
									name='message'
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									max={HOMEWORK_MESSAGE_MAX_LENGTH}
									validation={touched.message ? touched.message && errors.message ? 'error' : 'valid' : 'unTouched'}
								/>
								<FileHandler value={values.files} onChange={onFileChange(setFieldValue, setFieldTouched, values)} acceptArr={Object.keys(HOMEWORK_EXTENSIONS)} multiple/>
								<FilesList filesArr={values.files} setFieldValue={setFieldValue}/>
								<ErrorMessage name='files'/>
								<HomeworkFormButtonsHolder>
									<Button title='Send' type='submit' primary disabled={!(isValid && dirty)}/>
									<Button title='Close' type='button' primary={false} handler={closeForm(resetForm)}/>
								</HomeworkFormButtonsHolder>
								
							</form>
						);
					}}
				</Formik>
			</HomeworkFormHolder>
		</>
	);
};

HomeworkForm.propTypes = {
	homeworkItem: PropTypes.shape({
		open: PropTypes.bool,
		subject: PropTypes.string,
		title: PropTypes.string,
	}),
	setHomework: PropTypes.func,
};

export default HomeworkForm;
