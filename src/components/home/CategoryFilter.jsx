import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getProductByCategory} from '../../store/slices/products.slice'

const CategoryFilter = () => {

    const [categories, setCategories] = useState()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
	const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/products/categories'
	axios.get(url)
	    .then(res => setCategories(res.data.data.categories))
	    .catch(err => console.log(err))
    }, [])

    const dispatch = useDispatch()

    const handleClickCategory = (id) => {
	    dispatch(getProductByCategory(id))
    }

   const products = useSelector(state => state.products)

    const handleOpenCategory = () => {
	setIsOpen(!isOpen)
    }

    return (
    <div className='absolute flex flex-col top-[10px] '>
	<h3 className='px-2 py-2 my-3 bg-gray-300 cursor-pointer' onClick={handleOpenCategory}>Category</h3>
	<ul className={  `flex flex-col  bg-white gap-3 ${isOpen != true ? 'h-[3px] overflow-y-hidden transition-all ' : 'transition-all h-[auto] overflow-visible'}  `}>
	    <li className='cursor-pointer'>All products</li>
	    {
		categories?.map(category => (

		    <li className='cursor-pointer' onClick={() => handleClickCategory(category.id)} key={category.id}>{category.name}</li>
		))
	    }
	</ul>
    </div>
    )
}

export default CategoryFilter
