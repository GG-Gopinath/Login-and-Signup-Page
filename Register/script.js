const form = document.getElementById("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirm-password");
let SUCCESS = true;

form.addEventListener("submit", (e) => {
  if (validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const confirmpasswordvalue = confirmpassword.value.trim();

  if (usernamevalue === "") {
    SUCCESS = false;
    setError(username, "Username is Required");
  } else {
    setSuccess(username);
  }

  if (emailvalue === "") {
    SUCCESS = false;
    setError(email, "Email is Required");
  } else if (!ValidateEmail(emailvalue)) {
    setError(email, "Please enter a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordvalue === "") {
    SUCCESS = false;
    setError(password, "Password is Required");
  } else if (passwordvalue.length < 8) {
    setError(password, "Password must be eight characters long");
  } else {
    setSuccess(password);
  }

  if (confirmpasswordvalue === "") {
    SUCCESS = false;
    setError(confirmpassword, "Password is Required");
  } else if (confirmpasswordvalue !== passwordvalue) {
    setError(confirmpassword, "Password does not match");
  } else {
    setSuccess(confirmpassword);
  }
  return SUCCESS;
}

function setError(element, message) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = message;
  inputGroup.classList.add("error");
  inputGroup.classList.remove("success");
}

function setSuccess(element) {
  const inputGroup = element.parentElement;
  const errorElement = inputGroup.querySelector(".error");

  errorElement.innerText = "";
  inputGroup.classList.add("success");
  inputGroup.classList.remove("error");
}

const ValidateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};
