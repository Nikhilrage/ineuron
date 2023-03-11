import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface dashboardStateSliceInterface {
  openModal: boolean;
  loading: boolean;
  showToast: boolean;
  toastMessage: string;
  openDeleteUserModal: boolean;
  activeTab: number;
  deleteApiVariableId: string;
}

const initialState: dashboardStateSliceInterface = {
  openModal: false,
  openDeleteUserModal: false,
  loading: false,
  showToast: false,
  toastMessage: "",
  activeTab: 0,
  deleteApiVariableId: "",
};
export const dashboardStateSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<any>) => {
      state.openModal = action.payload;
    },
    setOpenDeleteUserModal: (state, action: PayloadAction<any>) => {
      state.openDeleteUserModal = action.payload;
    },
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
    setOpenToast: (state, action: PayloadAction<any>) => {
      state.showToast = action.payload;
    },
    setToastMessage: (state, action: PayloadAction<any>) => {
      state.toastMessage = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<any>) => {
      state.activeTab = action.payload;
    },
    setSeleteApiVariableId: (state, action: PayloadAction<any>) => {
      state.deleteApiVariableId = action.payload;
    },
  },
});

export const {
  setOpenModal,
  setLoading,
  setOpenToast,
  setToastMessage,
  setOpenDeleteUserModal,
  setActiveTab,
  setSeleteApiVariableId,
} = dashboardStateSlice.actions;
export default dashboardStateSlice.reducer;
