const testEmail = email => {
  let error = "";
  if (email === "") {
    error = "Campo requerido";
  } else if (
    !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
  ) {
    error = "Formato email incorrecto";
  }
  return error;
};

const testStringLength = value => {
  error = "";
  if (value === "") {
    error = "Campo requerido";
  } else if (value.length < 4) {
    error = "Demasiado corto";
  }
  return error;
};

const testDate = (startDate, endDate) => {
  const eventStart = "2020-06-25";
  const eventEnd = "2020-06-28";

  let error = "";

  if (startDate === null || endDate === null) {
    error = "Campo requerido";
  } else if (startDate < eventStart) {
    error = "La fecha debe ser mayor o igual al día de inicio del evento";
  } else if (endDate > eventEnd) {
    error = "La fecha debe ser menor o igual al día de finalización del evento";
  } else if (startDate > endDate) {
    error = "La fecha de entrada ha de ser menor a la de salida";
  }

  return error;
};

form.addEventListener("submit", event => {
  event.preventDefault();
  let errors = {};

  const fields = {
    email: document.getElementById("email").value,
    name: document.getElementById("name").value,
    lastName: document.getElementById("lastname").value,
    startDate: document.getElementById("start-date").value,
    endDate: document.getElementById("end-date").value
  };

  Object.entries(fields).forEach(([key, value]) => {
    switch (key) {
      case "email":
        errors.email = testEmail(value);
        break;
      case "name":
        errors.name = testStringLength(value);
        break;
      case "lastName":
        errors.lastName = testStringLength(value);
        break;
      case "startDate":
        errors.startDate = testDate(value, fields.endDate);
        break;
      default:
        break;
    }
  });

  console.log({
    isValid: Object.values(errors).every(x => x === null || x === ""),
    errors: errors
  });
});
