import AuthHandler from "./AuthHandler";
import ConnectionEvents from "./@connection-events/ConnectionEvents";
import RoomFetchEvent from "./@connection-events/RoomFetchEvent";
import TextMessageEvents from "./@connection-events/TextMessageEvents";

export default function SocketIoHandlers(socketIo) {
  socketIo = AuthHandler(socketIo);
  socketIo.on("authenticated", socket => {
    const user = {
      tenant: socket.decoded_token.tenant,
      id: socket.decoded_token.id,
      name: socket.decoded_token.name
    };
    console.log("Connection Authenticated!!!");
    ConnectionEvents(socket, user);
    RoomFetchEvent(socket, user);
    TextMessageEvents(socketIo, socket, user);
  });
}
