import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: {},
    watchVideo: {},
    watchNextVideos: {},
    videoComments: null,
  },
  reducers: {
    setMainVideos: (state, action) => {
      Object.assign(state.mainVideos, action.payload);
    },

    setWatchVideo: (state, action) => {
      state.watchVideo = action.payload;
    },
    setWatchNextVideos: (state, action) => {
      state.watchNextVideos = action.payload;
    },

    setVideoComments: (state, action) => {
      state.videoComments = action.payload;
    },
  },
});

export const {
  setMainVideos,
  setVideoComments,
  setWatchVideo,
  setWatchNextVideos,
} = videosSlice.actions;

export default videosSlice.reducer;
