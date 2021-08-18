import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  io.origins('*:*');
  const socketIo = io(httpApp);
  SocketIoHandlers(socketIo);
  return httpApp;
}
