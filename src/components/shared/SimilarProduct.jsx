import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import CardHome from '../home/CardHome'

const SimilarProduct = ({productInfo}) => {
    
    const [filterProducts, setFilterProducts] = useState()

    const products = useSelector(state => state.products)

    useEffect(() => {

	if (productInfo) {
	    const filter = products.filter(e => e.category.name === productInfo.category)
		setFilterProducts(filter)
	}
	
    }, [productInfo])


    return (
	<div className='flex flex-wrap justify-center w-full py-6 gap-5'>{
	    filterProducts?.map(product => {
		if (product.title !== productInfo.title) {
		    return <CardHome key={product.id}
				     product={product}/>
		}
	    })
	}
	</div>
    )
}

export default SimilarProduct
