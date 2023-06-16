import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { useFormik } from 'formik';
import { useCallback, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { auth } from '../../base';
import useAppContext from '../../hooks/useAppContext';
import useNav from '../../hooks/useNav';
import CustomInput from './CustomInput';

const AuthForm = props => {
	const { goTo } = useNav();
	const { setCurrentUser, setShowLoader } = useAppContext();
	const [authError, setAuthError] = useState('');

	const validationSchema = useMemo(
		() =>
			Yup.object({
				email: Yup.string()
					.email('Please enter a valid email address.')
					.matches(
						/^[a-zA-Z0-9_.+-]{2,}@[a-zA-Z0-9-]+\.[a-zA-Z0-9]{2,}$/,
						'Only lowercase Latin letters, dot, underscore, and dash are allowed.'
					)
					.required('Email is required.'),
				password: Yup.string()
					.min(6, 'Password should be longer than 6 characters.')
					.required('Password is required.')
					.matches(/^\S*$/, 'Password must not contain spaces.')
					.matches(
						/^[a-zA-Z0-9]*$/,
						'Password must only contain Latin letters and digits.'
					),
				rePassword:
					props.isShown &&
					Yup.string()
						.oneOf([Yup.ref('password'), null], 'Passwords must match.')
						.required('Please confirm your password.'),
			}),
		[props.isShown]
	);

	const initialValues = useMemo(
		() => ({
			email: '',
			password: '',
			rePassword: '',
		}),
		[]
	);

	const onSubmit = async ({ email, password, resetForm }) => {
		if (props.isShown) {
			try {
				await createUserWithEmailAndPassword(auth, email, password);
				setTimeout(() => {
					resetForm();
					goTo('/login');
				}, 3000);
			} catch (error) {
				if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
					setAuthError('This email already in use');
				} else {
					setAuthError('Something went wrong...sorry, try again!');
				}
			}
		} else {
			await signInWithEmailAndPassword(auth, email, password)
				.then(userCredential => {
					const user = userCredential.user;
					if (user) {
						setCurrentUser(user);
						resetForm();
					}
				})
				.catch(error => {
					if (error.message === 'Firebase: Error (auth/wrong-password).') {
						setAuthError('Wrong password');
					} else if (
						error.message === 'Firebase: Error (auth/user-not-found).'
					) {
						setAuthError('User not found');
					} else {
						setAuthError('Something went wrong...sorry, try again!');
						console.log(error.message);
					}
				});
		}
	};

	const {
		handleSubmit,
		handleChange,
		handleBlur,
		values,
		errors,
		touched,
		isValid,
		resetForm,
	} = useFormik({
		initialValues,
		validationSchema,
		onSubmit: values => onSubmit({ ...values, isValid, resetForm }),
	});

	const IsLoader = useCallback(() => {
		setShowLoader(true);

		setTimeout(() => {
			setShowLoader(false);
		}, 2500);
	}, [setShowLoader]);

	return (
		<form className='auth-form' onSubmit={handleSubmit}>
			{authError && <span className='error_auth'>{authError}</span>}
			<CustomInput
				labelTitle={'Email'}
				name={'email'}
				type={'email'}
				value={values.email}
				change={e => {
					handleChange(e);
					setAuthError('');
				}}
				blur={handleBlur}
				placeholder='email@gmail.com'
			/>
			{touched.email && errors.email && (
				<span className='auth-form_error'>{errors.email}</span>
			)}
			<CustomInput
				labelTitle={'Password'}
				name={'password'}
				type={'password'}
				value={values.password}
				change={e => {
					handleChange(e);
					setAuthError('');
				}}
				blur={handleBlur}
				placeholder='••••••'
			/>
			{touched.password && errors.password && (
				<span className='auth-form_error'>{errors.password}</span>
			)}
			{props.isShown && (
				<>
					<CustomInput
						labelTitle={'Confirm password'}
						name={'rePassword'}
						type={'password'}
						value={props.isShown ? values.rePassword : ''}
						change={e => {
							handleChange(e);
							setAuthError('');
						}}
						blur={handleBlur}
						placeholder='••••••'
					/>
					{touched.rePassword && errors.rePassword && (
						<span className='auth-form_error'>{errors.rePassword}</span>
					)}
				</>
			)}
			<button
				type='submit'
				className='auth-form_btn'
				onClick={!props.isShown ? IsLoader : null}
			>
				{props.isShown ? 'Register' : 'Login'}
			</button>
			{!props.isShown && (
				<NavLink className='auth-form_link' to='/register'>
					don’t have an account
				</NavLink>
			)}
		</form>
	);
};

export default AuthForm;
