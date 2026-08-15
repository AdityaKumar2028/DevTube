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
  },
});
export const { addLiveComments } = liveCommentsSlice.actions;
export default liveCommentsSlice.reducer;
