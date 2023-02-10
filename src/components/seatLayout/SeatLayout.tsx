import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";
import { PathNames } from "../../routes/PathNames";

const ChooseSeat = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedSeat, setSelectedSeat] = useState<any>([]);
  useEffect(() => {
    if (location.state) {
      console.log(location.state);
    }
  }, [location]);
  const theatersDetails: any = {
    name: "Inox-Hyderabad",
    showTimings: ["9:00 Am", "1:00pm", "4:00pm"],
    seatLayout: {
      A: 40,
      B: 40,
      C: 40,
      D: 40,
      E: 40,
      F: 40,
      G: 40,
      H: 40,
      I: 40,
    },
    occupiedSeats: ["B1", "C7"],
  };
  const [occupiedSeats, setOccupiedSeats] = useState<any>(
    theatersDetails.occupiedSeats
  );
  const blockSeats = () => {
    const { occupiedSeats } = theatersDetails;
    let occupiedSeatsCopy = [...occupiedSeats];
    occupiedSeatsCopy = [...selectedSeat, ...occupiedSeats];
    theatersDetails.occupiedSeats = occupiedSeatsCopy;
    setOccupiedSeats(occupiedSeatsCopy);
    console.log(theatersDetails);
    navigate(PathNames.USER_DETAILS);
  };

  return (
    <div className="container bg-[#E9E2E3]">
      <div className="p-2 flex justify-between items-center border border-b-indigo-600">
        <span>The Dark</span>
        <span>Inox-Hyderabad | 9:00 AM</span>
        <span>
          <button
            className="p-2 ease-in-out duration-300 bg-[#000] text-[#fff] rounded-xl"
            onClick={blockSeats}
          >
            Book Now
          </button>
        </span>
      </div>
      <div className="" style={{ width: "100vw" }}>
        {Object.keys(theatersDetails.seatLayout).map(
          (i: string, index: number) => (
            <div
              key={index}
              className="flex flex-row items-center justify-start"
            >
              <span
                style={{ fontSize: 14, fontWeight: 400, paddingLeft: "0px" }}
              >
                {i}
              </span>
              {new Array(theatersDetails.seatLayout[i])
                .fill(<MdOutlineChair />)
                .map((item: any, index: number) => (
                  <div
                    key={item}
                    onClick={() => {
                      setSelectedSeat([i + index, ...selectedSeat]);
                    }}
                    style={{
                      paddingLeft: `${index % 20 === 0 ? "80px" : "0px"}`,
                      color: `${
                        occupiedSeats.includes(i + index)
                          ? "blue"
                          : selectedSeat.includes(i + index) && "pink"
                      }`,
                      opacity: occupiedSeats.includes(i + index) && 0.3,
                    }}
                  >
                    {item}
                  </div>
                ))}{" "}
            </div>
          )
        )}
      </div>
      <div className="flex justify-center">Screen This way</div>
    </div>
  );
};
export default ChooseSeat;
