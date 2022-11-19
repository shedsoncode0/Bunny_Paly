import React, { useContext } from 'react'
import image from '../assets/images/girl.png'
import chip from '../assets/images/chip.png'

import { MainContext } from '../contexts/MainContext'
import { shortenAddress } from '../utils/shortenAddress'

import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";

function Welcome() {
   const {
      connectWallet,
      currentAccount,
   } = useContext(MainContext);

   return (
      <div className='flex w-full flex-1 justify-center md:items-end items-start relative h-full z-20 overflow-hidden'>
         <div className="flex w-full flex-1 justify-start items-start flex-row">

            <div className='md:w-64 w-0 h-64 bg-[#1761a713] absolute -bottom-12 -right-12 rounded-full' />

            <div className='md:flex hidden flex-1 justify-end items-start flex-col w-full h-full mf:mr-10 relative'>
               <div className='w-64 h-64 bg-[#bc3a7f10] absolute bottom-14 left-12 rounded-full' />
               <div className='w-36 h-36 bg-[#1761a713] absolute top-0 right-0 rounded-full' />
               <img
                  src={image}
                  alt=""
                  className='object-contain w-[380px] relative z-20 bottom-0 left-10'
               />
            </div>

            <div className='flex flex-col flex-1 md:items-start items-center justify-start h-full w-full p-10'>
               <div className='w-full'>
                  <h1 className="text-3xl sm:text-5xl text-white md:text-left text-center py-1">
                     Feel The Vibes
                  </h1>
                  <p className="mt-5 text-white md:text-left text-center font-light md:w-9/12 w-11/12 text-2xl">
                     stream over 20 thousand songs with one click
                  </p>
               </div>
               <div className='bg-[#ffffff8c] p-3 flex justify-end items-start flex-col rounded-xl h-44 sm:w-72 my-5'>
                  <div className="flex justify-between flex-col w-full h-full">
                     <div className="flex justify-between items-start">
                        <h2 className='text-white'>BUNNYPLAY</h2>
                        <SiEthereum fontSize={17} color="#fff" />
                     </div>
                     <div>
                        <img
                           src={chip}
                           alt="Chip"
                           className='w-10'
                        />
                        <p className="text-white font-light text-sm">
                           {shortenAddress(currentAccount)}
                        </p>
                        <p className="text-white font-semibold text-lg mt-1">
                           Ethereum
                        </p>
                     </div>
                  </div>
               </div>

               <button
                  className="flex flex-row justify-center items-center my-5 bg-[#1762A7] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                  onClick={connectWallet}
               >
                  <AiFillPlayCircle size={27} className="text-white mr-2" />
                  <p className="text-white text-base font-semibold">
                     Connect Wallet
                  </p>
               </button>
            </div>
         </div>
      </div>
   )
}

export default Welcome