import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Notification { _id: string; type: string; message: string; read: boolean; }
interface NotificationState { items: Notification[]; }
const initialState: NotificationState = { items: [] };
const slice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotifications(state, action: PayloadAction<Notification[]>) { state.items = action.payload; }
  }
});
export const { setNotifications } = slice.actions;
export default slice.reducer;