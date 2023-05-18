const express = require("express");
const { getTodos, addNew, updateTodo, deleteTodo } = require("../controllers/todo.controller");
const { auth } = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, addNew);
router.get("/", getTodos);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
