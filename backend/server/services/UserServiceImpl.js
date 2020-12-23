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
        UserRepository.update(user);
      } catch (err) {
        console.log("user may be undefined or not well structured" + err);
      }
    }
  }
}

export default UserServiceImpl;
