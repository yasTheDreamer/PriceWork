import User from "../models/User";

export const filterData = (data) => {
  let filteredData = {};

  filteredData.min = getMin(data);
  filteredData.max = getMax(data);
  filteredData.averageSalary = averageSalary(data);
  filteredData.total = Object.values(data).length;
  console.log(filteredData);

  return filteredData;
};

export const getMin = (data) => {
  let records = Object.values(data);
  let salaries = [];
  let min;

  records.forEach((record) => {
    if (record.salary) {
      salaries.push(record.salary);
    }
  });

  if (salaries[0]) min = salaries[0];

  salaries.forEach((salary) => {
    if (salary < min) {
      min = salary;
    }
  });

  return min;
};

export const getMax = (data) => {
  let records = Object.values(data);
  let salaries = [];
  let max;

  records.forEach((record) => {
    if (record.salary) {
      salaries.push(record.salary);
    }
  });

  if (salaries[0]) max = salaries[0];

  salaries.forEach((salary) => {
    if (salary > max) {
      max = salary;
    }
  });

  return max;
};

const getSum = (total, num) => {
  return total + Math.round(num);
};

export const averageSalary = (data) => {
  let array = Object.values(data);
  let salaries = [];

  array.forEach((arr) => {
    if (arr.salary) salaries.push(arr.salary);
  });

  console.log(array);

  let sum = salaries.reduce(getSum, 0);

  console.log("sum : ", sum);
  console.log("length : ", array.length);

  return sum / salaries.length;
};

export const constructUser = (req, us = null) => {
  let user = null;

  if (us) user = new User(us);
  else user = new User();

  if (req.body.salary) user.withSalary(req.body.salary);
  if (req.body.jobTitle) user.withJobTitle(req.body.jobTitle);
  if (req.body.experience) user.withYearsOfExperience(req.body.experience);
  if (req.body.email) user.withEmailAdress(req.body.email);
  if (req.body.socialLogin1) user.withSocialInfo1Login(req.body.socialLogin1);
  if (req.body.socialLogin2) user.withSocialInfo1Login(req.body.socialLogin2);
  if (req.body.address.country) user.withCountry(req.body.address.country);
  if (req.body.address.state) user.withState(req.body.address.state);
  if (req.body.address.zipCode) user.withZipCode(req.body.address.zipCode);

  return user.build();
};

export const updateSessionToken = (key, req, res) => {
  if (key) {
    req.session.token = key;
    res.status(200).send("data saved");
  }
};
