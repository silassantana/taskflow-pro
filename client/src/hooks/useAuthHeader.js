import { useSelector } from 'react-redux';
export function useAuthHeader() { const token = useSelector((s) => s.auth.token); return token ? { Authorization: `Bearer ${token}` } : {}; }
