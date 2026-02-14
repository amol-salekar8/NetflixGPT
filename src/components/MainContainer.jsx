import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movies) return;

    const movie = movies[0];
    const {id, original_title, overview} = movie;
  return (
    <>
        <VideoTitle title ={original_title} discription = {overview}/>
        <VideoBackground movie_id = {id}/>
    </>
  )
}

export default MainContainer
