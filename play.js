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

  conn.on("data", () => {
    console.log("You ded cuz you idled, it's got a sharp tongue, this server!");
  });

  return conn;
};

console.log("Connecting ...");
connect();
