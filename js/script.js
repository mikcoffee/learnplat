const appName = "Learnplat";
const projectName = "Study Group Search Engine";
const mainSubject = "Main Subject";
const totalGroups = 6;
let positionsAvailable = 10;

const articles = ["Mathematics", "Physics", "Programming", "History", "Literature", "Сhemistry"];

const groups = [
  { subject: "Mathematics", students: 5, description: "mathematics course" },
  { subject: "Physics", students: 0, description: "physics course" },
  { subject: "Programming", students: 10, description: "prog course" },
  { subject: "History", students: 3, description: "history course" },
  { subject: "Literature", students: 7, description: "literature course" },
  { subject: "Chemistry", students: 2, description: "chemistry course" },
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
