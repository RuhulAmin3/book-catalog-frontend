import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../types/user";

type StateType = {
  user: UserType | null;
  token: string | null;
};

const initialState: StateType = {
  user: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<StateType>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      console.log(action.payload);
      localStorage.setItem("accessToken", action.payload.token as string);
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
