import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    mainVideos: null,
  },
  reducers: {
    setMainVideos: (state, action) => {
      state.mainVideos = action.payload;
    },
  },
});

export const { setMainVideos } = videosSlice.actions;

export default videosSlice.reducer;
