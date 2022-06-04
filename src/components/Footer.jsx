import React from 'react'
import Logo from '../assets/logo.svg'
import {HiLocationMarker} from 'react-icons/hi'
import {MdPhoneInTalk} from 'react-icons/md'
import {IoIosMail} from 'react-icons/io'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-full bg-[#0b1523] text-white'>
        {/* container */}
        <div className='relative w-full flex pt-10 flex-col px-8 md:pt-[200px] md:pb-8'>
            <div className='w-full'>
                <img className='w-[150px]' src={Logo} alt="logo" />
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 mt-8 gap-4' >
                <div className='flex justify-between'>
                    <HiLocationMarker className='w-[90px] mt-1'/>
                    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi laborum vel eius? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, facilis!</p>
                </div>

                <div className='pl-2'>
                    <div className='flex items-center'>
                        <MdPhoneInTalk className='mr-2 my-4' />
                        <p>1-543-123-4567</p>
                    </div>
                    <div className='flex items-center'>
                        <IoIosMail className='mr-2'/>
                        example@fylo.com
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>About Us</li>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Jobs</li>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Press</li>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Blog</li>
                    </div>
                    <div>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Contact Us</li>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Terms</li>
                        <li className='mb-1 hover:text-cyan-300 duration-200'>Privacy</li>
                    </div>
                </div>

                <div className='flex gap-6 pl-4'>
                    <div className=''>
                        <FaFacebookF className='hover:scale-110 hover:text-cyan-300 hover:border-cyan-300 text-2xl cursor-pointer duration-200 border-2 rounded-full' />
                    </div>
                    <div>
                        <BsTwitter className='hover:scale-110 hover:text-cyan-300 hover:border-cyan-300 text-2xl cursor-pointer duration-200 border-2 rounded-full'/>
                    </div>
                    <div>
                        <FaLinkedinIn className='hover:scale-110 hover:text-cyan-300 hover:border-cyan-300 text-2xl cursor-pointer duration-200 border-2 rounded-full'/>
                    </div>
                </div>
            </div>
            <div className='absolute top-[-50px] pb-2 rounded-md max-w-[1000px] lg:w-[900px] md:h-[230px] flex flex-col items-center mx-auto bg-[#1c2531] shadow-md'>
                <div className='w-full text-center mt-4 p-4'>
                    <p className='text-3xl font-bold'>Get early access today</p>
                    <p className='max-w-[700px] mx-auto mt-2'>It only takes a minute to sign up and our free starter tier is extremely generous.If you have any questions
                        our support team would be happy to help you.
                    </p>
                </div>
                <div>
                    <input type="text" placeholder='email@example.com' className='rounded-[30px] py-2 pr-28 pl-4 mt-4'/>
                    <button className='py-2 px-8 rounded-3xl m-4 bg-gradient-to-r from-cyan-500 to-blue-500'><span className='font-bold'>Get Started For Free</span></button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer