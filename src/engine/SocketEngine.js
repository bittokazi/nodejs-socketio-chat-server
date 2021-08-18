import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  const socketIo = io(httpApp, { 
    origins: ["https://pmbt.bitto.website,https://chat-pmbt.bitto.website"],
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "https://chat-pmbt.bitto.website,https://pmbt.bitto.website",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true
      });
      res.end();
    }
  });
  SocketIoHandlers(socketIo);
  return httpApp;
}
