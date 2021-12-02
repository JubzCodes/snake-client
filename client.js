const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
  console.log("Successfully connected to the game server!")
  conn.write("Name: JKD")
});
conn.on("data", (data) => {
  console.log(data)
});

  return conn;
};

module.exports = {connect};