import React, { useState } from "react";
import { setActiveTab } from "../../Redux/slices/dashboardStateSlice";
import { useAppDispatch } from "../../Redux/store";

const TableTabs = () => {
  const dispatch = useAppDispatch();
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
    dispatch(setActiveTab(index));
    //setTab(index);
  };

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex justify-start items-center text-[#8690A0]">
        {tableTabs?.map((tab: any, index: number) => (
          <li
            className={`${selectedTabIndex === index ? "selected-tab" : "tab"}`}
            style={{
              marginRight: "-20px",
              zIndex: selectedTabIndex === index ? 10 : 5 - index,
            }}
          >
            <div
              key={index}
              className="h-full flex justify-center items-center cursor-pointer text-2xl font-medium"
              onClick={() => handleTabClick(index)}
            >
              <span
                className="mr-4"
                //className={`main__menu-item-icon ${tab?.icon} fs_28 mr-4 `}
              >
                <img src={tab?.icon} alt="" />
              </span>
              <span className="">{tab.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableTabs;

const tableTabs = [
  { name: "Active users" },
  { name: "Archived users" },
  { name: "User logs" },
];
