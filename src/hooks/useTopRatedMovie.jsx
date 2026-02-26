import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDP_MOVIE_OPTION } from "../utils/Constant";
import {  addTopRatedMovie } from "../reduxStore/movieSlice";

const useTopRatedMovie = () =>{
    const dispatch = useDispatch();
    const getTopRatedMovie = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', TMDP_MOVIE_OPTION);
        const json = await data.json();
        dispatch(addTopRatedMovie(json.results));  
    }

    useEffect(()=>{
        getTopRatedMovie();
    },[])
    
}

export default useTopRatedMovie;