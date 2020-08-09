import React, { useState } from 'react'
import './sign-up.styles.scss'
import { TextField, Button, FormControl, InputLabel, Input } from '@material-ui/core';
import useForm from '../../hooks/useForm'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const initialValues = {
    displayName: 'isaiah',
    email: 'synthitics@gmail.com',
    password: 'isaiah123',
    confirmPassword: 'isaiah123'
}
const SignUp = () => {
    const [formValues, handleChange, clearForm] = useForm(initialValues)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const { password, confirmPassword, displayName, email } = formValues
        if (password !== confirmPassword) {
            alert('Passwords don\'t match')
        }


        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, { displayName })
        } catch (error) {
            console.log(error)

        }
        clearForm()
    }
    return (
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <TextField
                required
                type="text"
                label="Display Name"
                controlled
                value={formValues?.displayName}
                name='displayName'
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