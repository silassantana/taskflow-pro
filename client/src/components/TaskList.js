import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../store/taskSlice';
export const TaskList = ({ projectId }) => {
    const dispatch = useDispatch();
    const token = useSelector((s) => s.auth.token);
    const tasks = useSelector((s) => s.tasks.items);
    useEffect(() => { if (token) {
        axios.get('/api/tasks?project=' + projectId, { headers: { Authorization: `Bearer ${token}` } }).then(r => dispatch(setTasks(r.data)));
    } }, [token, projectId]);
    return _jsxs("div", { children: [_jsx("h4", { children: "Tasks" }), _jsx("ul", { children: tasks.map(t => _jsxs("li", { children: [t.title, " - ", t.status] }, t._id)) })] });
};
