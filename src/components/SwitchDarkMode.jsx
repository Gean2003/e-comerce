import React from 'react'
import { motion } from "framer-motion";

const SwitchDarkMode = ({toggleSwitch, isOn}) => {


const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

    return (


	<div onClick={toggleSwitch} className={ `mx-3 my-5 w-[80px] h-[30px]  lg:w-[100px] lg:h-[30px] rgba flex justify-start rounded-[50px]  items-center py-[10px] px-[10px] ${isOn != true ? 'justify-start' : 'justify-end'}` }>

	    <motion.div className="w-[20px] h-[20px] bg-white rounded-[10px] flex items-center justify-center cursor-pointer" layout transition={spring} >{isOn != true ? <i className='bx bxs-sun'></i> : <i className='text-black bx bxs-moon' ></i>}</motion.div>
	   
	</div>

    )
}
export default SwitchDarkMode
