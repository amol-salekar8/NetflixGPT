import React from "react";
import { useSelector } from "react-redux";
import { MovieContainer } from "./MovieContainer";

const SecondaryConatiner = () =>{
    const movie = useSelector(store => store.movie);
   
    return movie && (
        <> 
            <MovieContainer title = {'Now Playing movie'}  movieList = {movie.nowPlayingMovies} />
            <MovieContainer title = {'Tranding movie'}  movieList = {movie.nowPlayingMovies} />
            <MovieContainer title = {'Popular movie'}  movieList = {movie.nowPlayingMovies} />
            <MovieContainer title = {'Upcoming movie'}  movieList = {movie.nowPlayingMovies} />
        </>
    );
}

export default SecondaryConatiner;