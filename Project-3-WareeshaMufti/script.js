const signupForm = document.getElementById("js-signup-form");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("js-signup-name").value;
  const email = document.getElementById("js-signup-email").value;
  const password = document.getElementById("js-signup-password").value;

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const newStudent = {
    name: name,
    email: email,
    password: password,
    progress: []
  };

  students.push(newStudent);

  localStorage.setItem("students", JSON.stringify(students));

  alert("Account created! Please log in.");
  signupForm.reset();
});

const loginForm = document.getElementById("js-login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("js-login-email").value;
  const password = document.getElementById("js-login-password").value;

  const students = JSON.parse(localStorage.getItem("students")) || [];

  const matchedStudent = students.find(
    (student) => student.email === email && student.password === password
  );

  if (matchedStudent) {
    alert("Welcome back, " + matchedStudent.name + "!");
  } else {
    alert("Incorrect email or password.");
  }
});

// ===== Toggle between signup and login views =====
const signupView = document.getElementById("js-signup-view");
const loginView = document.getElementById("js-login-view");
const showLoginBtn = document.getElementById("js-show-login");
const showSignupBtn = document.getElementById("js-show-signup");

showLoginBtn.addEventListener("click", () => {
  signupView.style.display = "none";
  loginView.style.display = "block";
});

showSignupBtn.addEventListener("click", () => {
  loginView.style.display = "none";
  signupView.style.display = "block";
});