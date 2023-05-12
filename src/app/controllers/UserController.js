const User = require('../models/User');

class UserController {
  async store(req, res) {
    const userExist = await User.findOne({
      where: {email: req.body.email},
    });

    if(userExist) {
      res.status(400).json({message: 'User already exists'});
    };

    const { id, name, email } = await User.create(req.body);

    return res.json({ 
      id,
      name, 
      email 
    });
  }

  async update(req, res) {
    
  }
}

module.exports = new UserController();