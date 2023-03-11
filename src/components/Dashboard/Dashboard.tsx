import React, { useEffect } from "react";
import { dashboardCalls } from "../../api/fetchHelper";
import UserTable from "../UserTable/UserTable";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
//import userSlice from "../../Redux/userSlice";
import { constants } from "../../constants";
import { useAppSelector } from "../../Redux/store";
import { setAllUsers } from "../../Redux/slices/userSlice";
import AddUserModal from "../Modals/AddUserModal";
import {
  setLoading,
  setOpenToast,
  setToastMessage,
} from "../../Redux/slices/dashboardStateSlice";
//import { setAllUsers } from "../../Redux/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const allUsers = useAppSelector(({ users }) => users.activeUsers);
  console.log("allUsers:  ", allUsers);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      dispatch(setLoading(true));
      const res = await dashboardCalls.getAllUsers();
      console.log("res: ", res);
      if (res.message === constants.getAllusersSuccess) {
        dispatch(setAllUsers(res?.data));
      } else {
        dispatch(setToastMessage("Something went wrong in fetching users"));
        dispatch(setOpenToast(true));
      }
    } catch (err) {
      dispatch(setToastMessage("Something went wrong in fetching users"));
      dispatch(setOpenToast(true));
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <div className="p-5 flex flex-col ">
        <Cards />
        <span className="my-4 mb-9 border-b border-slate-400" />
        <UserTable />
      </div>
    </>
  );
};

export default Dashboard;
