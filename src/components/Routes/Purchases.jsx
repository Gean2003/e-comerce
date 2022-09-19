import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import getConfig from '../../utils/getConfig'
import PurchasesCard from '../purchases/PurchasesCard'

const Purchases = ({isOn}) => {

    const navigate = useNavigate()
    const [purchaseProducts, setPurchaseProducts] = useState()

    useEffect(() => {
	
	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

	axios.get(url, getConfig())
	    .then( res => setPurchaseProducts(res.data))
	    .catch(err => console.log(err))


    }, [])


    const handleClick = () => {
	navigate('/')
    }

    return (
    <div>

	 <div className='flex gap-1'> 
	    <h3 className='px-2 cursor-pointer' onClick={handleClick} >Home <i className='text-red-500 bx bx-right-arrow-alt'></i> </h3>  <span> compras </span> 
	 </div >

	<div className='py-3 mx-auto my-5 border max-w-7xl'>
		 <h3 className='font-bold text-center text-[30px] my-6'>Mis compras</h3>
	{
	    purchaseProducts?.data.purchases.map(product => (
	    
		<PurchasesCard key={product.cart.id}
				product={product}
				isOn={isOn}/>

	    ))
	}
	</div>
	   
	
	</div>
    )
}

export default Purchases
