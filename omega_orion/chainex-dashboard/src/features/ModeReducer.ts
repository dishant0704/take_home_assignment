import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => action.payload,
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
