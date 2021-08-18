import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  const socketIo = io(httpApp, { 
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true
      });
      res.end();
    }
  });
  SocketIoHandlers(socketIo);
  return httpApp;
}
