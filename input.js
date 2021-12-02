
let connection;
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};
const handleUserInput = function (key) {
  switch(key) {
  case '\u0003':
    console.log("Disconnected from server!")
    process.exit();
    break;
  case 'w':
    connection.write("Move: up")
    break;
  case 'a':
    connection.write("Move: left")
    break;
  case 's':
    connection.write("Move: down")
    break;
  case 'd':
    connection.write("Move: right")
    break;
  case '1':
    connection.write("Say: noo!")
    break;
  case '2':
    connection.write("Say: yum!")
    break;
  case '3':
    connection.write("Say: you next!")
    break;
  case '4':
    connection.write("Say: surrender!")
 }};

module.exports = { setupInput };
      
      
    