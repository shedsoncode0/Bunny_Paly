import React from 'react'
import {
   FaPause,
   FaPlay,
   FaFastBackward,
   FaFastForward
} from 'react-icons/fa'
import '../App.css'

function Controls(props) {
   const handelPlayState = () => {
      if (props.isPlaying) {
         props.setIsPlaying(false);
      } else {
         props.setIsPlaying(true);
      }
   }




   return (
      <div className='flex justify-center flex-col'>
         <div className='flex justify-center items-center gap-5'>
            <button onClick={() => props.SkipSong(false)}>
               <FaFastBackward fontSize="25px" color='#fff' />
            </button>
            <button onClick={handelPlayState} className='bg-white flex justify-center items-center p-5 rounded-full'>
               {(
                  props.isPlaying ? <FaPause fontSize='30px' />
                     : <FaPlay fontSize='30px' />
               )}
            </button>
            <button onClick={() => props.SkipSong()}>
               <FaFastForward fontSize="25px" color='#fff' />
            </button>
         </div>
         <div className='w-full flex justify-center flex-col items-center h-14'>
            <div className='w-[90%] pb-2 flex justify-between items-center text-white'>
               <h3>{props.currentTime}</h3>
               <h3>{props.duration}</h3>
            </div>
            <div className='h-[6px] w-[90%] bg-white rounded-full relative'>
               <div className='w-20 bg-[#525252] h-full rounded-full flex items-center justify-end relative'>
                  <div className='w-4 h-4 bg-[#525252] rounded-full relative -right-2 cursor-pointer' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Controls