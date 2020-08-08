import React from 'react';
import { TextField, Button, FormControl, InputLabel, Input } from '@material-ui/core';
import useForm from '../../hooks/useForm'
import './sign-in.styles.scss';

const initialValues = {
	email: '',
	password: ''
}

const SignIn = () => {
	const [formValues, handleChange, clearForm] = useForm(initialValues)
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(formValues)
		clearForm()
	}

	return (
		<form className='sign-in-form' onSubmit={handleSubmit}>
			<TextField
				required
				type="email"
				label="Email"
				controlled value={formValues?.email}
				name='email' onChange={handleChange} />
			<TextField
				type="password"
				required
				controlled value={formValues?.password}
				label="Password" name='password'
				onChange={handleChange} />
			<Button
				variant='contained'
				type="submit"
				color='primary'>Sign In</Button>
		</form>
	);
};

export default SignIn;
