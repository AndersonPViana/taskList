import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import autoConfig from '../../config/auth.js';

export default async(req, res, next) => {
  const authHeader = req.headers.authorizartion;

  if(!authHeader) {
    return res.status(401).json({ message: 'Token not exist'});
  }

  const [, token] = authHeader.split(' ');

  try {
    const decaded = await promisify(jwt.verify)(token, autoConfig.secret);

    req.userId = decaded.id

    return next();
  } catch(err) {
    return res.status(401).json({ message: 'Token invalid' });
  }
}