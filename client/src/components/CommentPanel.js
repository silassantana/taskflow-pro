import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
export const CommentPanel = ({ taskId }) => {
    const token = useSelector((s) => s.auth.token);
    const [comments, setComments] = useState([]);
    const [body, setBody] = useState('');
    useEffect(() => { if (token) {
        axios.get(`/api/comments/${taskId}`, { headers: { Authorization: `Bearer ${token}` } }).then(r => setComments(r.data));
    } }, [token, taskId]);
    async function add(e) { e.preventDefault(); if (!token)
        return; await axios.post('/api/comments', { task: taskId, body }, { headers: { Authorization: `Bearer ${token}` } }); setBody(''); const r = await axios.get(`/api/comments/${taskId}`, { headers: { Authorization: `Bearer ${token}` } }); setComments(r.data); }
    return _jsxs("div", { children: [_jsx("h5", { children: "Comments" }), _jsx("ul", { children: comments.map(c => _jsx("li", { children: c.body }, c._id)) }), _jsxs("form", { onSubmit: add, children: [_jsx("input", { value: body, onChange: e => setBody(e.target.value) }), _jsx("button", { children: "Add" })] })] });
};
