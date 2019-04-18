const router = require("express").Router();
const bcrypt = require("bcryptjs");

const generateToken = require("./authenticate.js")
const Users = require("../users/users-model.js");

router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      const token = generateToken.generateToken(user);
      res
        .status(201)
        .json({ message: "User successfully registered to database." , token, user: saved.id});
    })
    .catch(error => {
      res
        .status(500)
        .json({ error, message: "User not registered.  Please try again, Please fill out all the fields" });
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken.generateToken(user);

        res.status(200).json({
          message: `Welcome ${user.username}!`,
          token, user: user.id
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;