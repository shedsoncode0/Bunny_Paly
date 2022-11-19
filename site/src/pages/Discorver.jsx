import React from 'react'

import cover from '../assets/images/cover.png'

import chart from '../assets/icons/chart.png'
import more from '../assets/icons/more.png'
import albums from '../assets/icons/albums.png'

function Discorver() {
   return (
      <div className='flex w-full flex-1 justify-center items-center relative h-full z-20 p-10'>
         <div className="flex w-full items-center md:flex-row flex-col">

            <div className='flex justify-center items-center flex-col w-full h-full mf:mr-10'>
               <div className='flex flex-col md:gap-16'>
                  <h1 className="text-3xl sm:text-5xl text-white text-left py-1">
                     Discorver leates music
                  </h1>
                  <div className='m-0 gap-5 flex md:flex-row flex-col md:justify-start items-center md:pl-0 pl-5 pt-5 pb-5 pr-5'>

                     <div>
                        <img src={chart} alt="chart" className='object-contain w-[120px] h-[120px] rounded-lg cursor-pointer' />
                     </div>
                     <div>
                        <img src={albums} alt="albums" className='object-contain w-[120px] h-[120px] rounded-lg cursor-pointer' />
                     </div>
                     <div>
                        <img src={more} alt="more" className='object-contain w-[120px] h-[120px] rounded-lg cursor-pointer' />
                     </div>

                  </div>
                  <p className='text-xl font-medium text-white'>
                     by joining you can benifit by listening to <br />
                     the latest albums released
                  </p>
               </div>
            </div>

            <div className='m-0 flex flex-col md:justify-center justify-center w-full h-full items-cente'>
               <div className='pt-10 md:pt-0 flex justify-center'>
                  <img
                     src={cover}
                     alt=""
                     className='object-cover rounded-lg w-[400px]'
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Discorver