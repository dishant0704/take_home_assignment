import { useState, useEffect, useRef } from 'react';

interface UseJupyterProps {
  kernelId: string;
  token: string;
}

export const useJupyter = ({ kernelId, token }: UseJupyterProps) => {
  const [logs, setLogs] = useState<string[]>([]);
  const websocketRef = useRef<WebSocket | null>(null);

  const connectWebSocket = () => {
    const ws = new WebSocket(
      `ws://localhost:8000/user/admin/api/kernels/${kernelId}/channels?token=${token}`
    );

    ws.onopen = () => {
      console.log('WebSocket connected');
      setLogs((prev) => [...prev, 'WebSocket connected']);
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.msg_type === 'stream' && msg.content?.text) {
        setLogs((prev) => [...prev, msg.content.text]);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.warn('WebSocket disconnected');
    };

    websocketRef.current = ws;
  };

  const sendCode = (code: string) => {
    if (!websocketRef.current) return;

    const message = {
      header: {
        msg_id: 'run_code_1',
        username: 'admin',
        session: 'run_session',
        msg_type: 'execute_request',
        version: '5.3',
      },
      parent_header: {},
      metadata: {},
      content: {
        code: code,
        silent: false,
      },
      channel: 'shell',
    };

    websocketRef.current.send(JSON.stringify(message));
    setLogs((prev) => [...prev, `Sent code:\n${code}`]);
  };

  useEffect(() => {
    connectWebSocket();
    return () => {
      websocketRef.current?.close();
    };
  }, [kernelId]);

  return { logs, sendCode };
};
