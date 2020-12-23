import express from "express";
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log("on home page");
});

router.post("/", (req, res, next) => {
  // let user = new User()
  //   .withJobTitle("Full Stack Developer")
  //   .withSalary(3000)
  //   .build();
  // let service = new UserServiceImpl();
  // service.saveUser(user);
});

module.exports = router;
