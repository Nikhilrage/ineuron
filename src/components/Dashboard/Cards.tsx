import React from "react";
import { GrAdd } from "react-icons/gr";
import { setOpenModal } from "../../Redux/slices/dashboardStateSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

const Cards = () => {
  const dispatch = useAppDispatch();

  const activeUsers = useAppSelector(({ users }) => users.activeUsers);

  const cardData = [
    { cardTitle: "Active Users", count: activeUsers ? activeUsers.length : 0 },
    { cardTitle: "Archived Users", count: 3 },
    //{ cardTitle: "Add User", count: <GrAdd />, action: () => {} },
  ];

  return (
    <div className="flex flex-row justify-between w-full">
      <div className=" flex flex-row">
        {cardData.map((i: any, idx: number) => (
          <div
            className="mr-3 p-3 flex flex-col bg-[#eef2f7] text-[#8690A0] hover:text-[#0669f8] w-40 border border-gray-300 rounded-2xl shadow-lg"
            key={idx}
          >
            <div className="text-center">{i?.cardTitle}</div>
            <div className={`text-center `}>{i?.count}</div>
          </div>
        ))}
      </div>
      <div
        className="bg-[#eef2f7] text-[#8690A0] hover:text-[#0669f8] w-48 border border-gray-300 rounded-2xl shadow-lg flex-2 cursor-pointer"
        onClick={() => dispatch(setOpenModal(true))}
      >
        <center className="mt-3">
          <div className="pb-2">Create User</div>
          <span>
            {" "}
            <GrAdd style={{ fontSize: 20 }} />
          </span>
        </center>
      </div>
    </div>
  );
};

export default Cards;
