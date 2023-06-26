import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <header className='w-full '>
      <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
    </header>
  )
}

export default Nav