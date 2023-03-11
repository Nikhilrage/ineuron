import React, { useEffect, useState } from "react";
import Actions from "../../atoms/Actions/Actions";
import { useAppSelector } from "../../Redux/store";
import "../Styles.css";
import TableTabs from "../TableTabs/TableTabs";

const UserTable = () => {
  const activeTab = useAppSelector(
    ({ dashboardState }) => dashboardState.activeTab
  );
  const archivedUsers = useAppSelector(({ users }) => users.archivedUsers);

  const [activeUsers, setActiveUsers] = useState<any>([]);

  //const []

  const allUsers = useAppSelector(({ users }) => users.activeUsers);
  console.log("archivedUsers: ", archivedUsers);
  useEffect(() => {
    setActiveUsers(
      (activeTab === 0 ? allUsers : archivedUsers).map(
        (user: any, index: number) => {
          console.log("user: ", user);
          return {
            userId: user._id,
            name: `${user.firstName}  ${user.lastName}`,
            age: user.age,
            number: user.phoneNumber,
          };
        }
      )
    );
  }, [activeTab, allUsers]);

  console.log("activeUsers: ", activeUsers);
  return (
    <div>
      <TableTabs />
      <div
        className="w-full"
        style={{
          maxHeight: 300,
          overflowY: "scroll",
        }}
      >
        <table width={"100%"} className="noScrollbar bg-[#F7F9FB]">
          <thead
            className="bg-[#F7F9FB] border-b border-slate-200"
            style={{ position: "sticky", top: 0 }}
          >
            <tr>
              {headings.map((i: string, index: number) => (
                <th
                  key={index}
                  className={`px-5 ${
                    index === headings.length - 1
                      ? "text-center"
                      : "text-start "
                  }`}
                >
                  {i}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {activeUsers?.map((i: any, index: number) => (
              <tr
                key={index}
                className={`text-start px-5 h-12 
                  ${index % 2 === 0 ? "bg-[#EEF2F7]" : "bg-[#FFF]"}
                  `}
              >
                <td className="px-5 border-[#EBECF0]">{i?.userId}</td>
                <td className="px-5">{i?.name}</td>
                <td className="px-5">{i?.age}</td>
                <td className="px-4">{i?.number}</td>
                <td className="w-[260px]">
                  <Actions
                    textToBeCopied={i?.userId}
                    idToBeDeleted={i?.userId}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

const headings = ["User Id", "Full Name", "Age", "Number", "Actions"];

//typescript types
//table logic
//initial modal
// modal form css and validation
//testing
// push to netlify and make the count
