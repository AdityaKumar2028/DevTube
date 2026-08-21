import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: {},
    videoComments: null,
  },
  reducers: {
    setMainVideos: (state, action) => {
      Object.assign(state.mainVideos, action.payload);
    },

    setVideoComments: (state, action) => {
      state.videoComments = action.payload;
    },
  },
});

export const { setMainVideos, setVideoComments } = videosSlice.actions;

export default videosSlice.reducer;
