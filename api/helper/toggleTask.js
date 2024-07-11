let { taskData } = require("./taskManipulation");

const toggleTask = (req, res) => {
  try {
    const id = req.params.id;
    let task = taskData.find((t) => t.uuid == id);

    if (task) {
      task.status = !task.status;
      return res.status(200).send("Task status updated successfully");
    } else {
      return res.status(400).send("Task not found");
    }
  } catch (error) {
    console.error("Error updating task status:", error);
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { toggleTask };
