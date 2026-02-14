import React from 'react'

const VideoTitle = ({title, discription}) => {

  return (
    <div className = 'pt-36 px-12'>
        <h3 className= 'text-6xl font-bold'>{title}</h3>
        <p className='py-6 text-lg w-1/4'>{discription}</p>
        <div className=' '>
            <button className='bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg' >▶️ Play</button>
            <button className='mx-2 bg-gray-500 text-black p-4 px-12 text-xl bg-opacity-50 rounded-lg' >ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle