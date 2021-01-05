"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.setListing = exports.updateSessionToken = exports.constructUser = exports.averageSalary = exports.getMax = exports.getMin = exports.filterData = void 0;var _User = _interopRequireDefault(require("../models/User"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

var filterData = function filterData(data) {
  var filteredData = {};

  filteredData.min = getMin(data);
  filteredData.max = getMax(data);
  filteredData.averageSalary = averageSalary(data);
  filteredData.total = Object.values(data).length;
  console.log(filteredData);

  return filteredData;
};exports.filterData = filterData;

var getMin = function getMin(data) {
  var records = Object.values(data);
  var salaries = [];
  var min;

  records.forEach(function (record) {
    if (record.salary) {
      salaries.push(record.salary);
    }
  });

  if (salaries[0]) min = salaries[0];

  salaries.forEach(function (salary) {
    if (salary < min) {
      min = salary;
    }
  });

  return min;
};exports.getMin = getMin;

var getMax = function getMax(data) {
  var records = Object.values(data);
  var salaries = [];
  var max;

  records.forEach(function (record) {
    if (record.salary) {
      salaries.push(record.salary);
    }
  });

  if (salaries[0]) max = salaries[0];

  salaries.forEach(function (salary) {
    if (salary > max) {
      max = salary;
    }
  });

  return max;
};exports.getMax = getMax;

var getSum = function getSum(total, num) {
  return total + Math.round(num);
};

var averageSalary = function averageSalary(data) {
  var array = Object.values(data);
  var salaries = [];

  array.forEach(function (arr) {
    if (arr.salary) salaries.push(arr.salary);
  });

  console.log(array);

  var sum = salaries.reduce(getSum, 0);

  console.log("sum : ", sum);
  console.log("length : ", salaries.length);

  return sum / salaries.length;
};exports.averageSalary = averageSalary;

var constructUser = function constructUser(req, us) {
  var user = null;

  if (us) user = new _User["default"](us);else
  user = new _User["default"]();

  if (req.body.salary && !user.User.salary) user.withSalary(req.body.salary);
  if (req.body.jobTitle && !user.User.jobTitle)
  user.withJobTitle(req.body.jobTitle);
  if (req.body.experience && !user.User.experience)
  user.withYearsOfExperience(req.body.experience);
  if (req.body.email && !user.User.email) user.withEmailAdress(req.body.email);
  if (req.body.socialLogin1 && !user.User.socialLogin1)
  user.withSocialInfo1Login(req.body.socialLogin1);
  if (req.body.socialLogin2 && !user.User.socialLogin2)
  user.withSocialInfo1Login(req.body.socialLogin2);
  if (req.body.address.city && user.User.address && !user.User.address.city)
  user.withCity(req.body.address.city);
  if (req.body.address.state && user.User.address && !user.User.address.state)
  user.withState(req.body.address.state);
  if (
  req.body.address.zipCode &&
  user.User.address &&
  !user.User.address.zipCode)

  user.withZipCode(req.body.address.zipCode);

  return user.build();
};exports.constructUser = constructUser;

var updateSessionToken = function updateSessionToken(key, req, res) {
  if (key) {
    req.session.token = key;
    res.status(200).send("data saved");
  } else {
    res.status(500).send("data could not be saved");
  }
};exports.updateSessionToken = updateSessionToken;

var setListing = function setListing(snapshot) {
  var currentSnapshot;

  currentSnapshot = snapshot.val();

  return currentSnapshot;
};exports.setListing = setListing;
//# sourceMappingURL=utilFunctions.js.map