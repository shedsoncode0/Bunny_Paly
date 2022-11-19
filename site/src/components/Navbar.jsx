import React, { useState, useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import { HiMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/images/logo.png'

import { MainContext } from '../contexts/MainContext'

const NavBarItem = ({ title, classProps }) => {
   return (
      <li className={`mx-4 cursor-pointer ${classProps}`}>
         {title}
      </li>
   );
}

function Navbar() {
   const { signUp } = useContext(MainContext);
   const [toggleMeun, setToggleMenu] = useState(false);

   return (
      <nav className='w-full flex md:justify-center justify-between items-center p-4'>
         <div className='md:flex-[0.8] flex-initial justify-center items-center'>
            <Link to={"/"}>
               <img
                  src={logo}
                  alt="Logo"
                  className='w-48 cursor-pointer'
               />
            </Link>
         </div>
         <ul className='text-white md:flex hidden list-none justify-between items-center flex-initial'>
            {/* {["Discorver", "join"].map((item, index) => (
               <NavBarItem key={item + index} title={item} />
            ))} */}
            <Link className='mx-4' to="./discover">Discover</Link>
            {signUp ?
               <Link className='mx-4' to="./main">Music</Link>
               :
               <Link className='mx-4' to="./join">Join</Link>
            }
            <Outlet />
            <div className="w-3/5 h-10 bg-white text-white rounded-full overflow-hidden flex items-center">
               <div className="w-14 h-full bg-[#1762A7] flex justify-center items-center">
                  <h2 className="text-sm">gained</h2>
               </div>
               <h3 className="text-black box-border p-2">0.00003 <small className="text-[#B0B0B0]">Eth</small></h3>
            </div>
         </ul>
         <div className=' flex relative'>
            {toggleMeun
               ? <AiOutlineClose fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(false)} />
               : <HiMenuAlt4 fontSize={28} className='text-white md:hidden cursor-pointer' onClick={() => setToggleMenu(true)} />
            }
            {toggleMeun && (
               <ul className='z-30 fixed top-2 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                flex flex-col justify-start items-end rounded-md text-white bg-[#1761a7] animate-slide-in'
               >
                  <li className='text-xl w-full my-2'>
                     <AiOutlineClose onClick={() => setToggleMenu(false)} />
                  </li>
                  {/* {["Discorver", "join"].map((item, index) => (
                     <NavBarItem key={item + index} title={item} classProps='my-2 text-lg' />
                  ))} */}
                  <Link className='mx-4 my-2 text-lg' to="./discover">Discover</Link>
                  <Link className='mx-4 my-2 text-lg' to="./join">Join</Link>
                  <Outlet />
                  <h1 className="text-white">djiwdohdcijkoloiscujkdddj</h1>
               </ul>
            )}
         </div>
      </nav>
   )
}

export default Navbar