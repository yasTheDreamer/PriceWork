import UserRepository from "./UserRepository";
import {
  writeUserData,
  readData,
  recordExists,
  updateRecord,
} from "../db/UserSchema";

class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
  }

  update(user) {
    const userToUpdate = writeUserData(user);
    return userToUpdate.key;
  }

  findAll(res) {
    readData(res);
  }

  exists(key) {
    return recordExists(key);
  }

  updateRecord(key, data) {
    const updatedRecord = updateRecord(key, data);

    return updatedRecord;
  }
}

export default UserRepositoryImpl;
