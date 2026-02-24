import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailerId = useSelector((store) => store.movie?.trailerId);
  const URL = "https://www.youtube.com/embed/"+trailerId?.key+"?&autoplay=1&mute=1";
  return  ( 
    <>
      { trailerId && 
         (
          <div>
              <iframe
              className="w-screen aspect-video"
              src={URL}
              title="Embedded youtube"
            />
            </div>
         )
      }    
    </>
  );
};

export default VideoBackground;
