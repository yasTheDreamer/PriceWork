"use strict";

var _express = _interopRequireDefault(require("express"));

var _UserServiceImpl = _interopRequireDefault(require("../services/UserServiceImpl"));

var _utilFunctions = require("../utils/utilFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//testing the firebase database insert
var router = _express["default"].Router();
/* GET home page. */


router.get("/findAll", function (req, res, next) {
  var userService = new _UserServiceImpl["default"]();
  userService.getAllData(res);
});
router.post("/save", function (req, res, next) {
  var service = new _UserServiceImpl["default"]();
  console.log(req.session);
  var user = (0, _utilFunctions.constructUser)(req);

  if (req.session && req.session.token && service.recordExists(req.session.token)) {
    var key = service.updateRecord(req.session.token, user);
    if (key) res.status(200).send("data updated");else res.status(500).send("documents key is not defined" + key);
  } else if (req.session && !req.session.token && user.salary) {
    var _key = service.saveUser(user);

    (0, _utilFunctions.updateSessionToken)(_key, req, res);
  } else {
    res.status(500).send("data could not be saved");
  }
});
module.exports = router;