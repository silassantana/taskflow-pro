import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface AuthState { token?: string; user?: { id: string; email: string; name: string }; }
const initialState: AuthState = {};
const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthState>) { Object.assign(state, action.payload); },
    logout(state) { state.token = undefined; state.user = undefined; }
  }
});
export const { setAuth, logout } = slice.actions;
export default slice.reducer;