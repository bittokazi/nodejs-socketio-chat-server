import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  const socketIo = io(httpApp, {
    cors: {
      origin: "https://pmbt.bitto.website", // or "*"
      methods: ["GET", "POST", "OPTIONS"],
    },
  });
  SocketIoHandlers(socketIo);
  return httpApp;
}
