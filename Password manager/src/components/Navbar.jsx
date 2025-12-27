import React from 'react'
import { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className='bg-slate-800 py-3 px-6' >
      <div className='flex justify-between items-center' >
        <div className='text-lf font-bold'>
          <span className='text-green-500 ' >&lt;</span>
          <span className='text-white'>Pass</span>
          <span className='text-green-500' >OP/&gt;</span>
        </div>
      <ul className='hidden md:flex items-center gap-6 text-white' >
        <li><a className='hover:font-bold' href="/">Home</a></li>
        <li><a className='hover:font-bold' href="/about">About</a></li>
        <li><a className='hover:font-bold' href="/contact">Contact</a></li>
        <li>
          <img
            className='w-[28px] hover:scale-110 transition cursor-pointer'
            src="icons/github.svg" alt="github"
          />
        </li>
      </ul>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl"
      >
        ☰
      </button>
    </div>
      {/* Mobile Menu */ }
  {
    open && (
      <ul className="md:hidden mt-4 flex flex-col gap-4 text-white">
        <li><a href="/">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li>
          <img
            className="w-[26px]"
            src="icons/github.svg"
            alt="github"
          />
        </li>
      </ul>
    )
  }
    </nav >
  );
};

export default Navbar
