"use strict";var _express = _interopRequireDefault(require("express"));

var _UserServiceImpl = _interopRequireDefault(require("../services/UserServiceImpl"));
var _utilFunctions = require("../utils/utilFunctions");




var _dbConnection = _interopRequireDefault(require("../db/dbConnection"));

require("firebase/auth");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };} //testing the firebase database insert

var router = _express["default"].Router();

/* GET home page. */

router.get("/", function (req, res, next) {
  if (req.headers.origin == process.env.DEV_ORIGIN_DOMAIN) {
    var uuid = req.query.uuid;

    if (uuid) {
      _dbConnection["default"].
      auth().
      createCustomToken("".concat(uuid)).
      then(function (customToken) {
        res.status(200).json({ token: customToken });
      });
    } else {
      res.status(500).send("uuid is not defined");
    }
  } else {
    res.status(401).send("unauthorised to access");
  }
});

router.get("/findAll", function (req, res, next) {
  var userService = new _UserServiceImpl["default"]();
  if (req.query.factors) {
    var factors = req.query.factors;
    userService.getAllData(res, factors);
  } else {
    res.status(400).send("factors are not defined");
  }
});

router.post("/save", function (req, res, next) {
  var service = new _UserServiceImpl["default"]();

  var user = (0, _utilFunctions.constructUser)(req);

  if (
  req.session &&
  req.session.token &&
  service.recordExists(req.session.token))
  {
    var record = service.getRecord(req.session.token);
    record.then(function (r) {
      var rec = JSON.stringify((0, _utilFunctions.setListing)(r));
      if (rec) {
        rec = JSON.parse(rec);
        if (!rec.address) {
          rec.address = {};
        }
        JSON.stringify(rec);
        user = (0, _utilFunctions.constructUser)(req, rec);
        var key = service.updateRecord(req.session.token, user);
        if (key) res.status(200).send("data updated");else
        res.status(500).send("error updating the document " + key);
      }
    });
  } else if (req.session && !req.session.token && user.salary) {
    var key = service.saveUser(user);
    (0, _utilFunctions.updateSessionToken)(key, req, res);
  } else {
    res.status(500).send("data could not be saved");
  }
});

module.exports = router;
//# sourceMappingURL=index.js.map