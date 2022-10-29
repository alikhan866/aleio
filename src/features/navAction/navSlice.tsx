import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface navState {
  isOpen: boolean;
}

const initialState: navState = {
  isOpen: false,
};

export const navSlice = createSlice({
  name: "navState",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleNav } = navSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default navSlice.reducer;
