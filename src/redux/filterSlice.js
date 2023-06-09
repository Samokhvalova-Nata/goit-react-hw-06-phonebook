import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        updateFilter(state, action) { 
            state.filter = action.payload
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { updateFilter } = filterSlice.actions;