import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { TMDP_MOVIE_OPTION } from '../utils/Constant';
import { addTrailerId } from '../reduxStore/movieSlice';

 const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();

  const featchTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      TMDP_MOVIE_OPTION
    );
    const json = await data.json();
    console.log(json);
    const filterData = json?.results.filter((result) => result.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerId(trailer));
  };

  useEffect(() => {
    featchTrailer();
  }, []);
}


export default useMovieTrailer;