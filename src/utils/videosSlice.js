import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: {},
    playerVideo: null,
    videoComments: null,
  },
  reducers: {
    setMainVideos: (state, action) => {
      Object.assign(state.mainVideos, action.payload);
    },
    setPlayerVideo: (state, action) => {
      state.playerVideo = action.payload;
    },

    setVideoComments: (state, action) => {
      state.videoComments = action.payload;
    },
  },
});

export const { setMainVideos, setPlayerVideo, setVideoComments } =
  videosSlice.actions;

export default videosSlice.reducer;
