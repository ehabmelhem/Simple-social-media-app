const userControler = require("../Controllers/user");
const router = require("express").Router();
router.get("/stam", userControler.stam);
module.exports = router;
