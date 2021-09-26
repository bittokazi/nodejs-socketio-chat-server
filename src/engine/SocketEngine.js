import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  const socketIo = io.listen(httpApp, {
    origins: ["https://pmbt.bitto.website", "*"],
  });
  SocketIoHandlers(socketIo);
  return httpApp;
}
