const router = require("express").Router();
const cors = require("cors");
const auth = require("./Middleware/Auth");


const PingController = require("./Controllers/PingController");
const TasksController = require("./Controllers/TasksController");
const UserController = require("./Controllers/UserController");

router.get("/ping", PingController.ping)

router.post("/tasks", auth, TasksController.getTasks);
router.post("/login", UserController.login);
router.post("/logout", auth, UserController.logout);
module.exports = router;