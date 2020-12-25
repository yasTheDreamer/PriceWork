"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User = /*#__PURE__*/function () {
  function User() {
    _classCallCheck(this, User);

    this.User = {};
    this.User.salary = null;
    this.User.jobTitle = null;
    this.User.address = {};
    this.User.address.country = null;
    this.User.address.state = null;
    this.User.address.zipCode = null;
    this.User.experience = null;
    this.User.email = null;
    this.User.socialLogin1 = null;
    this.User.socialLogin2 = null;
    this.User.timeStamp = "".concat(new Date().today(), "@").concat(new Date().timeNow());
  }

  _createClass(User, [{
    key: "withSalary",
    value: function withSalary(salary) {
      this.User.salary = salary;
      return this;
    }
  }, {
    key: "withJobTitle",
    value: function withJobTitle(jobTitle) {
      this.User.jobTitle = jobTitle;
      return this;
    }
  }, {
    key: "withCountry",
    value: function withCountry(country) {
      this.User.address.country = country;
      return this;
    }
  }, {
    key: "withState",
    value: function withState(state) {
      this.User.address.state = state;
      return this;
    }
  }, {
    key: "withZipCode",
    value: function withZipCode(zipCode) {
      this.User.address.zipCode = zipCode;
      return this;
    }
  }, {
    key: "withYearsOfExperience",
    value: function withYearsOfExperience(experience) {
      this.User.experience = experience;
      return this;
    }
  }, {
    key: "withEmailAdress",
    value: function withEmailAdress(email) {
      this.User.email = email;
      return this;
    }
  }, {
    key: "withSocialInfo1Login",
    value: function withSocialInfo1Login(socialLogin1) {
      this.User.socialLogin1 = socialLogin1;
      return this;
    }
  }, {
    key: "withSocialInfo2Login",
    value: function withSocialInfo2Login(socialLogin2) {
      this.User.socialLogin2 = socialLogin2;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      return this.User;
    }
  }]);

  return User;
}();

Date.prototype.today = function () {
  return (this.getDate() < 10 ? "0" : "") + this.getDate() + "/" + (this.getMonth() + 1 < 10 ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
}; // For the time now


Date.prototype.timeNow = function () {
  return (this.getHours() < 10 ? "0" : "") + this.getHours() + ":" + (this.getMinutes() < 10 ? "0" : "") + this.getMinutes() + ":" + (this.getSeconds() < 10 ? "0" : "") + this.getSeconds();
};

var _default = User;
exports["default"] = _default;