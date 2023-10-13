import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/auth";
import ArtcleReduser from "../slice/Article";

export default configureStore({
  reducer: {
    auth: AuthReducer,
    article: ArtcleReduser,
  },
  devTools: process.env.NODE_ENV !== "production",
});
