import React, { useState } from 'react'
import './sign-up.styles.scss'
import { TextField, Button, FormControl, InputLabel, Input } from '@material-ui/core';
import useForm from '../../hooks/useForm'

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [formValues, handleChange, clearForm] = useForm(initialValues)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        clearForm()
    }
    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <TextField
                required
                type="text"
                label="Display Name"
                controlled value={formValues?.name}
                name='name'
                onChange={handleChange} />
            <TextField
                required
                type="email"
                label="Email"
                controlled value={formValues?.email}
                name='email'
                onChange={handleChange} />
            <TextField
                type="password"
                required
                controlled value={formValues?.password}
                label="Password"
                name='password'
                onChange={handleChange} />
            <TextField
                type="password"
                required
                controlled value={formValues?.confirmPassword}
                label="Confirm Password"
                name='confirmPassword'
                onChange={handleChange} />
            <Button
                variant='contained'
                type="submit"
                color='secondary'>Sign Up</Button>
        </form>

    )
}

export default SignUp