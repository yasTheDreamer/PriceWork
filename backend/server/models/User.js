import mongoose from "mongoose";

class User {
  constructor() {
    this.User = {};
    this.User._id = new mongoose.Types.ObjectId();
    this.User.timeStamp = `${new Date().today()}@${new Date().timeNow()}`;
  }

  withId(id) {
    this.User._id = id;
    return this;
  }

  withSalary(salary) {
    this.User.salary = salary;
    return this;
  }

  withJobTitle(jobTitle) {
    this.User.jobTitle = jobTitle;
    return this;
  }

  withZipCode(zipCode) {
    this.User.zipCode = zipCode;
    return this;
  }

  withYearsOfExperience(experience) {
    this.User.experience = experience;
    return this;
  }

  withEmailAdress(email) {
    this.User.email = email;
    return this;
  }

  withSocialInfo1Login(socialLogin1) {
    this.User.socialLogin1 = socialLogin1;
    return this;
  }

  withSocialInfo2Login(socialLogin2) {
    this.User.socialLogin2 = socialLogin2;
    return this;
  }

  build() {
    return this.User;
  }
}

Date.prototype.today = function () {
  return (
    (this.getDate() < 10 ? "0" : "") +
    this.getDate() +
    "/" +
    (this.getMonth() + 1 < 10 ? "0" : "") +
    (this.getMonth() + 1) +
    "/" +
    this.getFullYear()
  );
};

// For the time now
Date.prototype.timeNow = function () {
  return (
    (this.getHours() < 10 ? "0" : "") +
    this.getHours() +
    ":" +
    (this.getMinutes() < 10 ? "0" : "") +
    this.getMinutes() +
    ":" +
    (this.getSeconds() < 10 ? "0" : "") +
    this.getSeconds()
  );
};

export default User;
