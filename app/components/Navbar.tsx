import React from 'react';
import Link from 'next/link';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  return (
    <>
    <ToastContainer />
      <header className='bg-zinc-900'>
        <nav className='w-full py-4 md:w-[80%] mx-auto flex items-center gap-x-5 justify-between'>
          <Link href={"/"}><img src="/logo.gif" alt="Logo" width={150} height={80} /></Link> 
          <ul className='flex items-center text-white gap-x-8 text-xl font-bold'>
            <li ><Link href={"/"}>Home</Link></li>
            <li ><Link href={"/login"}>Login</Link></li>
            <li ><Link href={"/register"}>Register</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
