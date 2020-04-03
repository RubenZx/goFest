const style = document.createElement("style");
style.type = "text/css";
style.innerHTML =
  ".input-error { outline: none; border: 2px solid red !important; border-radius: 5px !important; margin-bottom: 0.1rem !important;}";
document.getElementsByTagName("head")[0].appendChild(style);

const testEmail = email => {
  let error = "";
  if (email === "") {
    error = "Campo requerido";
  } else if (
    !/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)
  ) {
    error = "Formato email incorrecto";
  }
  return { "email-error": error };
};

const testStringLength = (value, fieldName) => {
  let error = "";
  if (value === "") {
    error = "Campo requerido";
  } else if (value.length < 4) {
    error = "Demasiado corto";
  }
  return { [`${fieldName}-error`]: error };
};

const testDate = (start, end) => {
  const eventStart = "2020-06-25";
  const eventEnd = "2020-06-28";

  let error = "";
  if (start === null || end === null) {
    error = "Campo requerido";
  } else if (start < eventStart) {
    error = "La fecha debe ser mayor o igual al día de inicio del evento";
  } else if (end > eventEnd) {
    error = "La fecha debe ser menor o igual al día de finalización del evento";
  } else if (start > end) {
    error = "La fecha de entrada ha de ser menor a la de salida";
  }

  return { "start-error": error };
};

form.addEventListener("submit", event => {
  event.preventDefault();

  const fields = {
    email: document.getElementById("email").value,
    firstname: document.getElementById("firstname").value,
    lastname: document.getElementById("lastname").value,
    start: document.getElementById("start").value,
    end: document.getElementById("end").value
  };

  let errors = [];
  Object.entries(fields).forEach(([key, value]) => {
    switch (key) {
      case "email":
        errors = [...errors, testEmail(value)];
        break;
      case "firstname":
        errors = [...errors, testStringLength(value, key)];
        break;
      case "lastname":
        errors = [...errors, testStringLength(value, key)];
        break;
      case "start":
        errors = [...errors, testDate(value, fields.end)];
        break;
      default:
        break;
    }
  });

  errors.forEach(element => {
    const [[key, value]] = Object.entries(element);
    const fieldId = key.replace("-error", "");
    const docElement = document.getElementById(fieldId);

    document.getElementById(key).innerHTML = value;
    if (value) {
      docElement.classList.add("input-error");
      if (fieldId === "start") {
        document.getElementById("end").classList.add("input-error");
      }
    } else {
      docElement.classList.remove("input-error");
      if (fieldId === "start") {
        document.getElementById("end").classList.remove("input-error");
      }
    }
  });
});
