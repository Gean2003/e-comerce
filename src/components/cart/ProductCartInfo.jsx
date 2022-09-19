import axios from 'axios'
import React, {useState} from 'react'
import getConfig from '../../utils/getConfig'

const ProductCartInfo = ({product, getAllProductCard, toggleMenu}) => {

    useState()

    const handleDeleteProduct = () => {
	    
	const url = `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`

	axios.delete(url, getConfig())
	    .then(() => getAllProductCard())
	    .catch(err => console.log(err))
    }



    return (
	<article className={` w-[370px] border py-2 px-3 rounded-[5px] ${toggleMenu != true ? 'relative' : 'static'} `} >
    
	    <div className={ `${toggleMenu != true ? 'absolute' : ' hidden' } cursor-pointer right-4 top-[15px]` }>
	    <i className='cursor-pointer text-red-500 text-[20px] bx bx-trash' onClick={handleDeleteProduct}></i>
	</div>

	<header className='my-4'>
	    <h4 className='text-gray-400'>{product.brand}</h4>
	    <h3>{product.title}</h3>
	</header>

	<div className=''>
	    <span className='px-2 py-2 border aspect-square'>{product.productsInCart.quantity}</span>
	</div>

	<div className='flex justify-end my-2'>
	    <p className='text-gray-400'>total : </p> <span className='font-semibold'> {product.price * product.productsInCart.quantity}</span>
	</div>
    </article>
    )
}

export default ProductCartInfo
