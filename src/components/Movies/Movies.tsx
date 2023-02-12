import React, { FC, useState } from "react";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import { movieList } from "../../constants/MoviesList";
import MovieCard from "../../atoms/MovieCard/MovieCard";
import { z } from "zod";
import { movieCardSchema } from "../../Schema/Schemas";

type movieCardProps = z.infer<typeof movieCardSchema>;

const Movies: FC = () => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Sidebar title="Movies" />
      <div className="w-full">
        <div className="header h-[200px]">
          <div className="float-right">
            <input
              className="bg-[#000] border-b border-white outline-none"
              placeholder="Search Movies"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="main_content ">
          <div className=" grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-11">
            {movieList
              .filter((i: movieCardProps) =>
                search === ""
                  ? i
                  : i.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((movie: movieCardProps) => (
                <MovieCard
                  id={movie.id}
                  poster={movie.poster}
                  title={movie.title}
                  genres={movie.genres}
                  liked={movie.liked}
                  certificate={movie.certificate}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
