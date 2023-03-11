import React from "react";
import { dashboardCalls } from "../../api/fetchHelper";
import { constants } from "../../constants";
import {
  setLoading,
  setOpenDeleteUserModal,
  setOpenToast,
  setToastMessage,
} from "../../Redux/slices/dashboardStateSlice";
import { setArchivedUsers } from "../../Redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

const DeleteUserModal = () => {
  const dispatch = useAppDispatch();

  const deleteApiVariableId = useAppSelector(
    ({ dashboardState }) => dashboardState.deleteApiVariableId
  );

  const deleteUser = async () => {
    try {
      dispatch(setOpenDeleteUserModal(false));
      dispatch(setLoading(true));
      dispatch(setArchivedUsers(deleteApiVariableId));
      const res: any = await dashboardCalls.deleteUser(deleteApiVariableId);
      console.log("res: ", res);
      if (res?.message === constants.userDeleted) {
        dispatch(setArchivedUsers(deleteApiVariableId));
        dispatch(setToastMessage("User Deleted successfully"));
        dispatch(setOpenToast(true));
        console.log("user deleted");
      } else {
        dispatch(setToastMessage(res?.message));
        dispatch(setOpenToast(true));
      }
    } catch (err) {
      dispatch(setToastMessage("Something went wrong in deleting the user"));
      dispatch(setOpenToast(true));
      console.log("err in deleting user", err);
    } finally {
      dispatch(setLoading(false));
      dispatch(setArchivedUsers(""));
    }
  };

  return (
    <div
      className="absolute top-0 left-0 flex flex-row justify-center items-center"
      style={{
        background: "rgba(0,0,0,0.6)",
        height: "100vh",
        width: "100vw",
        zIndex: 999,
      }}
    >
      <div className="bg-[#fff] w-3/12 h-40 p-6 rounded-2xl">
        <center>
          <p>Are you sure you want to delete the user.</p>

          <div className="pt-9">
            <button
              className="float-left py-2 mr-4 w-32 bg-[#0669F8] text-[#fff] rounded-md"
              onClick={() => dispatch(setOpenDeleteUserModal(false))}
            >
              Cancel
            </button>
            <button
              className=" float-right py-2 w-32 bg-[#0669F8] text-[#fff] rounded-md"
              onClick={() => deleteUser()}
            >
              Confirm
            </button>
          </div>
        </center>
      </div>
    </div>
  );
};

export default DeleteUserModal;
