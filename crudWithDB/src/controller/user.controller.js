var User = require("../model/user.model");

module.exports.getUser = async (req, res) => {
  try {
    let user = await User.find();
    res.send({ user });
  } catch (error) {
    res.send({ error: error.message });
  }
};
module.exports.createUser = async (req, res) => {
  try {
    let { name, email, role, password } = req.body;
    let user = new User({ name, email, role, password });
    await user.save();
    res.send({ success: true, user });
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    let user = await User.find({ _id: req.params.id });
    if (!user) {
      res.send(`User record not found`);
    }
    let { name, email, role, hashed_password } = req.body;
    await User.updateOne(
      { _id: req.params.id },
      { name, email, role, hashed_password }
    );
    res.send(`User record is updated`);
  } catch (error) {
    res.send({ error: error.message });
  }
};
module.exports.deleteUser = async (req, res) => {
  try {
    let user = await User.find({ _id: req.params.id });
    if (!user) {
      res.send(`User record not found`);
    }
    await User.deleteOne({ _id: req.params.id });
    res.send(`User record is deleted`);
  } catch (error) {
    res.send({ error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) res.send("User doesn't exists");
    if (!user.authenticate(req.body.password)) res.send("Invalid Password");
    res.send(`Welcome ${user.name}`);
  } catch (error) {
    res.send({ error: error.message });
  }
};
