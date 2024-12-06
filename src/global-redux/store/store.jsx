import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../reducers/common/slice";

export const store = configureStore({
  reducer: {
    common: commonReducer,
  },
});
