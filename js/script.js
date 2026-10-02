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

/* task 5 guided */
console.log("Task 5 Guided");
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

/* Last task */
console.log("Last task:");
function schedulePrint (group) {
  const { subject, schedule } = group;
  console.log(subject + ": " + schedule);
};

for (const group of groups ) {
  schedulePrint(group);
};
