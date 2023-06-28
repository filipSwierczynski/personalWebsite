import React from 'react'
import Link from 'next/link';
// import Image from 'next/image';

const Nav = () => {
  return (
    <header className='bg-gray-800 '>
       <nav>
      <ul className="flex space-x-4 p-4">
        <li>
          <Link className='text-white hover:text-gray-300' href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className='text-white hover:text-gray-300' href="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className='text-white hover:text-gray-300' href="/register">
           Register
          </Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Nav