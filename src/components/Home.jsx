import React from 'react'
import LandingIllustration from '../assets/illustration-intro.png'

const Home = () => {
  return (
    <div className='bg-[#1c2431] h-screen flex flex-col px-8 items-center justify-center text-white'>
        {/* container */}
        <div>
            <img src={LandingIllustration} alt="landing picture" />
        </div>
        <div className='text-center'>
            <h2 className='text-3xl font-bold my-4 max-w-[600px] mx-auto'>All your files in one secure location, accessible anywhere.</h2>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
        </div>

    </div>
  )
}

export default Home