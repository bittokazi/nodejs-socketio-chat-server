import getTenantUsers from "./../../Services/ChatServices";

export default function TenantRoomGenerator(user) {
  return new Promise(resolve => {
    getTenantUsers(user).then(users => {
      return resolve({
        title: "General Room",
        roomUid: "general-tenant-" + user.tenant,
        users
      });
    });
  });
}
