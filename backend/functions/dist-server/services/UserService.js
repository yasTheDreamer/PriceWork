"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserService = function UserService() {
  _classCallCheck(this, UserService);

  if ((this instanceof UserService ? this.constructor : void 0) === UserService) throw new TypeError("Cannot instantiate UserService Interface");
  if (!this.saveUser) throw new Error("Have to implement the saveUser method");
  if (!this.getAllData) throw new Error("Have to implement the getAllData method");
  if (!this.recordExists) throw new Error("Have to implement the recordExists method");
  if (!this.updateRecord) throw new Error("Have to implement the updateRecord method");
};

var _default = UserService;
exports["default"] = _default;