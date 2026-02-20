import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { ProjectList } from './components/ProjectList';
const App = () => {
    const auth = useSelector((s) => s.auth);
    return _jsxs("div", { children: [_jsx("h2", { children: "TaskFlow Pro (Starter)" }), !auth.token && _jsxs(_Fragment, { children: [_jsx(LoginForm, {}), _jsx(RegisterForm, {})] }), auth.token && _jsx(ProjectList, {})] });
};
createRoot(document.getElementById('root')).render(_jsx(Provider, { store: store, children: _jsx(App, {}) }));
