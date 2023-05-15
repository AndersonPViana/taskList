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
    const { email, oldPassword } = req.body;
    
    const user = await User.findByPk(req.userId);

    if(email !== user.email) {
      const userExist = await User.findOne({
        where: {email},
      });

      if(userExist) {
        return res.status(400).json({ error: 'User already exists' });
      }
    }

    if(oldPassword && !(await user.checkpassword(oldPassword))){
      return res.status(401).json({ error: 'incorrect password' });
    }

    const { id, name } = await User.update(req.body);

    return res.json({
      id,
      name,
      email
    })
  }
}

module.exports = new UserController();