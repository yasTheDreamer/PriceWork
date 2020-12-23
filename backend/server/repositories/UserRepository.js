class UserRepository {
  constructor() {
    if (new.target === UserRepository)
      throw new TypeError("Cannot instantiate interface UserRepository");

    if (this.update === undefined)
      throw new Error("Have to implement update method");
    // if (this.delete === undefined)
    //   throw new Error("Have to implement delete method");
    // if (this.findAll === undefined)
    //   throw new Error("Have to implement findAll method");
  }
}

export default UserRepository;
