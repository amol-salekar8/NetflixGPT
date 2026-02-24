import React from 'react'
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({title, discription}) => {

  return (
    <div className = 'pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
        <h3 className= 'text-6xl font-bold'>{title}</h3>
        <p className='py-6 text-lg w-1/4'>{discription}</p>
        <div className='flex'>
            <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80 flex justify-between' ><FaPlay className='mr-2'/> Play</button>
            <button className='mx-2 bg-gray-500 p-4 px-12 text-xl bg-opacity-50 rounded-lg' >ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle