import React from 'react'
import Stay from '../assets/illustration-stay-productive.png'

const Productive = () => {
  return (
    <div className='w-full h-screen bg-[#1c2431]'>
        {/* container */}
        
        <div className='grid md:grid-cols-2 px-8'>
            <div>
                <img src={Stay} alt="colleagues icon" />
            </div>
            <div className='flex flex-col text-white justify-center'>
                <h2 className='text-3xl font-bold py-2 '>Stay productive, wherever you are.</h2>
                <p className='font-bold py-2 max-w-[530px]'>Never let location be an issue when accessing your files. Fylo has you covered for all your file storage needs.</p>
                <p className='font-bold py-2 max-w-[530px]'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
        </div>

    </div>
  )
}

export default Productive