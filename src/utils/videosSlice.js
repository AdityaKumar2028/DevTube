import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: {},
  },
  reducers: {
    setMainVideos: (state, action) => {
      Object.assign(state.mainVideos, action.payload);
    },
  },
});

export const { setMainVideos } = videosSlice.actions;

export default videosSlice.reducer;
