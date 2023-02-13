import React from "react";
import logo from "../../assets/logo.png";

type sidebarProps = {
  title?: string;
};

const sidebarMenu = ["Movies", "Timings", "Seat Selection", "Payment"];

const Sidebar = (props: sidebarProps) => {
  return (
    <div className="sticky top-0 left-0 z-10 bottom-0 min-w-[200px] max-w-[200px] bg-[#000]  h-[100vh] ">
      <div className=" p-2 flex flex-col gap-y-2.5">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="px-2 flex flex-col justify-start items-center gap-y-2.5 ">
          {sidebarMenu.map((i: string, index: number) => (
            <div
              className="bg-[#8c001a] w-full px-3 py-3 text-md font-semibold rounded-2xl flex flex-row items-center justify-start"
              key={index}
            >
              <span
                className="rounded-[50%] h-2.5 w-2.5"
                style={{
                  backgroundColor: i === props.title ? "#fff" : "#30000C",
                }}
              ></span>
              <span
                className="pl-3"
                style={{
                  color: i === props.title ? "#fff" : "#30000C",
                }}
              >
                {i}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
