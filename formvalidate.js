const login = document.getElementById("login");
const register = document.getElementById("register");
const mask = document.getElementById("mask");
const regPage = document.getElementById("reg--el");
const logPage = document.getElementById("log--el");
const formPage = document.getElementById("login--form");

register.addEventListener("click", () => {
  register.classList.add("mask");
  login.classList.remove("mask");
  regPage.classList.remove("hidden");
  logPage.classList.add("hidden");
  formPage.classList.add("increase");
});
login.addEventListener("click", () => {
  login.classList.add("mask");
  register.classList.remove("mask");
  logPage.classList.remove("hidden");
  regPage.classList.add("hidden");
  formPage.classList.remove("increase");
});

//login page
const userLog = document.getElementById("log--username");
const passLog = document.getElementById("log--password");
const userLogError = document.getElementById("logUserError");
const passLogError = document.getElementById("logPassError");
const checkLog = document.getElementById("checkboxLog");
const checkError = document.getElementById("checkErrorLog");
//registration page
const userReg = document.getElementById("reg--username");
const userRegError = document.getElementById("regUserError");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const passReg = document.getElementById("reg--password");
const passRegError = document.getElementById("regPassError");
const passReg2 = document.getElementById("reg--password2");
const passRegError2 = document.getElementById("regPassError2");
const checkReg = document.getElementById("checkboxReg");
const checkRegError = document.getElementById("checkErrorReg");

//check email validation
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

formPage.addEventListener("submit", (e) => {
  let count = 0;
  if (regPage.classList.contains("hidden")) {
    if (userLog.value === "" || userLog.value === null) {
      count += 1;
      userLogError.innerText = "enter name please";
    } else {
      userLogError.innerText = "";
    }
    if (passLog.value === "" || userLog.value === null) {
      count += 1;
      passLogError.innerText = "password error";
    } else if (passLog.value.length < 6 || passLog.value.length > 20) {
      count += 1;
      passLogError.innerText = "your password is between 6 and 20 characters";
    } else {
      passLogError.innerText = "";
    }
  }

  // registration page
  else {
    if (userReg.value === "" || userReg.value === null) {
      count += 1;
      userRegError.innerText = "your name is required";
    } else {
      userRegError.innerText = "";
    }
    if (email.value === "" || email.value === null) {
      count += 1;
      emailError.innerText = "your email is required";
    } else if (!isValidEmail(email.value)) {
      emailError.innerText = "enter valid email";
    } else {
      emailError.innerText = "";
    }
    if (passReg.value === "" || passReg.value === null) {
      count += 1;
      passRegError.innerText = "you have to set password";
    } else if (passReg.value.lenght > 20 || passReg.value.lenght < 6) {
      passRegError.innertext = "password must be between 6 and 20 characters";
    } else {
      passRegError.innerText = "";
    }
    if (passReg2.value === "" || passReg2.value === null) {
      count += 1;
      passRegError2.innerText = "confirm your password";
    } else if (passReg.value != passReg2.value) {
      count += 1;
      passRegError2.innerText = "passwords do not match";
    } else {
      passRegError2.innerText = "";
    }
    if (checkReg.checked) {
      checkRegError.innerText === "";
    } else {
      count += 1;
      checkRegError.innerText = "check the agreement";
    }
  }
  if (count === 0) {
    alert("you are successful");
    window.location = "about.html";
    return false;
  } else {
    e.preventDefault();
  }
});
