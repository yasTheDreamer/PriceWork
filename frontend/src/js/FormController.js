export const formController = (user) => {
  const input = document.querySelector("#factor");

  switch (input.name) {
    case "Salary":
      user.withSalary(input.value);
      break;
    case "Job":
      user.withJobTitle(input.value);
      break;
    case "State":
      user.withState(input.value);
      break;
    case "City":
      user.withCity(input.value);
      break;
    case "ZipCode":
      user.withZipCode(input.value);
      break;
  }

  return user.build();
};

export const formControlWithoutBuild = (user) => {
  const input = document.querySelector("#factor");

  switch (input.name) {
    case "Salary":
      user.withSalary(input.value);
      break;
    case "Job":
      user.withJobTitle(input.value);
      break;
    case "State":
      user.withState(input.value);
      break;
    case "City":
      user.withCity(input.value);
      break;
    case "ZipCode":
      user.withZipCode(input.value);
      break;
  }

  return user;
};

export const inputController = () => {
  const input = document.querySelector("#factor");

  if (input.type == "number") {
    input.addEventListener("keypress", (evt) => {
      if (evt.keyCode < 48 || evt.keyCode > 57) {
        evt.preventDefault();
      }
    });
  } else if (input.type == "text") {
    input.addEventListener("keypress", (evt) => {
      if (evt.keyCode >= 48 && evt.keyCode <= 57) {
        evt.preventDefault();
      }
    });
  }
};
