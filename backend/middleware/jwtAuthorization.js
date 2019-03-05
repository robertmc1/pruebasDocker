const { UserModel } = require('../models/user');
const jwt = require('jsonwebtoken');

const jwtAuthorization = (req, res, next) => {

  const token = req.header('Authorization');
  try {
    const userData = jwt.verify(token, 'jwt encrypt pass');
    UserModel.findById(userData._id)
      .then(data => {
        next();
      })
      .catch(err => {
        console.error('.catch err:', err);
        res.status(401).json(err);
      });
  } catch (err) {
    console.error('catch err:', err);

    res.status(401).json(err);
  }
};

module.exports = jwtAuthorization;