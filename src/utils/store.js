import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
  },
});

export default store;
