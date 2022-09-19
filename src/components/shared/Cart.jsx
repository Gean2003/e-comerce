import axios from 'axios'
import React, {useEffect, useState} from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = ({toggleMenu}) => {
	const [cartProducts, setCartProducts] = useState()
	const [totalPrice, setTotalPrice] = useState(0)


    const getAllProductCard = () =>{
		
	const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

	axios.get(URL, getConfig() )
	    .then(res => {
		const products = res.data.data.cart.products
		setCartProducts(products)
		const total = products.reduce( (acc, cv) => {
		    return Number(cv.price) * cv.productsInCart.quantity  + acc
		}, 0 )
		setTotalPrice(total)
	    } )
	    .catch(err => setCartProducts())
    }

    useEffect(() => {

	    getAllProductCard()
    }, [])
	
    
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
		    
		    setTotalPrice(0)
		    getAllProductCard() 

	    })
		.catch(err => console.log(err))
    }
    


    return (

	<div className='w-[350px] mx-auto max-w-6xl lg:w-full'>
	<h3 className='font-semibold text-center text-[30px] py-3'>Carrito de compras</h3>

	<div className='flex flex-wrap items-center justify-center w-full px-4 gap-4'>
	    {
		cartProducts?.map(product => (
			<ProductCartInfo key={product.id} 
				    product={product}
				    getAllProductCard={getAllProductCard}
				    toggleMenu={toggleMenu}
				    
				    />
		))
	    }
	    
	</div>

	<div className='py-4  w-[350px] mx-auto my-5'>
	    
	    <div className='flex items-end justify-center sm:justify-between gap-3'>
		<p>Total : </p> <span className='font-bold'><i className='bx bx-dollar'></i> {totalPrice}</span>
	    </div>

	    <div className='flex justify-center py-3 px-3 text-white w-[90%] sm:w-full rounded-[5px] mx-auto my-6 bg-red-500'>
	    <button onClick={handleCheckout} className='w-full' >Checkout</button>
	    </div>
	</div>

	</div>
	    )
}

export default Cart
