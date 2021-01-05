class User {
  constructor(user) {
    if (!arguments.length) {
      this.User = {};
      this.User.salary = null;
      this.User.jobTitle = null;
      this.User.address = {};
      this.User.address.city = null;
      this.User.address.state = null;
      this.User.address.zipCode = null;
      this.User.experience = null;
      this.User.email = null;
      this.User.socialLogin1 = null;
      this.User.socialLogin2 = null;
      this.User.timeStamp = `${new Date().today()}@${new Date().timeNow()}`;
    } else if (user) {
      this.User = {};
      this.User.address = {};
      this.User.address.city = user.address.city || null;
      this.User.address.state = user.address.state || null;
      this.User.address.zipCode = user.address.zipCode || null;
    }
  }

  withSalary(salary) {
    this.User.salary = salary;
    return this;
  }

  withJobTitle(jobTitle) {
    this.User.jobTitle = jobTitle;
    return this;
  }

  withCity(city) {
    this.User.address.city = city;
    return this;
  }

  withState(state) {
    this.User.address.state = state;
    return this;
  }

  withZipCode(zipCode) {
    this.User.address.zipCode = zipCode;
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
