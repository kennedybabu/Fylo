import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {GoThreeBars} from 'react-icons/go'
import {FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='px-4 z-[1000] fixed top-0 left-0 right-0 w-full h-[80px] bg-[#1c2431] flex justify-between md:px-16 items-center text-white'>
        <div>
            <img src={Logo} alt="logo" className='w-20 cursor-pointer'/>
        </div>

        {/* navlinks */}
        <div className='hidden md:flex font-bold'>
            <li className='hover:text-cyan-300 duration-300'>Features</li>
            <li className='hover:text-cyan-300 duration-300'>Team</li>
            <li className='hover:text-cyan-300 duration-300'>Sign In</li>
        </div>

        {/* mobile-links */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 right-0 h-screen w-full flex flex-col items-center justify-center font-bold bg-[#1c2431] duration-300'}>
            <li className='hover:text-cyan-300 duration-300 m-3'>Features</li>
            <li className='hover:text-cyan-300 duration-300 m-3'>Team</li>
            <li className='hover:text-cyan-300 duration-300 m-3'>Sign In</li>
        </div>

        {/* nav toggler */}
        <div onClick={handleNav} className='md:hidden z-20'>            
            {!nav ? <GoThreeBars /> : <FaTimes />}
        </div>
    </div>
  )
}

export default Navbar