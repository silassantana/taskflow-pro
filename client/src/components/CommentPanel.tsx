import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props { taskId: string; }
export const CommentPanel: React.FC<Props> = ({ taskId }) => {
  const token = useSelector((s: RootState)=>s.auth.token);
  const [comments, setComments] = useState<any[]>([]);
  const [body, setBody] = useState('');
  useEffect(()=>{ if(token){ axios.get(`/api/comments/${taskId}`, { headers:{ Authorization:`Bearer ${token}`}}).then(r=>setComments(r.data)); } }, [token, taskId]);
  async function add(e: React.FormEvent){ e.preventDefault(); if(!token) return; await axios.post('/api/comments', { task: taskId, body }, { headers:{ Authorization:`Bearer ${token}`}}); setBody(''); const r = await axios.get(`/api/comments/${taskId}`, { headers:{ Authorization:`Bearer ${token}`}}); setComments(r.data); }
  return <div>
    <h5>Comments</h5>
    <ul>{comments.map(c=> <li key={c._id}>{c.body}</li>)}</ul>
    <form onSubmit={add}><input value={body} onChange={e=>setBody(e.target.value)} /><button>Add</button></form>
  </div>;
};