import io from "socket.io-client";
import feathers from "@feathersjs/client";

// Socket.io is exposed as the `io` global.
// In production we use NODE_INV to access server url
const socket = io("http://localhost:3030");
// @feathersjs/client is exposed as the `feathers` global.
const client = feathers()
  .configure(feathers.socketio(socket))
  .configure(
    feathers.authentication({
      storage: window.localStorage
    })
  );
export default client;
