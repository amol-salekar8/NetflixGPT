import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDP_MOVIE_OPTION } from "../utils/Constant";
import { addPopularMovie } from "../reduxStore/movieSlice";

const usePopularMovie = () =>{
    const dispatch = useDispatch();
    const getPopularMovie = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', TMDP_MOVIE_OPTION);
        const json = await data.json();
        dispatch(addPopularMovie(json.results));  
    }

    useEffect(()=>{
        getPopularMovie();
    },[])
    
}

export default usePopularMovie;