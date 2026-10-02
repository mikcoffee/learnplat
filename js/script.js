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

const availGroups = groups.filter(group => group.students < 10);
console.log("number of available groups: ", availGroups.length);

const searchString = "Mathematics"; /* imagine user typed it in Search field*/
const foundGroups = groups.filter(group => group.subject === searchString);

for (const foundGroup of foundGroups) { 
  console.log("Group found: ", foundGroup.subject); }

const emailValidation = (email) => {if (email === "")
{ return "empty email"; } return "good email"; }

console.log(emailValidation(""));

/* Module 6 guided */
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

/* Module 6 project task */
console.log("Module 6 project task:");
function schedulePrint (group) {
  const { subject, schedule } = group;
  console.log(subject + ": " + schedule);
};

for (const group of groups ) {
  schedulePrint(group);
};

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
