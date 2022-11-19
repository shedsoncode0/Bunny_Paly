import React, { useState, useRef, useEffect } from 'react'
import Controls from '../components/Control';

import '../App.css'

function Player(props) {
   const audioEl = useRef();
   const [duration, setDuration] = useState("00:00");
   const [currentTime, setCurrentTime] = useState("00:00");
   const [isPlaying, setIsPlaying] = useState(false);

   const musicDuration = function () {
      let minutes = "0" + parseInt(audioEl.current.duration / 60, 10);
      let seconds = "0" + parseInt(audioEl.current.duration % 60);
      let result = minutes + ":" + seconds.slice(-2);
      setDuration(result)
   };



   useEffect(() => {
      if (isPlaying) {
         audioEl.current.play();
         setInterval(() => {
            musicDuration();
            let minutes = "0" + parseInt(audioEl.current.currentTime / 60, 10);
            let seconds = "0" + parseInt(audioEl.current.currentTime % 60);
            let result = minutes + ":" + seconds.slice(-2);
            setCurrentTime(result)
         }, 20);
      } else {
         audioEl.current.pause();
      }
   });

   const SkipSong = (forwards = true) => {
      if (forwards) {
         props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp++;

            if (temp > props.songs.length - 1) {
               temp = 1;
            }

            return temp;
         });
      } else {
         props.setCurrentSongIndex(() => {
            let temp = props.currentSongIndex;
            temp--;

            if (temp < 0) {
               temp = props.songs.length - 1;
            }

            return temp;
         });
      }
   }

   return (
      <div className='flex-1 box-border flex justify-center items-center mf:pr-16'>
         <div className='bg-[#202027] player flex flex-col p-5 box-border rounded-[15px] w-[500px]'>
            <div className='flex-1 items-center flex flex-col'>
               <audio src={props.songs[props.currentSongIndex].music} ref={audioEl}></audio>
               <div className='flex items-center flex-col mt-5 mb-10 text-white'>
                  <div className='w-[200px] h-[200px] rounded-full bg-blue-400 overflow-hidden'>
                     {/* <img src={image} alt="" className='object-contain resize' /> */}
                  </div>
                  <h1 className='m-2 text-white text-2xl'>{props.songs[props.currentSongIndex].name}</h1>
                  <p>{props.songs[props.currentSongIndex].title}</p>
               </div>
            </div>

            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} duration={duration} currentTime={currentTime} />

         </div>
      </div>
   )
}

export default Player;
