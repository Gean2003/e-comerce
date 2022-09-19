import React from 'react'

const PurchasesCard = ({product, isOn}) => {

    return (
	<div className= {` flex flex-col w-[330px] mx-auto sm:w-full flex-wrap my-5 px-7 gap-6 ${isOn != true ? 'bg-[#E4E6EB]' : 'alpha '} rounded-md`}>
	    <p className='font-bold sm:text-[20px] sm:text-end my-4'>Ultima compra {product.updatedAt}</p>
	{
	    product.cart.products.map(prod => (

	    <div  key={prod.id} className='flex items-center justify-between gap-4' >
		
		<h4 className='w-[100px]  sm:w-[200px] font-semibold'>{prod.title}</h4>
		<span className='px-1 py-1 font-bold border'>{prod.productsInCart.quantity}</span>
		    <p className='font-semibold'><i className='bx bx-dollar'></i> {prod.price}</p>
	    </div>
	    ))
	}
	</div>
    )
}

export default PurchasesCard
