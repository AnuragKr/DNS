const express = require("express");
const redis = require("redis");

const app = express();
// const client = redis.createClient({
//   host: "3.85.74.228",
//   port: 6379
// });
// client.set("visits", 0);

app.get("/", (req, res) => {
  res.send("Hi");
});

app.listen(80, () => {
  console.log("listening on port 80");
});
