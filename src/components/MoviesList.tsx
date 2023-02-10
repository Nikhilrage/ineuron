import React from "react";
import { moviesList } from "../constants/MoviesList";
import MovieCard from "./Movies/MovieCard";

const Movies = () => {
  return (
    <div
      className="m-4 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 gap-10 bg-[#000]"
      style={{ height: "100vh", margin: "0px", padding: "10px" }}
    >
      {moviesList.map((movie: any, index: number) => (
        <MovieCard
          image={movie.image}
          title={movie.name}
          genres={movie.genres}
          description={movie.description}
          liked={movie.liked}
          seats={movie.seats}
        />
      ))}
    </div>
  );
};

export default Movies;
