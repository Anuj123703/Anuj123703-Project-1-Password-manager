import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='bg-slate-800 text-white mt-10 w-full' >
                <div className='mx-w-6x1 mx-auto px-4 py-4 text-center text-sm sm:text-base ' >
                    <div>
                        &copy; 2024
                        <span className='mx-1 font-bold' >
                            <span className='text-green-500 ' >&lt;</span>
                            <span className='text-white '>Pass</span>
                            <span className='text-green-500 ' >OP/&gt;</span>
                        </span>
                        . All rights reserved.
                    </div>
                    <div
                        className='flex items-center justify-center gap-1 mt-1 ' >
                        created with
                        <img
                            className='w-3 h-3'
                            src="icons/love.png"
                            alt="love"
                        />
                        by Anuj Kumar
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer
