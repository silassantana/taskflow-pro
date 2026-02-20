import { useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

export function useSocket(projectId?: string) {
  const ref = useRef<Socket | null>(null);
  useEffect(()=>{
    ref.current = io('/', { autoConnect: true });
    if(projectId) ref.current.emit('joinProject', projectId);
    return ()=>{ ref.current?.disconnect(); };
  }, [projectId]);
  return ref;
}