import React from "react";
import logo from "../../assets/ineuron_logo.png";

const sidebarTabs = [
  {
    name: "Active users",
  },
  {
    name: "Deleted users",
  },
  {
    name: "user logs",
  },
];
const Sidebar = () => {
  return (
    <div
      className=" text-[#000] border-r border-slate-500"
      style={{ height: "100vh" }}
    >
      <div className="sidebar_main mx-4 h-full">
        <div className="flex flex-col  h-full">
          <div className="sidebar_logo my-6 pb-4 border-b border-[pink]-900 ">
            <img src={logo} alt="" className="object-contain h-full w-full" />
          </div>
          <div className="mt-7">
            {sidebarTabs.map((i: any, index: number) => (
              <div
                key={index}
                className="py-3 px-2 mb-4 rounded-xl bg-[#8690A0] flex items-center justify-start"
              >
                <span className="mr-4  w-4 h-4 rounded-[50%] bg-[#000]" />
                <div>{i?.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
