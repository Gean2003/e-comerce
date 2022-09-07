import {motion} from 'framer-motion'
import React from 'react'
import '../../index.css'

const Carrusel = ({productInfo, toggleMenu}) => {
    return (
	<motion.div className={` flex overflow-x-hidden gap-2 w-[1000px] lg:w-[2000px] cursor-grab h-[300px]  lg:h-[400px] ${toggleMenu != true ? '' : 'hidden' } `} drag='x' dragConstraints={{right: 0, left: -1388}} >
	    
	    {
		productInfo?.productImgs.map(image => (
		    <motion.div key={image} className={`flex items-center justify-center w-full px-1 mx-auto ` } > <img className= 'h-full pointer-events-none object-contain w-[300px] lg:w-[500px] z-0' src={image} alt="" /></motion.div>
		))
	    }
	    
	</motion.div>
    )
}

export default Carrusel
