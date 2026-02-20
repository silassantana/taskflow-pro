import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await axios.post('/api/auth/login', { email, password });
    dispatch(setAuth(res.data));
  }
  return <form onSubmit={submit}>
    <h3>Login</h3>
    <input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
    <input type='password' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
    <button type='submit'>Login</button>
  </form>;
};