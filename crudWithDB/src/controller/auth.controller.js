const User = require("../model/user.model");
const jwt = require("jsonwebtoken");
const ErrorHandler = require("./../error");

const accessTokenSecret = "jwtauthentication";
module.exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) throw new ErrorHandler(401, "User doesnt exist", "warning");
    //return res.status('401').json({'error': 'User does not exist})
    //   res.send("User doesn't exists");
    if (!user.authenticate(req.body.password))
      throw new ErrorHandler(401, "Incorrect password", "warning");
    // return res.status('401').send({'error': 'email and password not match'})
    //   res.send("Invalid Password");
    //   res.send(`Welcome ${user.name}`);
  } catch (error) {
    res.send({ error: error.message });
  }
  const token=jwt.sign({})
};
