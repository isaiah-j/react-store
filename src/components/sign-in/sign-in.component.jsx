import React from 'react';
import { TextField, Button, FormControl, InputLabel, Input } from '@material-ui/core';
import useForm from '../../hooks/useForm'
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils'

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
			<div className="sign-in-buttons">
				<Button
					variant='contained'
					type="submit"
					color='primary'
					onClick={handleSubmit}

				>Sign In</Button>
				<Button
					variant='contained'
					color='secondary'
					onClick={signInWithGoogle}
				>Sign In with Google</Button>
			</div>
		</form>
	);
};

export default SignIn;
