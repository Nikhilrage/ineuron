import moment from "moment";
import React, { useEffect, useState } from "react";
import Actions from "../../atoms/Actions/Actions";
import { useAppSelector } from "../../Redux/store";
import "../Styles.css";
import TableTabs from "../TableTabs/TableTabs";

interface userLogs {
  _id: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}
interface userList {
  _id: string;
  firstName: string;
  lastName: string;
  age: string;
  phoneNumber: number;
}

const UserTable = () => {
  const getDeletedUsers: any = localStorage.getItem("deletedUsers");

  const activeTab = useAppSelector(
    ({ dashboardState }) => dashboardState.activeTab
  );
  const allUsers = useAppSelector(({ users }) => users.activeUsers);

  const [tableheading, setTableheading] = useState<string[]>([]);
  const [usersList, setUsersList] = useState<any>([]);

  useEffect(() => {
    let activeTabUserData: any = [];
    if (activeTab === 1) {
      const parsingDeletedUsers: any = JSON.parse(getDeletedUsers);
      activeTabUserData = [...parsingDeletedUsers];
    }
    if (activeTab === 0) {
      activeTabUserData = [...allUsers];
    }
    if (activeTab === 2) {
      const parsingDeletedUsers: any = JSON.parse(getDeletedUsers);
      const getAllUsers = [...allUsers, ...parsingDeletedUsers];
      const userLogs = getAllUsers.map((user: userLogs) => {
        return {
          userId: user._id,
          name: `${user.firstName}  ${user.lastName}`,
          createdAt: moment(user.createdAt).format("DD/MM/YYYY - hh:mm:ss"),
          updatedAt: moment(user.updatedAt).format("DD/MM/YYYY - hh:mm:ss"),
          status: getUserStatus(user._id) ? "Active" : "Archived",
        };
      });
      setTableheading(userLogsHeading);
      setUsersList(userLogs);
    } else {
      const userData = activeTabUserData?.map(
        (user: userList, index: number) => {
          return {
            userId: user._id,
            name: `${user.firstName}  ${user.lastName}`,
            age: user.age,
            number: user.phoneNumber,
          };
        }
      );
      setTableheading(headings);
      setUsersList(userData);
    }
  }, [activeTab, allUsers, getDeletedUsers]);

  const getUserStatus = (id: string) => {
    const userStatus = allUsers.find((item: any) => {
      return item._id === id;
    });
    return userStatus ? true : false;
  };

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
              {tableheading?.map((i: string, index: number) => (
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
            {usersList?.map((i: any, index: number) =>
              activeTab === 2 ? (
                <tr
                  key={index}
                  className={`text-start px-5 h-12 
                  ${index % 2 === 0 ? "bg-[#EEF2F7]" : "bg-[#FFF]"}
                  `}
                >
                  <td className="px-5 w-40">{i?.userId}</td>
                  <td className="px-5 w-36">{i?.name}</td>
                  <td className="px-5 w-48">{i?.createdAt}</td>
                  <td className="pl-6 w-48">{i?.updatedAt}</td>
                  <td className={`"px-8"`}>
                    <center
                      className={`mx-6 py-2 rounded-2xl
                      ${
                        i?.status === "Active" ? "bg-[#A693FD]" : "bg-[#F7931A]"
                      }
                      `}
                    >
                      {i?.status}
                    </center>
                  </td>
                </tr>
              ) : (
                <tr
                  key={index}
                  className={`text-start px-5 h-12 
                  ${index % 2 === 0 ? "bg-[#EEF2F7]" : "bg-[#FFF]"}
                  `}
                >
                  <td className="px-5">{i?.userId}</td>
                  <td className="px-5 w-32 text-ellipsis overflow-hidden">
                    {i?.name}
                  </td>
                  <td className="px-5">{i?.age}</td>
                  <td className="px-4">{i?.number}</td>
                  <td className="w-[260px]">
                    <Actions textToBeCopied={i?.userId} id={i?.userId} />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

const headings = ["User Id", "Full Name", "Age", "Number", "Actions"];
const userLogsHeading = [
  "User Id",
  "Full Name",
  "Created Date",
  "Updated Date",
  "status",
];

// modal form css and validation
//testing
