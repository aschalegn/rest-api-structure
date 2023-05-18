const express = require("express");
const { register, getUsers, logIn } = require("../controllers/user.controller");
const router = express.Router();


router.get("/", getUsers);
router.post("/login", logIn);
router.post("/register", register);
// router.post("/login", logIn);

module.exports = router;
