import net from "net";

const port = 5555;

function connectionHandler(socket) {
  console.log("Client Connected");

  socket.on("error", (error) => {
    console.log("Socket Error: ", error.message);
  });

  socket.on("end", () => {
    console.log("Client Disconnected");
  });

  socket.on("data", (data) => {
    const strData = data.toString();
    console.log(strData);

    if (strData === "hello") {
      socket.write("Hi there 👋");
    }
    if (strData === "foo") {
      socket.write("bar");
    }
  });
}

const server = net.createServer(connectionHandler);

server.listen(port, "0.0.0.0", port, () => {
  console.log(`Server listening on port ${port}`);
});
