import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 flex p-3 justify-between items-center sticky top-0 z-50' >
      <div className='px-7' >
        <span className='text-green-500 font-bold' >&lt;</span>
        <span className='text-white font-bold'>Pass</span>
        <span className='text-green-500 font-bold' >OP/&gt;</span>
      </div>
      <div>
        <ul>
          <li className='flex gap-4 text-white px-7'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
           <div className='px-4 mx-3' >
              <img
                className='w-[27px] hover:scale-110 transition-all duration-200 cursor-pointer'
                src="icons/github.svg" alt="github.com" />
           </div>
          </li>
        </ul>
        
      </div>
  
    </nav>
  )
}

export default Navbar
