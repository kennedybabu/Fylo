import React from 'react'
import LandingIllustration from '../assets/illustration-intro.png'

const Home = () => {
  return (
    <div className='bg-[#1c2431] h-auto flex flex-col px-8 items-center justify-center text-white'>
        {/* container */}
        <div className='mt-20'>
            <img src={LandingIllustration} alt="landing picture" />
        </div>
        <div className='text-center'>
            <h2 className='text-4xl font-bold my-5 max-w-[600px] mx-auto'>All your files in one secure location, accessible anywhere.</h2>
            <p className='text-xl max-w-[500px] mx-auto py-4'>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        </div>
        <button className='py-2 px-14 rounded-3xl my-2 bg-gradient-to-r from-cyan-500 to-blue-500'>Get Started</button>

    </div>
  )
}

export default Home