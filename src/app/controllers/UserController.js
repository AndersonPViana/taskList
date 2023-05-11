import User from '../models/User';

class UserController {
  async store(req, res) {
    const {name, email, password_hash} = req.body

    const user = await User.create(name, email, password_hash);

    return res.status(200).json({ message: 'User created' })
  }
}

export default new UserController();