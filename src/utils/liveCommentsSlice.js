import { createSlice } from "@reduxjs/toolkit";
import { liveChatSize } from "./Constants";

const liveCommentsSlice = createSlice({
  name: "liveComments",
  initialState: {
    comments: [],
  },
  reducers: {
    addLiveComments: (state, action) => {
      state.comments.splice(0, state.comments.length - liveChatSize + 1);
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
