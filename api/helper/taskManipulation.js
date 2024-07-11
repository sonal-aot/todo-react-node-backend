let taskData = [];

const createTask = (req, res) => {
  const { uuid, title, description, date, status, dateCreated } = req.body;
  const task = { uuid, title, description, date, status, dateCreated };
  if (taskData.push(task)) {
    res.status(201).json({ message: "task created", id: task.uuid });
  } else {
    res.status(400).json({ message: "task not created" });
  }
};

const displayTask = (req, res) => {
  res.status(200).json(taskData);
};

const updateTask = (req, res) => {
  const id = req.params.id;
  const { title, description, date, status } = req.body;
  const task = taskData.find((t) => t.uuid == id);

  if (task) {
    task.title = title;
    task.description = description;
    task.date = date;
    task.status = status;
  } else {
    return res.status(400).send("Task not found");
  }
  res.json(taskData);
};

const deleteTask = (req, res) => {
  const id = req.params.id;
  const task = taskData.find((t) => t.uuid == id);

  if (task) {
    taskData.splice(taskData.indexOf(task), 1);
    res.json(taskData);
  } else {
    return res.status(400).send("Task not found");
  }
};

const clearCompletedTasks = (req, res) => {
  const filteredTask = taskData.filter((task) => !task.status);
  taskData = filteredTask;
  res.status(200).send("Completed tasks cleared successfully");
};

module.exports = {
  createTask,
  taskData,
  displayTask,
  updateTask,
  deleteTask,
  clearCompletedTasks,
};
