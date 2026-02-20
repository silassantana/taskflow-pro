import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';

export const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const res = await axios.post('/api/auth/register', { email, name, password });
    dispatch(setAuth(res.data));
  }
  return <form onSubmit={submit}>
    <h3>Register</h3>
    <input placeholder='email' value={email} onChange={e=>setEmail(e.target.value)} />
    <input placeholder='name' value={name} onChange={e=>setName(e.target.value)} />
    <input type='password' placeholder='password' value={password} onChange={e=>setPassword(e.target.value)} />
    <button type='submit'>Create</button>
  </form>;
};