import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer";

const store = configureStore({ reducer: authReducer });

export default store;