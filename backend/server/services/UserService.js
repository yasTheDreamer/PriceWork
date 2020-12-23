class UserService {
  constructor() {
    if (new.target === UserService)
      throw new TypeError("Cannot instantiate UserService Interface");

    if (!this.saveUser)
      throw new Error("Have to implement the saveUser method");
    // if (!this.deleteUser)
    //   throw new Error("Have to implement the deleteUser method");
    // if (!this.findAllUsers)
    //   throw new Error("Have to implement the findAllUsers method");
  }
}

export default UserService;
