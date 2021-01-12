import User from "../models/User";

export const filterData = (data, factors) => {
  let filteredData = {};
  let parsedFactors = JSON.parse(factors);
  let result = [];

  if (isOnlySalary(parsedFactors)) {
    result = Object.values(data);
  } else {
    result = filterResults(data, parsedFactors);
  }

  let salaries = [];

  result.forEach((r) => {
    if (r.salary) salaries.push(r.salary);
  });

  filteredData.min = getMin(salaries);
  filteredData.max = getMax(salaries);
  filteredData.averageSalary = averageSalary(salaries);

  filteredData.total = numberOfResults(result, data, parsedFactors);

  return filteredData;
};

export const getMin = (salaries) => {
  let min = Math.min(...salaries);
  return min;
};

export const getMax = (salaries) => {
  let max = Math.max(...salaries);
  return max;
};

const getSum = (total, num) => {
  return total + Math.round(num);
};

export const averageSalary = (salaries) => {
  let sum;

  sum = salaries.reduce(getSum, 0);

  return sum / salaries.length;
};

export const constructUser = (req, us) => {
  let user = null;

  if (us) user = new User(us);
  else user = new User();

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
};

export const updateSessionToken = (key, req, res) => {
  if (key) {
    req.session.token = key;
    res.status(200).send("data saved");
  } else {
    res.status(500).send("data could not be saved");
  }
};

export const setListing = (snapshot) => {
  let currentSnapshot;
  currentSnapshot = snapshot.val();

  return currentSnapshot;
};

/***
 * this function checks that for every
 *
 */

const satisfiesFactors = (d, factors) => {
  let b = false;

  Object.keys(factors).every((f) => {
    if (f == "salary" || f == "timeStamp") {
      return true;
    } else if (f == "address") {
      return Object.keys(factors[f]).every((element) => {
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
      b = false;
      return false;
    }
  });

  return b;
};

const numberOfResults = (result, data, factors) => {
  let b = false;

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
  let b = false;
  Object.keys(factors).every((f) => {
    if (f != "timeStamp") {
      if (f == "salary") {
        b = true;
        return true;
      } else if (f != "address" && factors[f]) {
        b = false;
        return false;
      } else if (f == "address") {
        Object.keys(factors[f]).every((element) => {
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
  let result = [];
  result = Object.values(data).filter((d) => satisfiesFactors(d, factors));
  return result;
}
