// Project slice - list of projects the user has access to
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface Project { _id: string; name: string; description?: string; }
interface ProjectState { items: Project[]; }
const initialState: ProjectState = { items: [] };
const slice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action: PayloadAction<Project[]>) { state.items = action.payload; }
  }
});
export const { setProjects } = slice.actions;
export default slice.reducer;