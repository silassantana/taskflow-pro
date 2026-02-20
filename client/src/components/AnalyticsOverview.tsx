import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

interface Props { projectId: string; }
export const AnalyticsOverview: React.FC<Props> = ({ projectId }) => {
  const token = useSelector((s: RootState)=>s.auth.token);
  const [stats, setStats] = useState<{ total: number; done: number; percent: number } | null>(null);
  useEffect(()=>{ if(token){ axios.get(`/api/projects/${projectId}/stats`, { headers:{ Authorization:`Bearer ${token}`}}).then(r=>setStats(r.data)); } }, [token, projectId]);
  if(!stats) return <div>Loading stats...</div>;
  return <div>
    <h5>Progress</h5>
    <p>{stats.done}/{stats.total} ({stats.percent}%) done</p>
  </div>;
};