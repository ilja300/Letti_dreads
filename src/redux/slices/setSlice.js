import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  sets: [],
  status: "pending",
  error: null,
};
export const fetchSets = createAsyncThunk("sets/fetchSets", async () => {
  const resposnse = await axios.get(
    "https://6803521b0a99cb7408eba2e6.mockapi.io/Dreads"
  );
  return resposnse.data;
});
const setsSlice = createSlice({
  name: "sets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSets.pending, (state) => {
        state.status = "pending";
        state.error = null;
        state.sets = [];
      })
      .addCase(fetchSets.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.sets = action.payload;
      })
      .addCase(fetchSets.rejected, (state) => {
        state.status = "rejected";
        state.error = "error";
        state.sets = [];
      });
  },
});
export const setsReducer = setsSlice.reducer;
