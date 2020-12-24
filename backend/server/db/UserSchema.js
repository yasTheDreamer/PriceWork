import firebase from "./dbConnection";

const usersRef = firebase.database().ref("users");

export const writeUserData = (user) => {
  const userId = usersRef.push({
    salary: user.salary,
    jobTitle: user.jobTitle,
    address: {
      country: user.address.country,
      state: user.address.state,
      zipCode: user.address.zipCode,
    },
    experience: user.experience,
    email: user.email,
    timeStamp: user.timeStamp,
    socialLogin1: user.socialLogin1,
    socialLogin2: user.socialLogin2,
  });
  return userId;
};
