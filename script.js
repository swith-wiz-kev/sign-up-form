const passwordField = document.querySelector("#password");
const passwordFieldConfirm = document.querySelector("#confirmpassword");
const errorMessage = document.querySelector("p.error-message");
function isPasswordMatch() {
  if (passwordField.value === passwordFieldConfirm.value) {
    return true;
  } else {
    return false;
  }
}

function setPasswordValidity(isPasswordMatch) {
  if (isPasswordMatch) {
    passwordField.setCustomValidity("");
    passwordFieldConfirm.setCustomValidity("");
  } else {
    passwordField.setCustomValidity("Passwords do not match.");
    passwordFieldConfirm.setCustomValidity("Passwords do not match.");
  }
}

function passwordMismatchHandler() {
  if (isPasswordMatch()) {
    errorMessage.className = "";
    setPasswordValidity(true);
  } else {
    errorMessage.className = "error-message";
    setPasswordValidity(false);
  }
}

function changeHandler() {
  passwordMismatchHandler();
}
function submitHandler() {
  passwordMismatchHandler();
}
const formMain = document.querySelector("form");
formMain.addEventListener("focusout", () => changeHandler());
formMain.addEventListener("submit", () => submitHandler());
