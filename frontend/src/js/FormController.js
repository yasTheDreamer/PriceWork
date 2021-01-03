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

export const inputController = () => {
  const input = document.querySelector("#factor");

  if (input.type == "number") {
    input.addEventListener("keypress", (evt) => {
      if (evt.keyCode < 48 || evt.keyCode > 57) {
        evt.preventDefault();
      }
    });
  }
};
