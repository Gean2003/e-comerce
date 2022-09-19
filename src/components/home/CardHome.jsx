import axios from 'axios'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import getConfig from '../../utils/getConfig'

const CardHome = ({product, isOn}) => {

    const navigate = useNavigate()

    const handleClick = () => {
	navigate(`/product/${product.id}`)

    }

    const handleAddCart = e => {

	e.stopPropagation()

	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
	const obj = {
	    id: product.id,
	    quantity: 1
	}

	axios.post(url, obj, getConfig() )
	    .then()
	    .catch(err => console.log(err))
    }

    return (
	<div onClick={handleClick}  className={` ${isOn === true ? 'bg-[#3A3B3C] rounded text-black' : 'bg-[#E4E6EB]'} my-7 lg:my-0 lg:mx-0 mx-auto w-[330px] lg:hover:scale-105 lg:transition-all lg:cursor-pointer lg:w-[350px] lg:py-3 rounded-2xl lg:px-3`} >
	    <header className='w-[250px] h-[200px] mx-auto lg:w-[280px] lg:h-[250px] lg:overflow-hidden lg:mx-auto'>
		<img className='object-contain w-full h-full lg:w-full lg:h-full' src={product.productImgs} alt="" />
	</header>

	    <div className= { ` px-3 py-3 mx-auto my-2 text-left  ${ isOn === true ? 'cardb' : 'card'}` }>
		<h3 className='w-[300px] my-2 font-semibold lg:text-[16px]'>{product.title}</h3>
	    <section>
		<h4 className='my-2'>Price</h4>
		<p className='my-2'> <i className='bx bx-dollar'></i> {product.price}</p>
	    </section>
		
	    <div  className='text-end'>
		<button onClick={handleAddCart} className='rounded-[50%] bg-red-500 hover:scale-105 transition-all w-[50px] aspect-square'>
		<i className='text-white bx bx-cart-add text-[25px]' ></i>
	    </button>
	    </div>
	    
	</div>

    </div>
    )
}

export default CardHome
