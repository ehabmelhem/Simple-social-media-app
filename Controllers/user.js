const express = require("express");
const app = express();
exports.stam = (req, res) => {
  res.send({ messege: "hello from stam middleware" });
};
