"use client";

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import {signIn,signOut,useSession,getProviders} from 'next-auth/react';
const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image alt="Promtopia Logo" width={35} height={35} src="/assets/images/logo.svg" className='object-contain'/>

        <p className='logo_text'>Promptopia</p>
      </Link>
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-prompt" className='black_btn'>Create Post</Link>
            <button type="button" className='outline_btn' onClick={signOut}> Sign Out</button>
            <Link href="/profile">
              <Image src="/assets/images/logo.svg" height={37} width={37} className='rounded-full' alt="profile"/>
            </Link>
          </div>
        ): (<></>)}
      </div>
    </nav>
  )
}

export default Nav