"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function UserRepository() {
  _classCallCheck(this, UserRepository);

  if ((this instanceof UserRepository ? this.constructor : void 0) === UserRepository) throw new TypeError("Cannot instantiate interface UserRepository");
  if (this.update === undefined) throw new Error("Have to implement update method");
  if (this.findAll === undefined) throw new Error("Have to implement findAll method");
  if (this.exists === undefined) throw new Error("Have to implement exists method");
  if (this.updateRecord === undefined) throw new Error("Have to implement updateRecord method");
  if (this.getRecord === undefined) throw new Error("Have to implement getRecord method");
};

var _default = UserRepository;
exports["default"] = _default;