"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function UserService() {
  _classCallCheck(this, UserService);

  if ((this instanceof UserService ? this.constructor : void 0) === UserService) throw new TypeError("Cannot instantiate UserService Interface");
  if (!this.saveUser) throw new Error("Have to implement the saveUser method"); // if (!this.deleteUser)
  //   throw new Error("Have to implement the deleteUser method");
  // if (!this.findAllUsers)
  //   throw new Error("Have to implement the findAllUsers method");
};

var _default = UserService;
exports["default"] = _default;