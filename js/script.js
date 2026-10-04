const groupsMock = [
  { id: 1, subject: "Mathematics", students: 5, schedule: "monday" },
  { id: 2, subject: "Physics", students: 0, schedule: "tuesday" },
  { id: 3, subject: "Programming", students: 10, schedule: "wednesday" },
  { id: 4, subject: "History", students: 3, schedule: "thursday" },
  { id: 5, subject: "Literature", students: 7, schedule: "friday" },
  { id: 6, subject: "Chemistry", students: 2, schedule: "saturday" },
];

/* Module 11 */

const textJSON = JSON.stringify(groupsMock);
console.log(textJSON);
const ObjetoDeVolta = JSON.parse(textJSON);
console.log(ObjetoDeVolta[0].subject);

// Guided

const container = document.querySelector("#dashboard-grid");
if (container) {
  function renderGroups(list) {
    const html = list.map(function (group) {
    return `
      <article class="card">
      <h3>${group.subject}</h3>
      <p>${group.students} students</p>
      <button class="button button-primary">Take</button>
      </article>
    `;
    }).join("");
    
    container.innerHTML = html;
  }

  renderGroups(groupsMock);

  const searchField = document.querySelector("#search");
  if (searchField) {
    searchField.addEventListener("input", function (event) {
      const typedWord = event.target.value.trim().toLowerCase();
      const filteredGroups = groupsMock.filter(function(g) {
        return g.subject.toLowerCase().includes(typedWord);
      });
      renderGroups(filteredGroups);
    });
  }
}
