import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import videosSlice from "./videosSlice";
import liveCommentsSlice from "./liveCommentsSlice";
import searchSlice from "./searchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    videos: videosSlice,
    liveCmts: liveCommentsSlice,
    search: searchSlice,
  },
});

export default store;
