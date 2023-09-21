var Trainee = require("../model/trainee.model");

module.exports.getTrainees = async (req, res) => {
  try {
    let trainees = await Trainee.find();
    res.send({ trainees });
  } catch (error) {
    res.send({ error: error.message });
  }
};
