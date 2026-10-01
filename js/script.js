console.log("Script loaded successfully");
const projectName = "Study Group Search Engine";
console.log(projectName);
const mainSubject = "Main Subject";
console.log(mainSubject);
const totalGroups = 3;
console.log(totalGroups);
let positionsAvailable = 0;

const appName = "Learnplat";

const articles = ["Mathematics", "Physics", "Programming", "History", "Literature", "Сhemistry"];

for (const article of articles) {
  console.log("Subject: ", article);
}

if (positionsAvailable > 3) {
  console.log("Positions available");
}
else if (positionsAvailable <= 3 && positionsAvailable > 0) {
  console.log("Almost full");
}
else if (positionsAvailable === 0) {
  console.log("Group Full");
}

