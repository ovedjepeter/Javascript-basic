console.log("Introduction to external Javascript");

// variables
var email = "ovedjepeter302@gmail.com";
console.log("Email is", email);

const matricnumber = "CLU/23/SC/MTH/OO5";

let isStudent = false;
console.log("Is student", isStudent);

let isStaff;
console.log("is Staff 1", isStaff);

isStaff = false;
console.log("is Staff 2", isStaff);

const age = 22;

const accountBalance = 10.3;

// maths operations
// addition
const x = 4;
const y = 5;
const z = x + y;
console.log("Addition of x and y =", z);

// Sutraction
const a = y - x;
console.log("Subtraction of y from x =", a);

// Division
const b = x / y;
console.log("division of x by y =", b);

const c = x % y;
console.log("Modular of x by y =", c);

// Multiplication
const d = x * y;
console.log("multiply of x by y =", d);

// case sensitivity
const name = "John";
const Name = "Doe";

// snake case
const first_name = "Ese";

// camel case
const firstName = null;

// conditional statement
const username = "peter";
const password = "johnson";
const gmail = "example@gmail.com";
if (username) {
  console.log("Your username is", username);
} else {
  console.log("Username is not provided");
}

if (isStaff) {
  console.log("You are a staff");
} else if (isStudent) {
  console.log("You are a student");
} else {
  console.log("you are neither a staff or student");
}

if (password == "johnson" && username == "peter") {
  console.log("Logged in successfully");
}
if (
  username == "peter" ||
  (gmail == "example@gmail.com" && password == "johnson")
) {
  if (username && password) {
    console.log("logged in with username and password successfully");
  } else if (gamil && password) {
    console.log("Logged in with gmail and password successfully");
  } else {
    console.log("Provide logged in credential");
  }
}

// ternary operator
firstName
  ? console.log("first name provided")
  : console.log("first name not privided");

firstName
  ? console.log("first name provided")
  : first_name
    ? console.log("first name not privided")
    : console.log("first name not provided");
