import React from "react";
import { useSelector } from "react-redux";
import { MovieContainer } from "./MovieContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";

const SecondaryConatiner = () =>{
    usePopularMovie();
    useTopRatedMovie();
    const movie = useSelector(store => store.movie);
    
   
    return(
         movie && (
            <div className="bg-black"> 
                <div className="-mt-64 relative z-20">
                    <MovieContainer title = {'Now Playing movie'}  movieList = {movie.nowPlayingMovies} />
                    <MovieContainer title = {'Tranding movie'}  movieList = {movie.topRatedMovie} />
                    <MovieContainer title = {'Popular movie'}  movieList = {movie.popularMovie} />
                    <MovieContainer title = {'Upcoming movie'}  movieList = {movie.nowPlayingMovies} />
                </div>
            </div>
        )
    );
}

export default SecondaryConatiner;