import React, { useState } from "react";
import { PathNames } from "../../routes/PathNames";
import { useNavigate } from "react-router-dom";
//import {Z} from
interface movieCardProps {
  image: string;
  title: string;
  genres: string[];
  description: string;
  liked: string;
  seats: any;
}

const MovieCard = (props: movieCardProps) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col bg-[#000] rounded-xl">
        <div className={"group relative"}>
          <img
            src={props?.image}
            alt=""
            className="group-hover:opacity-20 object-cover overflow-hidden"
          />
          <div>
            <button
              className=" text-[#fff] opacity-0 group-hover:opacity-100 hover:border-b hover:border-[#8B1F28] absolute inset-14 top-72"
              //style={{ height: "20px" }}
              onClick={() =>
                navigate(PathNames.SELECT_SEATS, { state: props?.seats })
              }
            >
              Book Now
            </button>
          </div>
        </div>

        <div className="text-[#8690A0] p-2 hover:border border-red-600">
          <p
            className="text-[#0D203E]"
            style={{ fontWeight: 900, fontSize: "27px" }}
          >
            <span>{props?.title}</span>
            <span className="float-right text-[#8B1F28]">{props?.liked}</span>
          </p>
          <p
            className="text-[#8690A0]"
            style={{ fontWeight: 400, fontSize: "12px" }}
          >
            {props?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
