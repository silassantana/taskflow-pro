import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../store/projectSlice';
import { RootState } from '../store';

export const ProjectList: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((s: RootState)=>s.auth.token);
  const projects = useSelector((s: RootState)=>s.projects.items);
  useEffect(()=>{ if(token){ axios.get('/api/projects', { headers:{ Authorization:`Bearer ${token}`}}).then(r=>dispatch(setProjects(r.data))); } }, [token]);
  return <div>
    <h3>Projects</h3>
    <ul>{projects.map(p=> <li key={p._id}>{p.name}</li>)}</ul>
  </div>;
};