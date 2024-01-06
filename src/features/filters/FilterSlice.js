import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedTags: [],
  searchText: "",
};

const FilterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelect: (state, action) => {
      state.selectedTags.push(action.payload);
    },
    tagRemove: (state, action) => {
      const removedIndex = state.selectedTags.indexOf(action.payload);
      if (removedIndex != -1) {
        state.selectedTags.splice(removedIndex, 1);
      }
    },
    searched: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default FilterSlice.reducer;
export const { tagSelect, tagRemove, searched } = FilterSlice.actions;
