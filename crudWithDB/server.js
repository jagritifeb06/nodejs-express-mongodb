const express = require("express");
const port = 5000;
const app = express();
const db = require("./src/config/dbConfig");
const TraineeRoutes= require('./src/route/trainee.route');
app.use('/trainee',TraineeRoutes)
db.MongoConnect();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
