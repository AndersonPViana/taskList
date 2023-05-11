const User = require('../models/User');

class UserController {
  async store(req, res) {
    const { id, name, email } = await User.create(req.body);

    return res.json({ 
      id,
      name, 
      email 
    });
  }
}

module.exports = new UserController();