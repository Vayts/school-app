import React, { useCallback, useEffect, useState } from 'react';
import { Formik, replace } from 'formik';
import { LoginForm, LoginHolder, LoginLink, LoginLinkWrapper, LoginTitle, LoginWrapper } from '@src/pages/Login/style';
import { Logo } from '@src/components/Logo/Logo';
import { Input } from '@src/components/UI/Input/Input';
import { Button } from '@src/components/UI/Button/Button';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { ErrorMessage } from '@src/components/ErrorMessage/ErrorMessage';
import { Loader } from '@src/components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginFetch } from '@store/auth/actions';
import { toast } from 'react-toastify';
import { getUserInfo } from '@store/auth/selectors';

YupPassword(yup);

export const Login = () => {
	const [isLoading, setLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const dismissAll = () => toast.dismiss();
	const user = useSelector(getUserInfo);
	
	useEffect(() => {
		if (user.token) {
			navigate('/', replace);
		}
	}, []);
	
	const validationSchema = yup.object().shape({
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
	});
	
	const onSubmit = useCallback(async (values, { setErrors }) => {
		dispatch(loginFetch(values, setLoading, setErrors, navigate));
		dismissAll();
	}, []);
	
	return (
		<LoginWrapper>
			<LoginHolder>
				<LoginTitle>Login</LoginTitle>
				<Logo/>
				<Formik
					initialValues={{
						login: '',
						password: '',
					}}
					onSubmit={onSubmit}
					validateOnChange
					validationSchema={validationSchema}
				>
					{({ values, handleSubmit, handleBlur, errors, handleChange, dirty, isValid, touched }) => {
						return (
							<LoginForm onSubmit={handleSubmit}>
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
								<Button disabled={!(isValid && dirty)} type="submit" title="Sign in" isLoading={isLoading}>{isLoading ? <Loader color='#fff' size={14}/> : null}</Button>
							</LoginForm>
						);
					}}
				</Formik>
				<LoginLinkWrapper>
					Need an account?
					<LoginLink to='/register' replace>Sign Up</LoginLink>
				</LoginLinkWrapper>
			</LoginHolder>
		</LoginWrapper>
	);
};
