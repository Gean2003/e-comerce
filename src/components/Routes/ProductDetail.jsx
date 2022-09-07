import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import Carrusel from '../shared/Carrusel'
import SimilarProduct from '../shared/SimilarProduct'

const ProductDetail = ({isOn, toggleMenu}) => {
	
    const [productInfo, setProductInfo] = useState()
    const [count, setCount] = useState(1)

    const {id} = useParams()
    
    useEffect(() => {
	const url = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id} `
	axios.get(url)
	    .then(res => setProductInfo(res.data.data.product))
	    .catch(err => console.log(err))
    }, [])
    
    // console.log(productInfo)

    const navigate = useNavigate()

    const handleClick = () => {
	navigate('/')
    }

    const handlePlus = () => {
	setCount(count + 1)
    }

    const handleMinus = () => {
	if (count === 1) {}
	else{
	    setCount(count - 1)
	}
    }

 const handleAddCart = e => {

	e.stopPropagation()

	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
	const obj = {
	    id: productInfo.id,
	    quantity: 1
	}

	axios.post(url, obj, getConfig() )
	    .then( )
	    .catch(err => console.log(err))
    }   

    return (
    <div className='mx-auto max-w-7xl'>
	<div className='flex gap-1'>
	    <h3 className='px-2 cursor-pointer' onClick={handleClick} >Home <i className='text-red-500 bx bx-right-arrow-alt'></i> </h3>  <span> {productInfo?.title}</span>
	</div>

	<div className='sm:my-[70px] sm:py-8 flex flex-col sm:flex-row gap-5'>

	    <div className='overflow-hidden w-[90%] mx-auto my-10 sm:my-0 lg:mx-0  sm:w-[50%]'>
		<Carrusel  productInfo={productInfo}
			    toggleMenu= {toggleMenu}/>
	    </div>

	    <div className='sm:w-[50%] mx-4 px-2'>
		<h2 className='my-3 font-bold text-center text-[30px]'>{productInfo?.title}</h2>
		<p className='py-3 text-justify'>{productInfo?.description}</p>
		    
		<div className='flex items-center my-2 gap-[103px]'>
		    <section>
			<h4 className= {` font-semibold py-3 ${isOn != true ? 'text-black' :  'text-gray-300 '} `}>Price</h4>
			<p >{productInfo?.price}</p>
		    </section>

		    <section>
			<h4 className={` font-semibold py-2 ${isOn != true ? 'text-black' :  'text-gray-300 '}`} >Quantity</h4>
			<button className='px-1 py-1 w-[40px] bg-red-500 text-white  ' onClick={handleMinus}>-</button>
			<button className='px-1 py-1 border w-[50px]'>{count}</button>
			<button className='px-1 py-1 w-[40px] bg-red-500 text-white  '  onClick={handlePlus}>+</button>
		    </section>
	    
		</div>
		
		<div className='py-5 mt'>
		    <button onClick={handleAddCart} className='lg:hover:scale-105 lg:transition-all px-3 py-3 bg-red-500 w-[90%] lg:w-[200px] rounded-[5px] flex items-center mx-auto justify-center gap-3 text-white'>Add to cart <i className='bx bx-cart-add text-[20px]' ></i></button>
		</div>
	    

	    </div>

	</div>

	<SimilarProduct productInfo = {productInfo}/>
    </div>
    )
}

export default ProductDetail
