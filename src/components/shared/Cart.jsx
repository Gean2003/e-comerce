import axios from 'axios'
import React, {useEffect, useState} from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {
	const [cartProducts, setCartProducts] = useState()


    const getAllProductCard = () =>{
		
	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

	axios.get(URL, getConfig() )
	    .then(res => setCartProducts(res.data.data.cart.products))
	    .catch(err => setCartProducts())
    }

    useEffect(() => {

	    getAllProductCard()
    }, [])

    // console.log(cartProducts)
    
    const handleCheckout = () => {
	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

	const obj = {
	     "street": "Green St. 1456",
	    "colony": "Southwest",
	    "zipCode": 12345,
	    "city": "USA",
	    "references": "Some references"
	}

	    axios.post(url, obj, getConfig())
	    .then(res => {
		    
		    getAllProductCard() 

	    })
		.catch(err => console.log(err))
    }

    return (

    <div className='w-full h-full max-w-6xl py-4 mx-auto'>
	<h3 className='font-semibold text-center text-[30px] py-3'>Carrito de compras</h3>

	<div className='flex flex-wrap items-center justify-center px-4 gap-4'>
	    {
		cartProducts?.map(product => (
			<ProductCartInfo key={product.id} 
				    product={product}
				    getAllProductCard={getAllProductCard}/>
		))
	    }
	    
	</div>

	<div className='py-4  w-[400px] mx-auto my-10'>
	    
	    <div className='flex items-end justify-between gap-3'>
		<p>Total : </p> <span>850</span>
	    </div>

	    <div className='flex justify-center py-3 px-3 text-white w-full rounded-[5px] mx-auto my-6 bg-red-500'>
	    <button onClick={handleCheckout} className='w-full' >Checkout</button>
	    </div>
	</div>

	

	</div>
	    )
}

export default Cart
