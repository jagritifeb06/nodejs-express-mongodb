const express = require("express");
const port = 5000;
const app = express();
const TraineeRoutes = require("./src/routes/trainee.route");
app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

app.use("/", TraineeRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
