import { createSlice } from '@reduxjs/toolkit';
const initialState = { items: [] };
const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks(state, action) { state.items = action.payload; }
    }
});
export const { setTasks } = slice.actions;
export default slice.reducer;
