import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import { PathNames } from "../../routes/PathNames";
import { movieList } from "../../constants/MoviesList";
import { movieDetailsSchema } from "../../Schema/Schemas";
import { z } from "zod";

type showTimingsValidation = {
  name: string;
  screenNo: number;
  shows: {
    screenNo: number;
    time: string;
    price: number;
  }[];
};
type movieDetailsValidations = z.infer<typeof movieDetailsSchema>;

const ShowTimings = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [availableTheatreDetails, setAvailableTheatreDetails] = useState<any>();
  const [movieDetails, setMovieDetails] = useState<movieDetailsValidations>();

  useEffect(() => {
    if (id) {
      getDetails();
    }
  }, [id]);

  const getDetails = () => {
    //using find to fetch the movie list from movieList
    const findMovieDetails = movieList.find((movie: any) => {
      return movie.id === id;
    });

    if (findMovieDetails !== undefined) {
      const { poster, title, languages, description, runtime, theatreDetails } =
        findMovieDetails;

      setMovieDetails({ poster, title, languages, description, runtime });
      setAvailableTheatreDetails(theatreDetails);
    }
  };

  return (
    <>
      <Sidebar title="Timings" />
      <div className="w-full">
        <div className="main_content">
          <div className="layout">
            <div className="flex flex-row justify-between items-start">
              <div className="basis-1/3">
                <div>
                  <h3 className="text-3xl">
                    {`${movieDetails?.title} - ${movieDetails?.languages} `}
                  </h3>
                  <p className="text-xs">{movieDetails?.runtime}</p>
                </div>
                <p className="pt-4 text-md">{movieDetails?.description}</p>
              </div>
              <img
                src={movieDetails?.poster}
                alt=""
                className="object-contain	object-right h-52"
              />
            </div>

            <div className="pt-2">
              <p className="mb-2 text-center underline decoration-slate-300 underline-offset-4	font-normal	text-3xl">
                Show Timings
              </p>
              {availableTheatreDetails &&
                availableTheatreDetails?.map(
                  (theatre: showTimingsValidation, index: number) => (
                    <div
                      className="flex flex-row justify-between items-center py-6 px-1 w-full border-b border-[#fff]"
                      key={index}
                    >
                      <p>{theatre.name}</p>
                      <div className="flex flex-row items-center basis-2/5">
                        {theatre?.shows.map((show: any, showIndex: number) => (
                          <div key={showIndex} className="mr-12">
                            <div className="pb-1 font-thin text-xs text-center">
                              {`Screen ${show?.screenNo}`}
                            </div>
                            <div
                              className="px-1 cursor-pointer bg-[red] hover:bg-[green] rounded-lg"
                              onClick={() =>
                                navigate(
                                  `${PathNames.SELECT_SEATS}/${id}/${theatre.name}/${show?.screenNo}`
                                )
                              }
                            >
                              {show?.time}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowTimings;
