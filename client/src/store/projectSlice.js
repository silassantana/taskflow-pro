import { createSlice } from '@reduxjs/toolkit';
const initialState = { items: [] };
const slice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects(state, action) { state.items = action.payload; }
    }
});
export const { setProjects } = slice.actions;
export default slice.reducer;
