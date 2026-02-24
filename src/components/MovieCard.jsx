import React from 'react'

export const MovieCard = ({key, movieName,imageURL}) => {
  return (
        <div id={key} className='w-48 pr-4' >
            <img src={imageURL}  alt={movieName}/>
        </div>
  )
}
