const userControler = require("../Controllers/user");
const router = require("express").Router();

router.post("/add-user", userControler.addUser);

module.exports = router;
