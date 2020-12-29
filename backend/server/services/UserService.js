class UserService {
  constructor() {
    if (new.target === UserService)
      throw new TypeError("Cannot instantiate UserService Interface");

    if (!this.saveUser)
      throw new Error("Have to implement the saveUser method");

    if (!this.getAllData)
      throw new Error("Have to implement the getAllData method");

    if (!this.recordExists)
      throw new Error("Have to implement the recordExists method");
    if (!this.updateRecord)
      throw new Error("Have to implement the updateRecord method");
    if (!this.getRecord)
      throw new Error("Have to implement the getRecord method");
  }
}

export default UserService;
