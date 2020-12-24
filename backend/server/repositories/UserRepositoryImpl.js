import UserRepository from "./UserRepository";
import { writeUserData } from "../db/UserSchema";

class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
  }

  update(user) {
    const userToUpdate = writeUserData(user);
    console.log(userToUpdate.key);
  }
}

export default UserRepositoryImpl;
