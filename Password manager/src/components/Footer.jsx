import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='bg-slate-800 text-white text-center mt-10 fixed bottom-0 w-full ' >
                <div>
                    &copy; 2024
                    <span className='mx-1' >
                        <span className='text-green-500 font-bold' >&lt;</span>
                        <span className='text-white font-bold'>Pass</span>
                        <span className='text-green-500 font-bold' >OP/&gt;</span>
                    </span>
                    .All rights reserved.
                </div>
                <div
                    className='flex justify-center' >
                    created with
                    <img
                        className='w-3 h-3 mx-1'
                        src="icons/love.png"
                        alt="love"
                    />
                    by Anuj Kumar
                </div>
            </div>
        </>

    )
}

export default Footer
