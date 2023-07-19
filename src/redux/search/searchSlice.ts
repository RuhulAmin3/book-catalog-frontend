import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateType {
  searchText: string;
}

const initialState: StateType = {
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setSearchText } = searchSlice.actions;
