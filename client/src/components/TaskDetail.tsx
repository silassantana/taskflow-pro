import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props { taskId: string; }
export const TaskDetail: React.FC<Props> = ({ taskId }) => {
  const task = useSelector((s: RootState)=> s.tasks.items.find(t=>t._id===taskId));
  if(!task) return <div>Select a task</div>;
  return <div>
    <h4>{task.title}</h4>
    <p>Status: {task.status}</p>
    <p>Assignee: {task.assignee || 'Unassigned'}</p>
  </div>;
};