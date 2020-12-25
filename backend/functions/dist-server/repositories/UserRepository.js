"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserRepository = function UserRepository() {
  _classCallCheck(this, UserRepository);

  if ((this instanceof UserRepository ? this.constructor : void 0) === UserRepository) throw new TypeError("Cannot instantiate interface UserRepository");
  if (this.update === undefined) throw new Error("Have to implement update method"); // if (this.delete === undefined)
  //   throw new Error("Have to implement delete method");
  // if (this.findAll === undefined)
  //   throw new Error("Have to implement findAll method");
};

var _default = UserRepository;
exports["default"] = _default;