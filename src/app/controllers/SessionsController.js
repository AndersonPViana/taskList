const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

class SessionsController {
  async store(req, res) {
    const { email, password } = req.body

    const user = await User.findOne({where: {email}})
    if(!user) {
      return res.status(401).json('User does not exist')
    }

  }
}