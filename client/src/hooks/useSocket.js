import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
export function useSocket(projectId) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = io('/', { autoConnect: true });
        if (projectId)
            ref.current.emit('joinProject', projectId);
        return () => { ref.current?.disconnect(); };
    }, [projectId]);
    return ref;
}
