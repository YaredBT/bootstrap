const form = document.getElementById("form--container");
const name = document.getElementById("name");
const nameError = document.getElementById("error--name");
const email = document.getElementById("email");
const emailError = document.getElementById("error--email");
const message = document.getElementById("message");
const messageError = document.getElementById("error--message");

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

form.addEventListener("submit", (e) => {
  count = 0;
  if (name.value === "" || name.value === null) {
    count += 1;
    nameError.innerText = "enter name please";
  } else {
    nameError.innerText = "";
  }
  if (email.value === "" || email.value === null) {
    count += 1;
    emailError.innerText = "email is required";
  } else if (!isValidEmail(email.value)) {
    count += 1;
    emailError.innerText = "enter valid email";
  } else {
    emailError.innerText = "";
  }
  if (message.value === "" || message.value === null) {
    count += 1;
    messageError.innerText = "message is empty";
  } else {
    messageError.innerText = "";
  }

  if (count > 0) {
    e.preventDefault();
  } else {
    alert("Thanks for your comment");
  }
});
