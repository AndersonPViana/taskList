const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const autoConfig = require("../../config/auth");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorizartion;

  if (!authHeader) {
    return res.status(401).json({ message: "Token not exist" });
  }

  const [, token] = authHeader.split(" ");

  try {
    const decaded = await promisify(jwt.verify)(token, autoConfig.secret);

    req.userId = decaded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }
};
