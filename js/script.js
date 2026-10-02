const appName = "Learnplat";
const projectName = "Study Group Search Engine";
const mainSubject = "Main Subject";
const totalGroups = 6;
let positionsAvailable = 10;

const articles = ["Mathematics", "Physics", "Programming", "History", "Literature", "Сhemistry"];

function groupStatus(participants) {
  if (participants >= 10) { return "Full"; }
  else if (participants >=5) { return "Almost full"; }
  else { return "Spaces available"; }
}

const emailValidation = (email) => {if (email === "")
{ return "empty email"; } return "good email"; }

console.log(groupStatus(8));
console.log(groupStatus(10));
console.log(groupStatus(0));
console.log(emailValidation(""));
console.log(emailValidation("123"));

