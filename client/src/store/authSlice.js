import { createSlice } from '@reduxjs/toolkit';
const initialState = {};
const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) { Object.assign(state, action.payload); },
        logout(state) { state.token = undefined; state.user = undefined; }
    }
});
export const { setAuth, logout } = slice.actions;
export default slice.reducer;
