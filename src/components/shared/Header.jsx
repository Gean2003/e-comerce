import React  from 'react'
import {NavLink} from 'react-router-dom'
import MenuResponsive from './MenuResponsive'

const Header = ({toggleMenu, handleToggleMenu, isOn}) => {

    

    return (
	<header className='flex items-center justify-between w-full py-1 sm:py-3 sm:h-[60px]'>
	    <NavLink to='/'>
		<h1 className='px-4 py-2 font-bold lg:text-4xl'>e-commerce</h1>
	    </NavLink>
	    <nav>
		<div className={`flex justify-end sm:hidden clip ${toggleMenu === false? 'clip' : 'open '}  ${isOn === true ? 'openDarkMode' : ' '}  border-black` }>
			
		    <span className={ `sm:hidden ${toggleMenu === true ? 'hidden' : ''}` } ><i className='bx bx-list-ul text-[33px] py-1'  onClick={handleToggleMenu}></i></span>
		{

		    toggleMenu != true ? '' : <MenuResponsive handleToggleMenu={handleToggleMenu}
								toggleMenu={toggleMenu}/>
		}
		</div>
		
		<ul className='hidden sm:font-semibold sm:text-[17px] sm:static sm:h-0 sm:flex-row sm:flex sm:px-4 sm:gap-5'>

		    <li className='lg:hover:text-red-500 lg:hover:scale-105 transition-all' > <NavLink to='/login'  className={({isActive}) => isActive ? 'text-red-500' : ''} > <i className='bx bxs-user' ></i> Login</ NavLink> </li>
			<li className='lg:hover:text-red-500 lg:hover:scale-105 transition-all'><NavLink to='/purchases' className={({isActive}) => isActive ? 'text-red-500' : ''}> <i className='bx bxs-purchase-tag-alt' ></i> Purchases</NavLink> </li>
		    <li className='lg:cursor-pointer lg:hover:text-red-500 lg:hover:scale-105 transition-all'> <NavLink to='/cart' className={({isActive}) => isActive ? 'text-red-500' : ''}><i className='bx bx-cart-download'></i>  Cart</NavLink></li>
	     </ul>
		
	    </nav>
	</header>
    )
}

export default Header
