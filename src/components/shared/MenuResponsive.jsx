import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuResponsive = ({handleToggleMenu}) => {

    return (
    <ul className=' text-[20px]  w-full flex flex-col items-center justify-center h-screen gap-5 '>
		    <span className='lg:hidden fixed top-[220px] '  onClick={handleToggleMenu}><i  className='text-3xl bx bx-x' ></i></span>

		    <li> <NavLink to='/login' onClick={handleToggleMenu} className={({isActive}) => isActive ? 'text-red-500 ' : ''}> <i className='bx bxs-user' ></i> Login</ NavLink> </li>
			<li><NavLink to='/purchases' onClick={handleToggleMenu} className={({isActive}) => isActive ? 'text-red-500' : ''}> <i className='bx bxs-purchase-tag-alt' ></i> Purchases</NavLink> </li>
	            <li><h2><i className='bx bx-cart-download' ></i> Cart</h2></li>
    </ul>
    )

}

export default MenuResponsive
