import TenantRoomGenerator from "./../@services/TenantRoomGenerator";

export default function RoomFetchEvent(socket, user) {
  socket.on("chat.rooms", callback => {
    let rooms = [];
    TenantRoomGenerator(user).then(room => {
      rooms.push(room);
      callback(rooms);
    });
  });

  socket.on("chat.join", (roomId, callback) => {
    socket.join(`${user.tenant}/${roomId}`);
    console.log(`${user.tenant}/${roomId}`);
    callback({ success: "ok" });
  });
}
