export class ValidateForm {
  static validateInputData(input) {
    const inputType = Object.keys(input.dataset)[0];
    const warning = input.parentElement.querySelector("[data-warning]");

    if (input.validity.valid) {
      warning.classList.add("form__warning--hide");
    } else {
      warning.classList.remove("form__warning--hide");
      warning.textContent = this.sendErrorMessage(inputType, input);
    }
    if (this.validators[inputType]) {
      this.validators[inputType](input);
      input.setCustomValidity("");
    }
  }

  static sendErrorMessage(inputType, input) {
    let message = "";
    this.errorTypes.forEach((error) => {
      if (input.validity[error]) {
        message = this.errorMessages[inputType][error];
      }
    });
    return message;
  }

  static validators = {
    dateTask: (input) => this.dateValidate(input),
  };

  static dateValidate(input) {
    const warning = input.parentElement.querySelector("[data-warning]");
    if (this.dateRangeValidate(input.value)) {
      warning.classList.remove("form__warning--hide");
      warning.textContent = "La fecha es menor que la actual.";
    }
  }

  static dateRangeValidate(date) {
    const userDate = new Date(date);
    const currentDate = new Date();
    if (
      userDate.getFullYear() < currentDate.getFullYear() ||
      userDate.getMonth() < currentDate.getMonth() ||
      userDate.getDate() < currentDate.getDate()
    ) {
      return true;
    }
  }

  static errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];
  static errorMessages = {
    nameTask: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    dateTask: {
      valueMissing: "El campo fecha no puede estar vacío",
      typeMismatch: "La fecha elegida es menor que la fecha actual",
    },
    nameContact: {
      valueMissing: "El campo nombre no puede estar vacío",
    },
    phoneContact: {
      valueMissing: "El campo teléfono no puede estar vacío",
      typeMismatch:"El número es inválido",
      patternMismatch: "Patrón incorrecto",
    },
    emailContact: {
      valueMissing: "El campo email no puede estar vacío",
      typeMismatch: "El correo es inválido",
    },
  };
}
