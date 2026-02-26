import React from "react";
import { MOVIE_IMAGE_URL } from "../utils/Constant";
import { MovieCard } from "./MovieCard";

export const MovieContainer = ({ title, movieList }) => {
  return (
    <div className="p-6">
      <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar">
        {movieList &&
          movieList.map((movie) => {
            return (
              <div>
                <MovieCard
                  key={movie.id}
                  movieName={movie.original_title}
                  imageURL={MOVIE_IMAGE_URL + movie.poster_path}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
