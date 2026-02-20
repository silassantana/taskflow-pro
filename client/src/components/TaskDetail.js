import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
export const TaskDetail = ({ taskId }) => {
    const task = useSelector((s) => s.tasks.items.find(t => t._id === taskId));
    if (!task)
        return _jsx("div", { children: "Select a task" });
    return _jsxs("div", { children: [_jsx("h4", { children: task.title }), _jsxs("p", { children: ["Status: ", task.status] }), _jsxs("p", { children: ["Assignee: ", task.assignee || 'Unassigned'] })] });
};
