import React from 'react'
import FormLogin from '../login/FormLogin'

const Login = ({isOn}) => {
    return (
	<main className='flex items-center justify-center w-full h-[90vh]'>
	    <FormLogin isOn={isOn}/>
	</main>
    )
}

export default Login
