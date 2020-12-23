import UserRepository from "./UserRepository";
import User from "../db/UserSchema";

class UserRepositoryImpl extends UserRepository {
  constructor() {
    super();
  }

  update(user) {
    const userToUpdate = new User(user);
    console.log(userToUpdate);
    if (userToUpdate) {
      userToUpdate.save((err, res) => {
        if (err) console.log("error is : " + err);
        else console.log(res);
      });
    }
  }
}

export default UserRepositoryImpl;
