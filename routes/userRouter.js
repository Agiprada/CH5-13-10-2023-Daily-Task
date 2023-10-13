const router = require("express").Router();

const User = require("../controller/userController");

router.get("/", User.findAllUser);
router.get("/:id", User.findUserById);
router.delete("/:id", User.deleteUser);

module.exports = router;
