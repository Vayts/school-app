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

const HomeworkForm = ({ homeworkItem, setHomework }) => {
	const validationSchema = yup.object().shape({
		message: yup
			.string()
			.trim()
			.min(0)
			.max(HOMEWORK_MESSAGE_MAX_LENGTH, `Максимум ${HOMEWORK_MESSAGE_MAX_LENGTH} символов`),
		files: yup.mixed().required(),
	});
	
	const closeForm = useCallback(
		() => {
			setHomework({ open: false, title: '', subject: '' });
		},
		[],
	);
	
	return (
		<>
			<HomeworkFormWrapper open={homeworkItem.open}/>
			<HomeworkFormHolder open={homeworkItem.open}>
				<HomeworkCloseButton onClick={closeForm}>
					<span className='icon-close'/>
				</HomeworkCloseButton>
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
					{({ values, isValid, handleChange, handleBlur, handleSubmit, dirty, setFieldValue, touched, errors }) => {
						return (
							<form>
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
								<FileHandler/>
								<HomeworkFormButtonsHolder>
									<Button title='Send' type='submit' primary disabled={!(isValid && dirty)}/>
									<Button title='Close' type='button' primary={false} handler={closeForm}/>
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
