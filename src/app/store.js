import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import numberReducer from "../features/number/numberSlice.js";
import logger from "redux-logger";

const store = configureStore({
  reducer: { counter: counterReducer, number: numberReducer },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(logger),
});

export default store;
