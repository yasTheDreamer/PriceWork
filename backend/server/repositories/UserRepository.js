class UserRepository {
  constructor() {
    if (new.target === UserRepository)
      throw new TypeError("Cannot instantiate interface UserRepository");

    if (this.update === undefined)
      throw new Error("Have to implement update method");
    if (this.findAll === undefined)
      throw new Error("Have to implement findAll method");
    if (this.exists === undefined)
      throw new Error("Have to implement exists method");
    if (this.updateRecord === undefined)
      throw new Error("Have to implement updateRecord method");
    if (this.getRecord === undefined)
      throw new Error("Have to implement getRecord method");
  }
}

export default UserRepository;
