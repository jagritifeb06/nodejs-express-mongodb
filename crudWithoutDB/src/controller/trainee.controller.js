var Trainee = require("../model/trainee.model");
module.exports.getTrainee = (req, res) => {
  let Trainees = Trainee.map((trainee) => trainee);
  res.send(Trainees);
};
module.exports.createTrainee = (req, res) => {
  let { name, degree } = req.body;
  Trainee = [...Trainee, { name, degree }];
  res.send("Trainee is added");
};

module.exports.deleteTrainee = (req, res) => {
  let { name } = req.params;
  let restTrainee = Trainee.filter((trainee) => trainee.name !== name);
  Trainee = restTrainee;
  res.send("Trainee is deleted");
};

module.exports.updateTrainee = (req, res) => {
  let { name } = req.params;
  let { degree } = req.body;
  let restTrainee = Trainee.filter((trainee) => trainee.name !== name);
  let newTrainee = { name, degree };
  Trainee = [...restTrainee, newTrainee];
  res.send("Trainee is updated");
};
