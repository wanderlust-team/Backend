const jwt = require("jsonwebtoken");

const secrets = require("./secrets.js");

module.exports = {
  authenticate,
  generateToken
};

function authenticate(req, res, next) {
  const token = req.get("Authorization");

  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if(err) return res.status(401),json(err);

      req.decoded = decoded ;

      next();
    });
  } else {
    return res.status(401).json({
      error: "No token provided, must be set on Auth Header"
    });
  }
}

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, jwtKey, options);
}