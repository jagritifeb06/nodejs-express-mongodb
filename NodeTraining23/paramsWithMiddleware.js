var express=require('express');
var app = express();
const port=5000

const paramId = (req, res, next) => {
  console.log("Param middleware is called");
  next();
};
app.param("id", paramId);
//localhost:5000/user/123
app.get("/user/:id?", (req, res) => {
  console.log("Param middleware is called", req.params);
  console.log("Param middleware is called", req.query);
  res.send("Param Middleware is testing");
});
//localhost:5000/user/123?name=ami&tech=nodejs
app.get("/username/:name", (req, res) => {
  res.send("Param middleware is not called");
});
//localhost:5000/user
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
