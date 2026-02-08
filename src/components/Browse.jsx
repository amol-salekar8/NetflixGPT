import React, { useEffect } from 'react'
import Header from './Header'
import { TMDP_MOVIE_OPTION } from '../utils/Constant';

const Browse = () => {
  const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDP_MOVIE_OPTION);
      const json = await data.json();
      
      console.log(json);
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse