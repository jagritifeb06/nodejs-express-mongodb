const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const db = require("./src/config/dbConfig");
const TraineeRoutes = require("./src/route/trainee.route");
const { restart } = require("nodemon");
// const UserRoutes = require("./src/route/user.route");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/", TraineeRoutes);
// app.use("/user", UserRoutes);
app.use(TraineeRoutes);
app.set("view engine", "ejs");
app.set("views", "./src/view");
db.MongoConnect();
app.use((err, req, res, next) => {
  console.log("Error Handler response" + JSON.stringify(err));
  handleError(err, restart);
});
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
