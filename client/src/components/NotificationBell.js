import { jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setNotifications } from '../store/notificationSlice';
export const NotificationBell = () => {
    const dispatch = useDispatch();
    const token = useSelector((s) => s.auth.token);
    const notifications = useSelector((s) => s.notifications.items);
    useEffect(() => { if (token) {
        axios.get('/api/notifications', { headers: { Authorization: `Bearer ${token}` } }).then(r => dispatch(setNotifications(r.data)));
    } }, [token]);
    return _jsxs("div", { children: ["\uD83D\uDD14 ", notifications.filter(n => !n.read).length] });
};
