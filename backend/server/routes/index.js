import express from "express";
//testing the firebase database insert
import UserServiceImpl from "../services/UserServiceImpl";
import User from "../models/User";

var router = express.Router();

/* GET home page. */
router.get("/test", (req, res, next) => {
  let user = new User()
    .withSalary(2000)
    .withJobTitle("Project Manager")
    .withCountry("USA")
    .withZipCode(9000)
    .withState("CA")
    .build();

  let service = new UserServiceImpl();
  service.saveUser(user);

  console.log("on home page");
  console.log(req.sessionID);
  res.send("done");
});

router.post("/", (req, res, next) => {
  let user = new User()
    .withJobTitle("Full Stack Developer")
    .withSalary(3000)
    .build();
  let service = new UserServiceImpl();
  service.saveUser(user);
});

module.exports = router;
