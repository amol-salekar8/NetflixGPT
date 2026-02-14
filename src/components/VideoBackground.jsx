import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movie_id }) => {
  useMovieTrailer(movie_id);
  const trailerId = useSelector((store) => store.movie?.trailerId);
  const URL = "https://www.youtube.com/embed/"+trailerId?.key;
  return  ( 
    <>
      { trailerId && 
         (
          <div>
              <iframe
              width="853"
              height="480"
              src={URL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            </div>
         )
      }    
    </>
  );
};

export default VideoBackground;
