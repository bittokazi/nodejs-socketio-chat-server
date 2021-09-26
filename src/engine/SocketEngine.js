import http from "http";
import SocketIoHandlers from "./../socketio/SocketIoHandlers";
import io from "socket.io";

export default function SocketEngine(app) {
  const httpApp = http.createServer(app);
  const socketIo = io.listen(httpApp, {
    handlePreflightRequest: (req, res) => {
      res.writeHead(200, {
        "Access-Control-Allow-Origin": req.headers.origin,
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Referer, User-Agent, Host, Authorization",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Max-Age": 8640000,
      });
      res.end();
    },
  });
  SocketIoHandlers(socketIo);
  return httpApp;
}
