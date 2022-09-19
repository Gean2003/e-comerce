import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'

const FormLogin = ({isOn}) => {

    const {reset, register, handleSubmit} = useForm()
    

    const submit = data => {
	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
	axios.post(url, data)
	    .then(res => {
		console.log(res.data)
		localStorage.setItem('token', res.data.data.token)
	    })
	    .catch(err => console.log(err))

	// reset({
	//     email: '',
	//     password: ''
	// })
    }

    return (
	<div className={` ${isOn != true ? 'bg-[#E4E6EB]' : 'alpha ' } h-[400px] lg:w-[350px] rounded-md  mx-auto w-[330px] py-3 `}>
	    <form  className='flex flex-col items-center justify-center w-full h-full gap-6' onSubmit={handleSubmit(submit)} >
		<h2 className='font-medium text-center text-[20px]'>Login</h2>

	<div className='flex flex-col gap-2'>
	    <label className='text-[15px]' >Email</label>
	    <input className='py-1  w-[200px] rounded-[3px]' {...register('email')} type="email" id='email' />
	</div>

	<div className='flex flex-col gap-1'>
	    <label className='text-[15px]' htmlFor="">Password</label>
	    <input className='py-1  w-[200px] rounded-[3px]' {...register('password')} type="password" id='password' />
	</div>
	
		<div className='flex items-center justify-center'>
		    
		    <button className='lg:hover:scale-105 transition-all rounded-sm text-white font-medium w-[200px] px-3 py-3 bg-red-500'>Login</button>
		</div>
	    </form>
	</div>
    
    )
}

export default FormLogin
