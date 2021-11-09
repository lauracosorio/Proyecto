import React from 'react'
import Footer from '../Components/Footer/Footer';
import Nav from '../Components/Home/Nav';
import LoginForm from '../Components/Login/LoginForm';
import '../shared/components/Styles/login.css'

function Login() {
    return (
        <>
            <Nav />
            < LoginForm />
            <Footer />
        </>
    )
}

export default Login;