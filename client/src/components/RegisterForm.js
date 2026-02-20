import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/authSlice';
export const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    async function submit(e) {
        e.preventDefault();
        const res = await axios.post('/api/auth/register', { email, name, password });
        dispatch(setAuth(res.data));
    }
    return _jsxs("form", { onSubmit: submit, children: [_jsx("h3", { children: "Register" }), _jsx("input", { placeholder: 'email', value: email, onChange: e => setEmail(e.target.value) }), _jsx("input", { placeholder: 'name', value: name, onChange: e => setName(e.target.value) }), _jsx("input", { type: 'password', placeholder: 'password', value: password, onChange: e => setPassword(e.target.value) }), _jsx("button", { type: 'submit', children: "Create" })] });
};
