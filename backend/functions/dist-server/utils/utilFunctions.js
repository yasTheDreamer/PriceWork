"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.setListing = exports.updateSessionToken = exports.constructUser = exports.averageSalary = exports.getMax = exports.getMin = exports.filterData = void 0;var _User = _interopRequireDefault(require("../models/User"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var filterData = function filterData(data, factors) {
  var filteredData = {};
  var parsedFactors = JSON.parse(factors);
  var result = [];

  if (isOnlySalary(parsedFactors)) {
    result = Object.values(data);
  } else {
    result = filterResults(data, parsedFactors);
  }

  var salaries = [];

  result.forEach(function (r) {
    if (r.salary) salaries.push(r.salary);
  });

  filteredData.min = getMin(salaries);
  filteredData.max = getMax(salaries);
  filteredData.averageSalary = averageSalary(salaries);

  filteredData.total = numberOfResults(result, data, parsedFactors);

  return filteredData;
};exports.filterData = filterData;

var getMin = function getMin(salaries) {
  var min = Math.min.apply(Math, _toConsumableArray(salaries));
  return min;
};exports.getMin = getMin;

var getMax = function getMax(salaries) {
  var max = Math.max.apply(Math, _toConsumableArray(salaries));
  return max;
};exports.getMax = getMax;

var getSum = function getSum(total, num) {
  return total + Math.round(num);
};

var averageSalary = function averageSalary(salaries) {
  var sum;

  sum = salaries.reduce(getSum, 0);

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
  if (req.body.address.city && user.User.address)
  user.withCity(req.body.address.city);
  if (req.body.address.state && user.User.address)
  user.withState(req.body.address.state);
  if (req.body.address.zipCode && user.User.address)
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
};

/***
 * this function checks that for every
 *
 */exports.setListing = setListing;

var satisfiesFactors = function satisfiesFactors(d, factors) {
  var b = false;

  Object.keys(factors).every(function (f) {
    if (f == "salary" || f == "timeStamp") {
      return true;
    } else if (f == "address") {
      return Object.keys(factors[f]).every(function (element) {
        if (factors[f][element] && d[f] && d[f][element]) {
          if (factors[f][element] == d[f][element]) {
            b = true;
            return true;
          } else {
            b = false;
            return false;
          }
        } else if (factors[f][element]) {
          b = false;
          return true;
        }
      });
    } else if (d[f] && d[f] == factors[f]) {
      b = true;
      return true;
    } else {
      return false;
    }
  });

  return b;
};

var numberOfResults = function numberOfResults(result, data, factors) {
  var b = false;

  /**
   * if salary is the only factor entered by the user
   * then retrun the total of documents in the database
   */

  if (isOnlySalary(factors)) {
    return Object.values(data).length;
  }

  return result.length;
};

function isOnlySalary(factors) {
  var b = false;
  Object.keys(factors).every(function (f) {
    if (f != "timeStamp") {
      if (f == "salary") {
        b = true;
        return true;
      } else if (f != "address" && factors[f]) {
        b = false;
        return false;
      } else if (f == "address") {
        Object.keys(factors[f]).every(function (element) {
          if (factors[f][element]) {
            b = false;
            return false;
          }
        });
      }
    }
  });
  return b;
}

function filterResults(data, factors) {
  var result = [];
  result = Object.values(data).filter(function (d) {return satisfiesFactors(d, factors);});
  return result;
}
//# sourceMappingURL=utilFunctions.js.map