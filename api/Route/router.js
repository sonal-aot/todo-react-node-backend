const express = require("express");
const { createTask, displayTask, updateTask, deleteTask, clearCompletedTasks } = require("../helper/taskManipulation");
const { toggleTask } = require("../helper/toggleTask");
const router = express.Router();

router.post("/createTask", createTask);
router.get("/mytask", displayTask);
router.put("/updateTask/:id", updateTask);
router.delete("/deleteTask/:id",deleteTask)
router.put("/toggleTask/:id",toggleTask)
router.delete("/clearTasks",clearCompletedTasks)

module.exports = router;
