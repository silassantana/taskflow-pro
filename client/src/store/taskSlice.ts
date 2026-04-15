// Task slice - holds the active project's task list
// Task slice - holds the active project's task list
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Task { _id: string; title: string; status: string; assignee?: string; }
interface TaskState { items: Task[]; }
const initialState: TaskState = { items: [] };
const slice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) { state.items = action.payload; }
  }
});
export const { setTasks } = slice.actions;
export default slice.reducer;