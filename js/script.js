let groupsMock = [
  { id: 1, subject: "Mathematics", students: 5, schedule: "monday" },
  { id: 2, subject: "Physics", students: 0, schedule: "tuesday" },
  { id: 3, subject: "Programming", students: 10, schedule: "wednesday" },
  { id: 4, subject: "History", students: 3, schedule: "thursday" },
  { id: 5, subject: "Literature", students: 7, schedule: "friday" },
  { id: 6, subject: "Chemistry", students: 2, schedule: "saturday" },
];

let groupsProfileMock = [
  { id: 1, subject: "Mathematics", students: 5, schedule: "monday" },
  { id: 2, subject: "Physics", students: 0, schedule: "tuesday" },
  { id: 3, subject: "Programming", students: 10, schedule: "wednesday" },
];

// Login

const formLogin = document.querySelector("#form-login");
if (formLogin) {
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

/* Module 13 */


// dashboard

function createCardHTML(group) {
  return `
    <article class="card">
    <h3>${group.subject}</h3>
    <p>${group.students} students</p>
    <button class="button button-primary">Take</button>
    </article>
  `;
}

const container = document.querySelector("#dashboard-grid");

if (container) {
  function renderGroups(list) {
    const html = list.map(createCardHTML).join("");
    container.innerHTML = html;
  }

  renderGroups(groupsMock);

  // search
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

// add new group

const containerButtonNew = document.querySelector("#button-new-group");

if (containerButtonNew) {
  containerButtonNew.addEventListener("click", function () {
    const groupId = Number(event.target.dataset.id);

    console.log("ok");
    
    newGroup = { subject: "NewGroup", students: 10 };
    
    function addGroup(newGroup) {
      const groupToAdd = {
        id: Date.now(),
        subject: newGroup.subject,
        students: newGroup.students
      };
        
      groupsMock.push(groupToAdd);
      renderGroups(groupsMock);
    }

    addGroup(newGroup);
  });
}

// Profile

function createProfileCardHTML(group) {
  return `
    <article class="card">
    <h3>${group.subject}</h3>
    <p>${group.students} students</p>
    <button class="button button-primary" data-id="${group.id}"">Exit</button>
    </article>
  `;
}

const containerProfile = document.querySelector("#profile-grid");

if (containerProfile) {
  function renderGroups(list) {
    const html = list.map(createProfileCardHTML).join("");
    containerProfile.innerHTML = html;
  }

  renderGroups(groupsProfileMock);

  // exit group

  containerProfile.addEventListener("click", function () {
    if (event.target.classList.contains("button-primary")) {
      const groupId = Number(event.target.dataset.id);  
      groupsProfileMock = groupsProfileMock.filter((g) => g.id !== groupId);
      renderGroups(groupsProfileMock);
    }
  });
}
