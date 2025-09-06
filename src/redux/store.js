import { configureStore } from "@reduxjs/toolkit";
import { setsReducer } from "./slices/setSlice";
export const store = configureStore({ reducer: { sets: setsReducer } });
