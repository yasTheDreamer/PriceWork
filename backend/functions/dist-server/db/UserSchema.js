"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.updateRecord = exports.getRecordFromDB = exports.recordExists = exports.readData = exports.writeUserData = void 0;var _dbConnection = _interopRequireDefault(require("./dbConnection"));
var _utilFunctions = require("../utils/utilFunctions");function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var usersRef = _dbConnection["default"].database().ref("users");

var writeUserData = function writeUserData(user) {
  var userId = usersRef.push({
    salary: user.salary,
    jobTitle: user.jobTitle,
    address: {
      city: user.address.city,
      state: user.address.state,
      zipCode: user.address.zipCode },

    experience: user.experience,
    email: user.email,
    timeStamp: user.timeStamp,
    socialLogin1: user.socialLogin1,
    socialLogin2: user.socialLogin2 });


  return userId;
};exports.writeUserData = writeUserData;

var readData = function readData(res, factors) {
  usersRef.once(
  "value",
  function (snapshot) {
    res.status(200).json({ summary: (0, _utilFunctions.filterData)(snapshot.val(), factors) });
  },
  function (err) {
    throw new Error(err);
  });

};exports.readData = readData;

var recordExists = function recordExists(key) {
  if (usersRef.child(key)) return true;

  return false;
};exports.recordExists = recordExists;

var getRecordFromDB = function getRecordFromDB(key) {
  var docRef = null;

  docRef = _dbConnection["default"].database().ref("users/".concat(key));

  return docRef.once(
  "value",
  function (snapshot) {
    return snapshot.val();
  },
  function (err) {
    throw new Error(err);
  });

};exports.getRecordFromDB = getRecordFromDB;

var updateRecord = function updateRecord(key, data) {
  var updatedRecord;
  if (key && recordExists(key)) {
    console.log("here");
    var recordRef = usersRef.child(key);
    updatedRecord = recordRef.update(data, function () {
      return key;
    });
  } else {
    throw new Error("key is not defined or record doesnt exist");
  }

  return updatedRecord;
};exports.updateRecord = updateRecord;
//# sourceMappingURL=UserSchema.js.map