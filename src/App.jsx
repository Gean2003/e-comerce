import { Route, Routes} from 'react-router-dom'
import Home from './components/Routes/Home'
import ProductDetail from './components/Routes/ProductDetail'
import Login from './components/Routes/Login'
import Purchases from './components/Routes/Purchases'
import Header from './components/shared/Header'
import SwitchDarkMode from './components/SwitchDarkMode'
import {useEffect, useState} from 'react'
import ProtectedRoutes from './components/Routes/ProtectedRoutes'
import Cart from './components/shared/Cart'
import {useDispatch} from 'react-redux'
import {getAllProducts} from './store/slices/products.slice'

function App() {

    const [isOn, setIsOn] = useState(false)

	const toggleSwitch = () => setIsOn(!isOn)

    // useEffect(() => {
	// const url = 'https://ecommerce-api-react.herokuapp.com/api/v1/users'
	
	// const obj = {
	    // firstName: 'Gean',
	    // lastName: 'Franco',
	    // email: 'gean4@gmail.com',
	    // password: 'gean1234567',
	    // phone: '9954782174',
	    // role: 'admin'
	// }

	 // axios.post(url, obj)
	    // .then(res => console.log(res.data))
	    // .catch(err => console.log(err))
    // }, [])

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
	setToggleMenu(!toggleMenu)


    }
    
	if (isOn === false) {

	    document.documentElement.classList.remove('dark')
	    document.documentElement.classList.add('day')
	}else{
	    document.documentElement.classList.add('dark')
	    document.documentElement.classList.remove('day')

	}


    const dispatch = useDispatch()

    useEffect(() => {
	dispatch(getAllProducts())
    }, [])
  return (
      <div className={` App  ${isOn != true ? ' ' : ' text-white'}`}>
	  <Header  toggleMenu={toggleMenu}
		    handleToggleMenu={handleToggleMenu}
		    isOn={isOn}/>

	  <SwitchDarkMode toggleSwitch={toggleSwitch}
			  isOn={isOn}/>

    <Routes>
	  <Route path='/' element={ <Home isOn={isOn}/> } />
	  <Route path='/login' element={ <Login isOn={isOn} /> } />

	<Route element={ <ProtectedRoutes /> }>
		 <Route path='/purchases' element = { <Purchases isOn={isOn} /> }/>
		 <Route path='/product/:id' element={ <ProductDetail  isOn={isOn}
								toggleMenu={toggleMenu}/> } />
	    <Route path='/cart' element={ <Cart toggleMenu={toggleMenu} /> } />
	</Route>
	 


    </Routes>
	
      </div>
      
  )
}

export default App
