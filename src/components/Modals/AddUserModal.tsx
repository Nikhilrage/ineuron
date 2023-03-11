import React, { useState } from "react";
import { dashboardCalls } from "../../api/fetchHelper";
import { constants } from "../../constants";
import {
  setLoading,
  setOpenModal,
  setOpenToast,
  setToastMessage,
} from "../../Redux/slices/dashboardStateSlice";
import { setAllUsers } from "../../Redux/slices/userSlice";
import { useAppDispatch, useAppSelector } from "../../Redux/store";

const AddUserModal = () => {
  const dispatch = useAppDispatch();

  const allUsers = useAppSelector(({ users }) => users.activeUsers);
  //const [initialState, setInitialState] = useState<any>({
  //  firstName: "",
  //  lastName: "",
  //  phoneNumber: "",
  //  age: "",
  //});

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [number, setNumber] = useState<string>("");
  const [age, setAge] = useState<number>();

  //const []

  const createUser = async () => {
    try {
      dispatch(setOpenModal(false));
      dispatch(setLoading(true));
      const payload = { firstName, lastName, phoneNumber: number, age };
      const res = await dashboardCalls.createUser(payload);
      if (res.message === constants.UserCreated) {
        dispatch(setAllUsers(allUsers.push(res.data)));
        dispatch(setToastMessage("User created successfully"));
        dispatch(setOpenToast(true));
      } else {
        dispatch(setToastMessage("Something went wrong in creating user"));
        dispatch(setOpenToast(true));
        console.log("Trigger toast message");
      }
    } catch (err) {
      dispatch(setToastMessage("Something went wrong in creating user"));
      dispatch(setOpenToast(true));
      console.log("err in creating user: ", err);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const editUser = async () => {
    const payload = { firstName, lastName, phoneNumber: number, age };
    console.log("edit userPayload: ", payload);
    const res = await dashboardCalls.editUser(payload);
    console.log("res: ", res);
  };

  const handleFormOnChange = (name: string, value: number | string) => {
    console.log("name: ", name, value);
    //setInitialState(initialState.firstName);
    //setInitialState({ name: value, ...initialState });
  };

  return (
    <div
      className="absolute flex justify-center"
      style={{
        zIndex: "999",
        top: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.2)",
      }}
    >
      <div
        className="bg-[#fff] rounded-lg py-2"
        style={{ height: "fit-content" }}
      >
        <center className="py-3 border-b border-slate-300 divide-x-4">
          <h2 className="text-lg font-medium text-[#8690a0]">Add User</h2>
        </center>
        <div>
          <form
            action=""
            onSubmit={(e) => e.preventDefault()}
            className="px-3 pt-3"
          >
            <div className="input">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  console.log("chain");
                  setFirstName(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="input">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Number"
                name="phoneNumber"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="input ">
              <label>Age</label>
              <input
                type="number"
                placeholder="Your Age"
                name="age"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
              />
            </div>
            {/*<span className=" my-3 bg-[#000]" />*/}
            <hr className="my-3" />
            <div className="flex flex-row justify-between items-center">
              <button
                //type="submit"
                className=" py-2 w-32 bg-[#0669F8] text-[#fff] rounded-md"
                onClick={() => dispatch(setOpenModal(false))}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" py-2 w-32 bg-[#0669F8] text-[#fff] rounded-md"
                onClick={createUser}
              >
                Save
              </button>
            </div>
            {/*</div>*/}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
