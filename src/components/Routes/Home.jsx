import React, { useState} from 'react'
import { useSelector} from 'react-redux'
import CardHome from '../home/CardHome'
import Wave from '../shared/Wave'

const Home = ({isOn}) => {

    const [search, setSearch] = useState('')



    const products = useSelector(state => state.products)


     const submit = e => {
	e.preventDefault()
	// setSearch(e.target.name.value)
    
	// console.log(search)

	// if (search === '' ) {
		// return products
	// } else {
		
	// return products.filter( product => product.title.toLowerCase().includes(search.toLowerCase())  )
	    // // return console.log(products.filter( product => product.title.toLowerCase().includes(search.toLowerCase())  ))
	// }
	// // return products =  products.filter( product => product.title.toLowerCase().includes(search.toLowerCase())  )
	
}


    const searcher = e => {
	console.log(e.target.value)
	setSearch(e.target.value)

    }



let result = []

if (search == '') {
    	
    result = products

} else {
    result = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
}



    return (
    <div>
	<div className='flex flex-col justify-center my-4 text-center lg:flex-row'>
	    <form onSubmit={submit}  >
		<input value={search}  onChange={searcher} id = 'name' type='text' placeholder='Buscar producto' className= { ` w-[95%] mx-auto  lg:mx-0 lg:w-[500px] my-3 lg:my-0 py-2 px-1 rounded-[3px] ${isOn === true ? 'bg-[#3A3B3C]' : 'bg-white border'} ` } />
		<button className='text-white bg-red-500 w-[90%] lg:w-auto py-2 mx-auto lg:mx-0 lg:py-2 lg:px-1'>Buscar</button>
	    </form>
	    
	</div>
	
	<div className= { `mx-auto  lg:items-center lg:flex-wrap lg:gap-7 lg:flex lg:justify-center max-w-[1920px] text-black lg:py-4 ` }>
	    {
		result?.map(product => (
		    <CardHome key={product.id}
			      product={product}
			      isOn={isOn}/>
		))
	    }
	</div>

	<Wave />
    </div>

    )
}

export default Home
