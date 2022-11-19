import React, { useContext, useState, useEffect, useRef } from 'react'
import {
   FaPause,
   FaPlay,
   FaFastBackward,
   FaFastForward
} from 'react-icons/fa'
import { MainContext } from '../contexts/MainContext'
import '../App.css'

import MusicCard from '../components/MusicCard'
import MainMusicCard from '../components/MainMusicCard'
import image from './../assets/images/hape3.jpg'

import music1 from '../assets/music/Chante Moore & Kenny Latimore - Make It Last.mp3'
import music2 from '../assets/music/Chicago - your the inspiration.mp3'
import music3 from '../assets/music/Color Me Badd - Wildflower.mp3'
import music4 from '../assets/music/Whitney Houston - All At Once.mp3'
import music5 from '../assets/music/Dolly patons-coat of many colors.mp3'
import music6 from '../assets/music/Kodaline-All-I-Want.mp3'
import music7 from '../assets/music/Coldplay-The-Scientist.mp3'
import Controls from '../components/Control'

function Main() {
   const { handlePlayState, playState, setPlayState } = useContext(MainContext);

   const [songs] = useState([
      {
         id: 1,
         music: music1,
         name: "Chante Moore & Kenny Latimore",
         title: "Make It Last"
      },
      {
         id: 2,
         music: music2,
         name: "Chicago",
         title: "your the inspiration"
      },
      {
         id: 3,
         music: music3,
         name: "Color Me Badd",
         title: "Wildflower"
      },
      {
         id: 4,
         music: music4,
         name: "Whitney Houston",
         title: "All At Once"
      },
      {
         id: 5,
         music: music5,
         name: "Dolly patons",
         title: "coat of many colors"
      },
      {
         id: 6,
         music: music6,
         name: "Kodaline",
         title: "All-I-Want"
      },
      {
         id: 7,
         music: music7,
         name: "Coldplay",
         title: "The-Scientist"
      },
   ]);

   const [currentSongIndex, setCurrentSongIndex] = useState(0);
   const [nextSongIndex, setNextSongIndex] = useState(0);

   useEffect(() => {
      setNextSongIndex(() => {
         if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
         } else {
            return currentSongIndex + 1;
         }
      });
   }, [currentSongIndex]);

   return (
      <div className='w-full flex'>
         {/* First container */}
         <div className='flex-1 text-white p-5 overflow-hidden mf:flex hidden justify-center '>
            <div className='h-[450px] w-[80%] flex flex-col gap-3 overflow-scroll overflow-x-hidden p-2'>
               {songs.map(({ name, title, time, id, music }) => (
                  <MusicCard key={id} name={name} title={title} time={time} music={music} />
               ))}
            </div>
         </div>

         {/* Secord container */}
         <MainMusicCard
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            nextSongIndex={nextSongIndex}
            songs={songs}
         />
      </div>
   )
}

export default Main