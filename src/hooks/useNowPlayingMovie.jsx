import { useDispatch } from "react-redux";
import { TMDP_MOVIE_OPTION } from "../utils/Constant";
import { addNowPlayingMovies } from "../reduxStore/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDP_MOVIE_OPTION);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));  
  }

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;