export default function ConnectionEvents(socket, user) {
  socket.conn.on("heartbeat", () => {});

  socket.on("disconnect", () => {
    console.log("Disconnected user", user.id, user.tenant);
  });
}
