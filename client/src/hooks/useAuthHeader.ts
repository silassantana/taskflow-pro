import { useSelector } from 'react-redux';
import { RootState } from '../store';
export function useAuthHeader() { const token = useSelector((s: RootState)=>s.auth.token); return token ? { Authorization: `Bearer ${token}` } : {}; }