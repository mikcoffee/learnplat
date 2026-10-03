const appName = "Learnplat";
const projectName = "Study Group Search Engine";
const mainSubject = "Main Subject";
const totalGroups = 6;
let positionsAvailable = 10;

const articles = ["Mathematics", "Physics", "Programming", "History", "Literature", "Сhemistry"];

const groups = [
  { subject: "Mathematics", students: 5, schedule: "monday" },
  { subject: "Physics", students: 0, schedule: "tuesday" },
  { subject: "Programming", students: 10, schedule: "wednesday" },
  { subject: "History", students: 3, schedule: "thursday" },
  { subject: "Literature", students: 7, schedule: "friday" },
  { subject: "Chemistry", students: 2, schedule: "saturday" },
];

/*
const availGroups = groups.filter(group => group.students < 10);
console.log("number of available groups: ", availGroups.length);

const searchString = "Mathematics"; // imagine user typed it in Search field
const foundGroups = groups.filter(group => group.subject === searchString);

for (const foundGroup of foundGroups) { 
  console.log("Group found: ", foundGroup.subject); }

const emailValidation = (email) => {if (email === "")
{ return "empty email"; } return "good email"; }

console.log(emailValidation(""));
*/

/* Module 6 guided */
/*
console.log("Module 6 Guided");
singleGroup = { subject: "Mathematics", students: 5, schedule: "monday" };
const subj1 = singleGroup.subject;
console.log(subj1);

console.log("Destructing");
const { subject, students, schedule } = singleGroup;

console.log("Function");
function describeGroup (subject, students) {
  return subject + ": " + students;
};

console.log(describeGroup(subject, students));
*/

/* Module 6 project task */
/*
console.log("Module 6 project task:");
function schedulePrint (group) {
  const { subject, schedule } = group;
  console.log(subject + ": " + schedule);
};

for (const group of groups ) {
  schedulePrint(group);
};
*/

/* Module 7 task */
console.log("Module 7 task: ");
console.log(document.title);

const titulo = document.querySelector("h1");

if (titulo) {
  console.log(titulo.textContent);
} else {
  console.log("Can't find h1");
};


const cards = document.querySelectorAll(".card");
console.log("Cards number: " + cards.length);

const searchField = document.querySelector(".search");

if (searchField) {
  console.log(searchField.value);
} else {
  console.log("Can't find .search");
};


const buttonElement = document.querySelector(".button");

if (buttonElement) {
  console.log("Button text: " + buttonElement.textContent);
} else {
  console.log("Can't find .button");
};

/* Module 8 */

// change item text
titulo.textContent = "Welcome back!";

// class add
/* 
const card = document.querySelector(".card");
if (card) {
  card.classList.add("highlight");
  const isAdded = card.classList.contains("highlight");
}
else {
  console.log(".card not found");
}
*/

// add element
/*
const navbar_list = document.querySelector('.navbar__links');
const item = document.createElement('li');
item.textContent = "Item";
if (navbar_list) {
  navbar_list.appendChild(item);
}
*/

// remove element (avatar)
/*
const avatarElem = document.querySelector('.avatar');
if (avatarElem) {
  avatarElem.remove();
}
*/

/* Module 9 */

const buttonSelected = document.querySelector('button');
buttonSelected.addEventListener("click", function () {
  console.log("Button clicked");
});

const formSelected = document.querySelector('.form-login');
if (formSelected) {
  formSelected.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form - no reload");});
};

const searchSelected = document.querySelector('.search');
if (searchSelected) {
  searchSelected.addEventListener("input", function (event) {
    console.log(event.target.value)});
};

// Login

const formLogin = document.querySelector("#form-login");
if (formLogin) { // only on Login page
  console.log("login page ok");

  const fieldEmail = document.querySelector("#email");
  const fieldPass = document.querySelector("#password");
  const errorEmail = document.querySelector("#error-email");
  const errorPass = document.querySelector("#error-pass");
  const messageSuccess = document.querySelector("#message-success");


  formLogin.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = fieldEmail.value.trim();
    const pass = fieldPass.value;

    errorEmail.textContent = "";
    errorPass.textContent = "";
    messageSuccess.textContent = "";
    let valid = true;

    if (!email) {
      errorEmail.textContent = "Enter your e-mail.";
      valid = false;
    } else if (!email.includes("@")) {
      errorEmail.textContent = "Enter correct email.";
      valid = false;
    }

    if (!pass) {
      errorPass.textContent = "Enter your password.";
      valid = false;
    } else if (pass.length < 8) {
      errorPass.textContent = "Password must be at least 8 characters.";
      valid = false;
    }

    if (valid) {
      messageSuccess.textContent = "Valid login! (without backend yet, nothing is actually sent.)";
      console.log("Valid form:", { email });
    }
  });
}
else {
  console.log("no login form found");
}
