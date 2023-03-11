import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface users {
  activeUsers: any;
  cardsData: any;
  archivedUsers: any;
  logs: any;
}

const initialState: users = {
  activeUsers: [],
  cardsData: [],
  archivedUsers: [],
  logs: [],
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    setAllUsers: (state, action: PayloadAction<any>) => {
      state.activeUsers = action.payload;
    },
    setArchivedUsers: (state, action: PayloadAction<any>) => {
      const getDeletedUsers = state.activeUsers.filter((user: any) => {
        return user.id === action.payload;
      });
      state.archivedUsers = getDeletedUsers;
    },
  },
});

export const { setAllUsers, setArchivedUsers } = userSlice.actions;
export default userSlice.reducer;
