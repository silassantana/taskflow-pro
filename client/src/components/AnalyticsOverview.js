import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
export const AnalyticsOverview = ({ projectId }) => {
    const token = useSelector((s) => s.auth.token);
    const [stats, setStats] = useState(null);
    useEffect(() => { if (token) {
        axios.get(`/api/projects/${projectId}/stats`, { headers: { Authorization: `Bearer ${token}` } }).then(r => setStats(r.data));
    } }, [token, projectId]);
    if (!stats)
        return _jsx("div", { children: "Loading stats..." });
    return _jsxs("div", { children: [_jsx("h5", { children: "Progress" }), _jsxs("p", { children: [stats.done, "/", stats.total, " (", stats.percent, "%) done"] })] });
};
