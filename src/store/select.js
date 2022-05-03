import { createSlice } from "@reduxjs/toolkit";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const initialSelectState = {
   isSelected: false
}

const selectSlice = createSlice({
    name: 'select',
    initialState: initialSelectState,
    reducers: {
        isSelected(state){
            state.isSelected = true;
        },
        toBeBack(state){
            state.isSelected = false;
        },
    }
});

export const selectActions = selectSlice.actions;

export default selectSlice.reducer;