const Yup = require('yup');

const Task = require('../models/Task');

class TaskController {
  async store(req, res) {
    const schema = Yup.object().shape({
      task: Yup.string().required()
    });

    if(!(await schema.isValid(req.body))) {
      return res.status(400).json({ message: 'failed to register' })
    }

    const { task } = req.body;

    const tasks = await Task.create({
      user_id: req.userId,
      task,
    });

    return res.json(tasks);
  }
}

module.exports = new TaskController();