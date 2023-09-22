var Trainee = require("../model/trainee.model");

module.exports.getTrainees = async (req, res) => {
  try {
    let trainees = await Trainee.find();
    res.send({ trainees });
  } catch (error) {
    res.send({ error: error.message });
  }
};
module.exports.createTrainees = async (req, res) => {
  try {
    let { name, degree } = req.body;
    let trainees = new Trainee({ name, degree });
    await trainees.save();
    res.send({ success: true, trainees });
  } catch (error) {
    res.send({ error: error.message });
  }
};
module.exports.updateTrainees = async (req, res) => {
  try {
    let trainees = await Trainee.find({ _id: req.params.id });
    if (!trainees) {
      res.send(`Trainees record not found`);
    }
    let { name, degree } = req.body;
    await Trainee.updateOne({ _id: req.params.id }, { name, degree });
    res.send(`Trainees record is updated`);
  } catch (error) {
    res.send({ error: error.message });
  }
};
module.exports.deleteTrainees = async (req, res) => {
  try {
    let trainees = await Trainee.find({ _id: req.params.id });
    if (!trainees) {
      res.send(`Trainees record not found`);
    }
    await Trainee.deleteOne({ _id: req.params.id });
    res.send(`Trainees record is deleted`);
  } catch (error) {
    res.send({ error: error.message });
  }
};
