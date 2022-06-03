import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import {GoThreeBars} from 'react-icons/go'
import {FaTimes} from 'react-icons/fa'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => setNav(!nav)

  return (
    <div className='fixed top-0 left-0 right-0 w-full h-[80px] bg-[#1c2431] flex justify-between px-8 items-center text-white'>
        <div>
            <img src={Logo} alt="logo" className='w-20'/>
        </div>

        {/* navlinks */}
        <div className='hidden md:flex font-bold'>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </div>

        {/* mobile-links */}
        <div className={!nav ? 'hidden' : 'absolute top-0 left-0 right-0 h-screen w-full flex flex-col items-center justify-center font-bold bg-[#1c2431] duration-300'}>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
        </div>

        {/* nav toggler */}
        <div onClick={handleNav} className='md:hidden z-20'>            
            {!nav ? <GoThreeBars /> : <FaTimes />}
        </div>
    </div>
  )
}

export default Navbar