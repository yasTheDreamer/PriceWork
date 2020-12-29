"use strict";

var _express = _interopRequireDefault(require("express"));

var _UserServiceImpl = _interopRequireDefault(require("../services/UserServiceImpl"));

var _utilFunctions = require("../utils/utilFunctions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
    var record = service.getRecord(req.session.token);

    var rec = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                r = record;
                return _context.abrupt("return", r);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function rec() {
        return _ref.apply(this, arguments);
      };
    }();

    res.status(200).send("record is " + rec()); // let key = service.updateRecord(req.session.token, user);
    // if (key) res.status(200).send("data updated");
    // else res.status(500).send("documents key is not defined" + key);
  } else if (req.session && !req.session.token && user.salary) {
    var key = service.saveUser(user);
    (0, _utilFunctions.updateSessionToken)(key, req, res);
  } else {
    res.status(500).send("data could not be saved");
  }
});
module.exports = router;