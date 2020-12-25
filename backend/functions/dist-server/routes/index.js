"use strict";

var _express = _interopRequireDefault(require("express"));

var _UserServiceImpl = _interopRequireDefault(require("../services/UserServiceImpl"));

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//testing the firebase database insert
var router = _express["default"].Router();
/* GET home page. */


router.get("/test", function (req, res, next) {
  var user = new _User["default"]().withSalary(2000).withJobTitle("Project Manager").withCountry("USA").withZipCode(9000).withState("CA").build();
  var service = new _UserServiceImpl["default"]();
  service.saveUser(user);
  console.log("on home page");
  console.log(req.sessionID);
  res.send("done");
});
router.post("/", function (req, res, next) {
  var user = new _User["default"]().withJobTitle("Full Stack Developer").withSalary(3000).build();
  var service = new _UserServiceImpl["default"]();
  service.saveUser(user);
});
module.exports = router;