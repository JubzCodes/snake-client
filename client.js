const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  console.log("Successfully connected to the game server!")
  conn.write("Name: JKD")
  //conn.write("Move: up")
});

return conn;
};

module.exports = {connect};
// conn.on("data", (data) => {
//   console.log(data)
// });