import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineChair } from "react-icons/md";
import { PathNames } from "../../routes/PathNames";
import Sidebar from "../../atoms/Sidebar/Sidebar";
import { movieList, theatreSeatLayout } from "../../constants/MoviesList";

const ChooseSeat = () => {
  const navigate = useNavigate();

  const { movieId, theatreName, screenNo } = useParams();

  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [layout, setLayout] = useState<any>({});
  const [price, setPrice] = useState<number>(0);

  useEffect(() => {
    if (movieId && theatreName && screenNo) {
      getSeatLayout();
    }
  }, [movieId, theatreName, screenNo]);

  const getSeatLayout = () => {
    const findSeatLayout = theatreSeatLayout.find((item: any) => {
      return (
        item.theatreName === theatreName && item.screenNo === Number(screenNo)
      );
    });
    if (findSeatLayout !== undefined) {
      const { seatLayout } = findSeatLayout;
      setLayout(seatLayout);
    }
  };

  const blockSeats = () => {
    //If no seats are selected and if user clicks on check out button
    if (selectedSeats.length === 0) {
      alert("Please select atleast one seat");
      return;
    }
    //Passing selected seat numbers and total cost from location state to payment page
    navigate(PathNames.USER_DETAILS, {
      state: { blockedSeats: [...selectedSeats], price },
    });
  };

  const seatSelectHandler = (row: string, seatIndex: number) => {
    //if user wants to unselect the selected seat
    if (selectedSeats.includes(row + seatIndex)) {
      const unSelectSeat = selectedSeats.filter((seatNo: string) => {
        return seatNo !== row + seatIndex;
      });
      setSelectedSeats([...unSelectSeat]);
      setPrice(price - 220);
    } else {
      //if user want to select seat
      setSelectedSeats([...selectedSeats, row + seatIndex]);
      setPrice(price + 220);
    }
  };

  return (
    <>
      <Sidebar title="Seat Selection" />
      <div className="w-full relative">
        <div className="header">
          <div className=" mx-4 flex justify-between items-center text-[#fff] font-bold text-xl">
            <p className="">{`${theatreName} || screen- ${screenNo}`}</p>
            <div>
              <span className="pr-3 ">Total: {price}</span>
              <button
                className="p-3 bg-[#8c001a] rounded-lg font-bold hover:ease-in hover:bg-[green]"
                onClick={blockSeats}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="main_content w-full ">
          <div className=" h-[300px] mt-12">
            {layout &&
              Object.keys(layout)?.map((row: string, rowIndex: number) => (
                <div key={rowIndex} className="flex flex-row justify-center ">
                  <div className="mx-4 basis-12 text-center font-bold">
                    {row}
                  </div>
                  <div className="flex justify-center">
                    {Array(layout[row])
                      .fill(<MdOutlineChair style={{ fontSize: 28 }} />)
                      .map((seatNo: any, seatIndex: number) => (
                        <div
                          key={seatIndex}
                          className={`mx-1 cursor-pointer `}
                          onClick={() => seatSelectHandler(row, seatIndex + 1)}
                          style={{
                            paddingLeft: seatIndex === 10 ? "140px" : "2px",
                            color: selectedSeats.includes(row + (seatIndex + 1))
                              ? "green"
                              : "pink",
                          }}
                        >
                          {seatNo}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
          </div>
          <div className="font-extrabold absolute text-[#8c001a] bottom-6 right-[42%] ">
            Screen This Way
          </div>
        </div>
      </div>
    </>
  );
};
export default ChooseSeat;
