import { createSlice } from '@reduxjs/toolkit';
const initialState = { items: [] };
const slice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        setNotifications(state, action) { state.items = action.payload; }
    }
});
export const { setNotifications } = slice.actions;
export default slice.reducer;
