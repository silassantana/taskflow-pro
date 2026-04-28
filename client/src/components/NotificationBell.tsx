// NotificationBell - badge icon that shows unread notification count
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setNotifications } from '../store/notificationSlice';

export const NotificationBell: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((s: RootState)=>s.auth.token);
  const notifications = useSelector((s: RootState)=>s.notifications.items);
  useEffect(()=>{ if(token){ axios.get('/api/notifications', { headers:{ Authorization:`Bearer ${token}`}}).then(r=>dispatch(setNotifications(r.data))); } }, [token]);
  return <div>🔔 {notifications.filter(n=>!n.read).length}</div>;
};