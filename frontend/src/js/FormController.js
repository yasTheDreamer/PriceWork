import User from "../models/User";

export const formController = (user) => {
  const input = document.querySelector("#factor");

  switch (input.name) {
    case "Salary":
      user.withSalary(input.value);
      break;
    case "Job":
      user.withJobTitle(input.value);
      break;
    case "Country":
      user.withCountry(input.value);
      break;
  }

  return user.build();
};
