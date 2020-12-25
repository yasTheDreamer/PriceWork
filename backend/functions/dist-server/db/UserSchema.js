"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeUserData = void 0;

var _dbConnection = _interopRequireDefault(require("./dbConnection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var usersRef = _dbConnection["default"].database().ref("users");

console.log(usersRef);

var writeUserData = function writeUserData(user) {
  var userId = usersRef.push({
    salary: user.salary,
    jobTitle: user.jobTitle,
    address: {
      country: user.address.country,
      state: user.address.state,
      zipCode: user.address.zipCode
    },
    experience: user.experience,
    email: user.email,
    timeStamp: user.timeStamp,
    socialLogin1: user.socialLogin1,
    socialLogin2: user.socialLogin2
  });
  return userId;
};

exports.writeUserData = writeUserData;