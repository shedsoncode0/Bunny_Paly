import React, { useContext, useRef } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa';

import { MainContext } from '../contexts/MainContext';
import { data } from '../utils/dummyData'
import music1 from '../assets/music/Chante Moore & Kenny Latimore - Make It Last.mp3'
import { useState } from 'react';

function MusicCard({ name, title, time, music }) {
   const { handlePlayState, playState } = useContext(MainContext);
   const [duration, setDuration] = useState("00:00");
   const audio1 = useRef();

   const Duration = function () {
      const audio = new Audio(audio1.current);
      audio.onloadeddata = (e) => {
         if (audio.readyState > 0) {
            let minutes = "0" + parseInt(audio.duration / 60, 10);
            let seconds = "0" + parseInt(audio.duration % 60);
            setDuration(minutes + ":" + seconds.slice(-2));
         }
      }
   };

   return (
      <div className='bg-[#202027] w-full  rounded-[5px] flex items-center box-border p-[10px]'>
         <div className='flex-1'>
            <h4 className='font-semibold'>{name}</h4>
            <h3 className='text-[13px] font-extralight'>{title}</h3>
         </div>
         <span className='font-light text-sm'>{time}</span>
      </div>
   )
}

export default MusicCard