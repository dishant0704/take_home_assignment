// src/services/websocket.ts
type WebSocketCallbacks = {
  onOutput: (msg: any) => void;
  onStatusChange?: (status: string) => void;
};

export const createJupyterWebSocket = (
  kernelId: string,
  token: string,
  callbacks: WebSocketCallbacks
): WebSocket => {
  const wsUrl = `ws://localhost:8000/user/admin/api/kernels/${kernelId}/channels?token=${token}`;
  const ws = new WebSocket(wsUrl);

  ws.onopen = () => {
    callbacks.onStatusChange?.("connected");
  };

  ws.onclose = () => {
    callbacks.onStatusChange?.("closed");
  };

  ws.onerror = (err) => {
    console.error("WebSocket error", err);
    callbacks.onStatusChange?.("error");
  };

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.msg_type === "stream" || msg.msg_type === "execute_result" || msg.msg_type === "error") {
      callbacks.onOutput(msg);
    }
  };

  return ws;
};

export const sendExecuteRequest = (
  ws: WebSocket,
  code: string,
  _executionCount: number = 1
) => {
  const msg = {
    header: {
      msg_id: `${Math.random().toString(36).substr(2, 10)}`,
      username: "admin",
      session: "session_id",
      msg_type: "execute_request",
      version: "5.3",
    },
    parent_header: {},
    metadata: {},
    content: {
      code: code,
      silent: false,
      store_history: true,
      user_expressions: {},
      allow_stdin: false,
      stop_on_error: true,
    },
    channel: "shell",
  };

  ws.send(JSON.stringify(msg));
};
