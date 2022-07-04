import React, { useCallback, useState } from 'react';
import { Formik } from 'formik';
import {
	RegisterForm,
	RegisterHolder, RegisterLink,
	RegisterLinkWrapper,
	RegisterTitle,
	RegisterWrapper,
} from '@src/pages/Register/style';
import { Logo } from '@src/components/Logo/Logo';
import { Input } from '@src/components/UI/Input/Input';
import { Button } from '@src/components/UI/Button/Button';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { Select } from '@src/components/UI/Select/Select';
import { ROLES } from '@constants/roles';
import { Loader } from '@src/components/Loader/Loader';

YupPassword(yup);

export const Register = () => {
	const [isLoading, setLoading] = useState(false);
	
	const validationSchema = yup.object().shape({
		firstName: yup.string()
			.matches(/^[aA-zZ\s]+$/, 'Please enter valid first name')
			.min(2, 'Must be at least 2 characters')
			.max(30, 'Must be less than 30 characters')
			.required('Required field'),
		lastName: yup.string()
			.matches(/^[aA-zZ\s]+$/, 'Please enter valid last name')
			.min(2, 'Must be at least 2 characters')
			.max(30, 'Must be less than 30 characters')
			.required('Required field'),
		login: yup.string()
			.matches(/^[A-Za-z][A-Za-z0-9_]/, 'Please enter valid login')
			.min(6, 'Must be at least 6 characters')
			.max(20, 'Must be less than 30 characters')
			.required('Required field'),
		password: yup.string()
			.password()
			.min(8, 'Password must be at least 8 characters')
			.minLowercase(1, 'At least 1 lower case letter')
			.minUppercase(1, 'At least 1 upper case letter')
			.minNumbers(1, 'At least 1 number')
			.minSymbols(0)
			.required('Required field'),
		role: yup.string().required('Required field'),
	});
	
	const onSubmit = useCallback((values) => {
		setLoading(true);
		fetch('http://localhost:8080/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
			})
			.catch(() => {
				setLoading(false);
			});
	}, []);
	
	return (
		<RegisterWrapper>
			<RegisterHolder>
				<RegisterTitle>Register</RegisterTitle>
				<Logo/>
				<Formik
					initialValues={{
						firstName: '',
						lastName: '',
						login: '',
						password: '',
						role: '',
					}}
					onSubmit={onSubmit}
					validateOnChange
					validationSchema={validationSchema}
				>
					{({ 
						values, 
						handleSubmit, 
						handleBlur, 
						errors, 
						handleChange, 
						setFieldValue, 
						dirty, 
						isValid, 
						touched, 
					}) => {
						return (
							<RegisterForm onSubmit={handleSubmit}>
								<Select arr={ROLES} setFieldValue={setFieldValue} selectValue={values.role} placeholder='You are...'/>
								<ErrorMessage name='role'/>
								<Input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.firstName}
									placeholder="First Name"
									width='100%'
									name="firstName"
									error={touched.firstName && errors.firstName}
									validation={touched.firstName ? touched.firstName && errors.firstName ? 'error' : 'valid' : 'unTouched'}
								/>
								<ErrorMessage name='firstName'/>
								<Input
									type="text"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.lastName}
									placeholder="Last Name"
									width='100%'
									name="lastName"
									validation={touched.lastName ? touched.lastName && errors.lastName ? 'error' : 'valid' : 'unTouched'}
								/>
								<ErrorMessage name='lastName'/>
								<Input
									type="login"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.login}
									placeholder="Login"
									width='100%'
									name="login"
									validation={touched.login ? touched.login && errors.login ? 'error' : 'valid' : 'unTouched'}
								/>
								<ErrorMessage name='login'/>
								<Input
									type="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									placeholder="Password"
									width='100%'
									name="password"
									validation={touched.password ? touched.password && errors.password ? 'error' : 'valid' : 'unTouched'}
								/>
								<ErrorMessage name='password'/>
								<Button disabled={!(isValid && dirty)} type="submit" title="Register" isLoading={isLoading}>{isLoading ? <Loader color='#fff' size={14}/> : null}</Button>
							</RegisterForm>
						);
					}}
				</Formik>
				<RegisterLinkWrapper>
					Already have an account?
					<RegisterLink to='/login' >Sign In</RegisterLink>
				</RegisterLinkWrapper>
			</RegisterHolder>
		</RegisterWrapper>
	);
};
