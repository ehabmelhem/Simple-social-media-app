const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ehab:8zNEmazWN1x4dooV@cluster0.fw8eo.mongodb.net/meems",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});
// 8zNEmazWN1x4dooV
// mongodb+srv://ehab:8zNEmazWN1x4dooV@cluster0.fw8eo.mongodb.net/meems
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const userCollection = mongoose.model("user collection", userSchema);

exports.addUser = async (req, res) => {
  const { username, password } = req.body;
  await userCollection.find({ username: username }).then((docs) => {
    if (docs.length === 0) {
      var add = new userCollection({
        username: username,
        password: password,
      });
      add.save().then(() => {
        console.log("add new user to db");
      });
      res.send({ index: 1 });
    } else {
      res.send({ index: -1 });
    }
  });
};
