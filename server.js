const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routers/user");
const app = express();
app.use(bodyParser.json());
app.use(express.static("app/build"));
app.use("/user", router);

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log("listen on port ", port);
});
