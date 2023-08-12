const express = require("express");
const { getUser, updateUser, createUser, deleteUser } = require("../controller/userController");
const router = express.Router();


router.route("/").get(getUser);
router.route("/").post(createUser);
router.route("/:id").put(updateUser);
router.route("/:id").delete(deleteUser);

module.exports = router;