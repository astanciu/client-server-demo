import net from "net";

const host = "localhost";
const port = 5555;

const client = net.createConnection({ host, port }, () => {
  console.log("Connected to server.");
  client.write("hello");
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("close", () => {
  console.log("Connection closed");
});
