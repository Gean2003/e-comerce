import React from 'react'

const PurchasesCard = ({product}) => {

    return (
    <div className='flex flex-col flex-wrap my-5 px-7 gap-6'>
	<p className='font-bold text-[20px] text-end my-4'>Ultima compra {product.updatedAt}</p>
	{
	    product.cart.products.map(prod => (

	    <div  key={prod.id} className='flex items-center justify-between gap-4' >
		
		    <h4 className='font-semibold'>{prod.title}</h4>
		    <span className='px-1 py-1 border'>{prod.productsInCart.quantity}</span>
		    <p className='font-semibold'>{prod.price}</p>
	    </div>
	    ))
	}
	</div>
    )
}

export default PurchasesCard
