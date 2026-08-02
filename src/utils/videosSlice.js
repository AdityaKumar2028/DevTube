import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: {},
    playerVideo: null,
  },
  reducers: {
    setMainVideos: (state, action) => {
      Object.assign(state.mainVideos, action.payload);
    },
    setPlayerVideo: (state, action) => {
      state.playerVideo = action.payload;
    },
  },
});

export const { setMainVideos, setPlayerVideo } = videosSlice.actions;

export default videosSlice.reducer;
