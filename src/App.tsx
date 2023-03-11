import React from "react";
import Loader from "./atoms/Loader/Loader";
import Sidebar from "./atoms/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import AddUserModal from "./components/Modals/AddUserModal";
import DeleteUserModal from "./components/Modals/DeleteUserModal";
import SnackBar from "./components/Modals/SnackBar";
import { useAppSelector } from "./Redux/store";

function App() {
  const showModal = useAppSelector(
    ({ dashboardState }) => dashboardState.openModal
  );
  const openDeleteUserModal = useAppSelector(
    ({ dashboardState }) => dashboardState.openDeleteUserModal
  );
  console.log("openDeleteUserModal: ", openDeleteUserModal);
  const openToastMessage = useAppSelector(
    ({ dashboardState }) => dashboardState.openDeleteUserModal
  );
  const loading = useAppSelector(
    ({ dashboardState }) => dashboardState.loading
  );
  console.log("openDeleteUserModal: ", openDeleteUserModal);

  return (
    <>
      <div className="flex h-full" style={{ height: "100vh" }}>
        <div
          className="bg-[#090B1A]"
          style={{ height: "100%", flexBasis: "20%" }}
        >
          <Sidebar />
        </div>
        <div className="" style={{ flexBasis: "80%" }}>
          <center
            className="h-[70px] pt-5 bg-[#090B1A] text-[#8690A0]"
            style={{ fontSize: 24, fontWeight: 500 }}
          >
            Admin Dashboard
          </center>
          <div
            className="bg-[#F7F9FB]"
            style={{
              borderTopLeftRadius: "20px",
              //background: "aqua",
              width: "100%",
              //height: "100%",
            }}
          >
            <Dashboard />
          </div>
        </div>
      </div>
      {showModal && <AddUserModal />}
      {openDeleteUserModal && <DeleteUserModal />}
      {openToastMessage && <SnackBar />}
      {loading && <Loader />}
    </>
  );
}

export default App;
