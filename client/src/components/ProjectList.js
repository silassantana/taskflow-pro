import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProjects } from '../store/projectSlice';
export const ProjectList = () => {
    const dispatch = useDispatch();
    const token = useSelector((s) => s.auth.token);
    const projects = useSelector((s) => s.projects.items);
    useEffect(() => { if (token) {
        axios.get('/api/projects', { headers: { Authorization: `Bearer ${token}` } }).then(r => dispatch(setProjects(r.data)));
    } }, [token]);
    return _jsxs("div", { children: [_jsx("h3", { children: "Projects" }), _jsx("ul", { children: projects.map(p => _jsx("li", { children: p.name }, p._id)) })] });
};
