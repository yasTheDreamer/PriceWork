"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _dbConnection = _interopRequireDefault(require("../db/dbConnection"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var io = require("socket.io")();

/**
 * delete  uuid on disconnection
 */

io.on("connection", function (socket) {
  console.log("connected");
  socket.on("disconnect", function () {
    _dbConnection["default"].
    auth().
    deleteUser(app.uuid).
    then(console.log("user ".concat(app.uuid, " deleted")));
  });
});var _default =

io;exports["default"] = _default;
//# sourceMappingURL=socketApi.js.map