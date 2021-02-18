const userControler = require("../Controllers/user");
const router = require("express").Router();

router.post("/add-user", userControler.addUser);
router.post("/check-user", userControler.checkUser);

module.exports = router;
