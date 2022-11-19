import React, { useContext, useState } from 'react'

import { Input, Button } from '../components/componetsExport'
import { MainContext } from '../contexts/MainContext'

function Join() {
   const { formData, handleChange, handleSignUp } = useContext(MainContext);

   const handleSubmit = (e) => {
      const { name, email, password } = formData;

      e.preventDefault();

      if (!name || !email || !password) return;
      console.log(name, email, password);
      handleSignUp();
      //sendTransaction();
   };

   return (
      <div className='flex w-full flex-1 justify-center items-center relative h-full'>
         <div className='flex w-full h-full items-center'>

            <div className='flex-1 md:flex hidden justify-center items-center h-full w-full'>
               <h1 className="text-3xl sm:text-5xl text-white text-left py-1">
                  join the <span className='text-[#C2B3BB]'>fun</span>
               </h1>
            </div>

            <div className='flex-1 flex h-full w-full justify-center p-2 items-center'>
               <div className='sl:p-10 p-0 sl:bg-[#202027] bg-transparent rounded-[15px]'>
                  <form className='flex flex-col sl:w-80 w-[200px] gap-5 justify-center' action="">
                     <div className='flex flex-col gap-1'>
                        <label htmlFor="name" className='font-medium text-white'>Name:</label>
                        <Input
                           type="text"
                           name="name"
                           placeholder="Full name"
                           handleChange={handleChange}
                           autoFocus={true}
                           style="rounded-[10px] text-white text-lg font-medium border-[#1762A7] border-[1px] bg-transparent"
                        />
                     </div>
                     <div className='flex flex-col gap-1'>
                        <label htmlFor="email" className='font-medium text-white'>Email:</label>
                        <Input
                           type="email"
                           name="email"
                           placeholder="Email"
                           handleChange={handleChange}
                           style="rounded-[10px] text-white text-lg font-medium border-[#1762A7] border-[1px] bg-transparent"
                        />
                     </div>
                     <div className='flex flex-col gap-1'>
                        <label htmlFor="password" className='font-medium text-white '>Password:</label>
                        <Input
                           type="password"
                           name="password"
                           placeholder="Password"
                           handleChange={handleChange}
                           style="rounded-[10px] text-white text-lg font-medium border-[#1762A7] border-[1px] bg-transparent"
                        />
                     </div>
                     <Button
                        title='join us'
                        type='submit'
                        onClick={handleSubmit}
                        style="h-12 bg-[#1762A7] w-full rounded-[10px] text-lg mt-14 text-white cursor-pointer hover:bg-[#2546bd]"
                     />
                  </form>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Join