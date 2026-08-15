import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import liveCommentsSlice from "./liveCommentsSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
    liveCmts: liveCommentsSlice,
  },
});

export default store;
