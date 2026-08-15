import { createSlice } from "@reduxjs/toolkit";

const liveCommentsSlice = createSlice({
  name: "liveComments",
  initialState: {
    comments: [],
  },
  reducers: {
    addLiveComments: (state, action) => {
      state.comments.push(action.payload);
    },
    removeLiveComments: (state) => {
      state.comments.length = 0;
    },
  },
});
export const { addLiveComments, removeLiveComments } =
  liveCommentsSlice.actions;
export default liveCommentsSlice.reducer;
