import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'
import './sign-in-page.styles.scss'

const SignInPage = () => {
    return (
        <form className='form-container'>
            <SignIn></SignIn>
        </form>
    )
}

export default SignInPage