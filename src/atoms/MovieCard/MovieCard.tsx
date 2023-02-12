import { PathNames } from "../../routes/PathNames";
import { useNavigate } from "react-router-dom";
import { AiTwotoneHeart } from "react-icons/ai";
import { z } from "zod";
import { movieCardSchema } from "../../Schema/Schemas";

const MovieCard = (props: z.infer<typeof movieCardSchema>) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" rounded-xl overflow-hidden flex flex-col bg-[#000] flex-wrap transition ease-in-out duration-300">
        <div className={"group relative"}>
          <img
            src={props?.poster}
            alt=""
            className="group-hover:opacity-20 object-cover overflow-hidden"
          />
          <div>
            <button
              className="text-[#fff] opacity-0 group-hover:opacity-100  absolute inset-12"
              onClick={() => navigate(`${PathNames.SHOW_TIMINGS}/${props.id}`)}
            >
              Book Now
            </button>
          </div>
          <div className="p-1 group-hover:opacity-10 absolute bottom-1 right-1 z-20 rounded-md flex items-center bg-[#000] text-[#8c001a]">
            <AiTwotoneHeart style={{ color: "red" }} />
            <span>{props?.liked}%</span>
          </div>
        </div>
        <div className="px-2 py-1 text-[#30000C] bg-[#9B787D] rounded-bl-xl rounded-br-xl">
          <p className=" text-md font-bold">
            {props?.title}
            <span className="float-right">{props.certificate}</span>
          </p>
          <p className="text-xs font-[thin]">
            {props?.genres.toString().split(",").join("/")}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
