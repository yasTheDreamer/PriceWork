import admin from "./dbConnection";
import { filterData } from "../utils/utilFunctions";

const usersRef = admin.database().ref("users");

export const writeUserData = (user) => {
  const userId = usersRef.push({
    salary: user.salary,
    jobTitle: user.jobTitle,
    address: {
      city: user.address.city,
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

export const readData = (res) => {
  usersRef.once(
    "value",
    (snapshot) => {
      res.status(200).json({ summary: filterData(snapshot.val()) });
    },
    (err) => {
      throw new Error(err);
    }
  );
};

export const recordExists = (key) => {
  if (usersRef.child(key)) return true;

  return false;
};

export const getRecordFromDB = (key) => {
  let docRef = null;

  docRef = admin.database().ref(`users/${key}`);

  return docRef.once(
    "value",
    (snapshot) => {
      return snapshot.val();
    },
    (err) => {
      throw new Error(err);
    }
  );
};

export const updateRecord = (key, data) => {
  let updatedRecord;
  if (key && recordExists(key)) {
    console.log("here");
    let recordRef = usersRef.child(key);
    updatedRecord = recordRef.update(data, () => {
      return key;
    });
  } else {
    throw new Error("key is not defined or record doesnt exist");
  }

  return updatedRecord;
};
