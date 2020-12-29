import UserRepositoryImpl from "../repositories/UserRepositoryImpl";
import UserService from "./UserService";

class UserServiceImpl extends UserService {
  constructor() {
    super();
  }

  saveUser(user) {
    //business logic
    if (user && typeof user === "object") {
      try {
        const UserRepository = new UserRepositoryImpl();
        return UserRepository.update(user);
      } catch (err) {
        console.log("user may be undefined or not well structured" + err);
      }
    }
  }

  getAllData(res) {
    try {
      const UserRepository = new UserRepositoryImpl();
      UserRepository.findAll(res);
    } catch (err) {
      console.log("cannot fetch data from the database" + err);
    }
  }

  recordExists(key) {
    try {
      const UserRepository = new UserRepositoryImpl();
      return UserRepository.exists(key);
    } catch (err) {
      console.log("error checking if the record exist" + err);
    }
  }

  updateRecord(key, data) {
    try {
      const UserRepository = new UserRepositoryImpl();
      return UserRepository.updateRecord(key, data);
    } catch (err) {
      console.log("couldn't update record" + err);
    }
  }

  getRecord(key) {
    try {
      const UserRepository = new UserRepositoryImpl();
      return UserRepository.getRecord(key);
    } catch (err) {
      console.log("error getting the record" + err);
    }
  }
}

export default UserServiceImpl;
