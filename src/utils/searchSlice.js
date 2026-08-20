import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchSuggestions: {},
  },

  reducers: {
    cacheSearchResult: (state, action) => {
      Object.assign(state.searchSuggestions, action.payload);
    },
  },
});
export default searchSlice.reducer;
export const { cacheSearchResult } = searchSlice.actions;
