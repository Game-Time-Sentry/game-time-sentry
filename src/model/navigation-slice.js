import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    screen: null
};

let navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        change(state, action) {
            state.screen = action.payload;
        }
    }
});

export const { change } = navigationSlice.actions;
export default navigationSlice.reducer;
