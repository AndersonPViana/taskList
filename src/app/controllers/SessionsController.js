const jwt = require('jsonwebtoken');
const User = require('../models/User.js');
const authConfig = require('../../config/auth.js');

class SessionsController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({where: {email}});

    if(!user) {
      return res.status(401).json({ error: 'User does not exist' })
    }

    if(!(await user.checkpassword(password))) {
      return res.status(401).json({ error: 'Incorrect password' })
    }

    const { id, name } = user;

    return res.json({
      user: {
        id, 
        name,
        email
      },                      
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn}),
    });
  }
}

module.exports = new SessionsController();