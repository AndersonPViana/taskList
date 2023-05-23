import * as Yup from 'yup';

import Task from '../models/Task';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      where: { user_id: req.userId, check: false },
    })

    return res.json(tasks);
  }

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

  async update(req, res) {
    const { task_id } = req.params;
    
    const task = await Task.findByPk(task_id);

    if(!task) {
      return res.status(400).json({ message: 'task does not exist' })
    }

    await task.update(req.body);

    return res.json(task);
  }

  async deleta(req, res) {
    const { task_id } = req.params;

    const task = await Task.findByPk(task_id);

    if(!task){
      return res.status(400).json({ message: 'task does not exist' })
    }

    if(task.user_id !== req.userId) {
      return res.status(401).json({ message: 'unauthorized request' })
    }

    await task.destroy()

    return res.json({ message: 'deleted task' })
  }
}

export default new TaskController();