import { configureStore } from '@reduxjs/toolkit';
import auth from './authSlice';
import projects from './projectSlice';
import tasks from './taskSlice';
import notifications from './notificationSlice';
export const store = configureStore({ reducer: { auth, projects, tasks, notifications } });
