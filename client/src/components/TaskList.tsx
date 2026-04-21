// TaskList - filterable list of tasks for the selected project
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setTasks } from '../store/taskSlice';

interface Props { projectId: string; }
export const TaskList: React.FC<Props> = ({ projectId }) => {
  const dispatch = useDispatch();
  const token = useSelector((s: RootState)=>s.auth.token);
  const tasks = useSelector((s: RootState)=>s.tasks.items);
  useEffect(()=>{ if(token){ axios.get('/api/tasks?project='+projectId, { headers:{ Authorization:`Bearer ${token}`}}).then(r=>dispatch(setTasks(r.data))); } }, [token, projectId]);
  return <div>
    <h4>Tasks</h4>
    <ul>{tasks.map(t=> <li key={t._id}>{t.title} - {t.status}</li>)}</ul>
  </div>;
};