const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "172.46.0.236",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    // conn.write(
    //   "Hello from client, the game server has successfully been connected!"
    // );
    console.log("Successfully connected to game server!");
    conn.write("Name: DXH");
  });

  // conn.on("connect", () => {
  //   conn.write("Name: DXH");
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up"); //Move: up message to the server.
  //   }, 1000);
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: down"); //Move: down message to the server.
  //   }, 1000);
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: left"); //Move: left message to the server.
  //   }, 1000);
  // });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: right"); //Move: right message to the server.
  //   }, 1000);
  // });

  return conn;
};

module.exports = { connect };
