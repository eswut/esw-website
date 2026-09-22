/* =========================================================
   ESW WEBSITE CONTENT

   FUTURE OFFICERS:
   EDIT THIS SECTION TO UPDATE THE WEBSITE.

   You generally do NOT need to edit anything below
   "END EDITABLE SECTION."
   ========================================================= */


/* ---------------------------------------------------------
   IMPORTANT LINKS
   --------------------------------------------------------- */

const websiteLinks = {

  membershipForm:
    "https://forms.google.com",

  calendar:
    "#",

  email:
    "yourclub@example.edu",

  instagram:
    "#",

  linkedin:
    "#"

};


/* ---------------------------------------------------------
   NEXT GENERAL MEETING

   Change these four lines whenever the meeting changes.
   --------------------------------------------------------- */

const nextMeeting = {

  name: "General Meeting",

  date: "Thursday, September 24",

  time: "6:00 PM",

  location: "Room TBD"

};


/* ---------------------------------------------------------
   UPCOMING EVENTS

   Copy an event block to add another event.

   Example:

   {
      date: "OCT 15",
      name: "Event Name",
      details: "6:00 PM · Location",
      description: "Short description."
   },

   --------------------------------------------------------- */

const events = [

  {
    date: "SEP 24",

    name: "General Meeting",

    details: "6:00 PM · Room TBD",

    description:
      "Meet ESW members, hear project updates, and learn how to get involved."
  },

  {
    date: "OCT 03",

    name: "Project Workday",

    details: "10:00 AM · Location TBD",

    description:
      "Spend the morning working alongside one of our project teams."
  },

  {
    date: "OCT 15",

    name: "Sustainability Speaker Night",

    details: "6:30 PM · Location TBD",

    description:
      "Hear from professionals working at the intersection of engineering and sustainability."
  }

];


/* ---------------------------------------------------------
   PROJECTS

   Add, remove, or rename projects here.
   --------------------------------------------------------- */

const projects = [

  {
    name: "Aquaponics",

    description:
      "Explore sustainable food systems through hands-on aquaponics design, experimentation, and education."
  },

  {
    name: "Community Engineering",

    description:
      "Work with communities to develop practical engineering solutions centered around local needs."
  },

  {
    name: "Campus Sustainability",

    description:
      "Identify opportunities to make our campus more sustainable through research, design, and implementation."
  },

  {
    name: "New Project",

    description:
      "Have an idea? ESW gives students the opportunity to develop new sustainability projects and build a team."
  }

];


/* ---------------------------------------------------------
   OFFICERS

   Later we can add:
   photo: "images/officers/name.jpg"

   For now the website automatically creates initials.
   --------------------------------------------------------- */

const officers = [

  {
    name: "Officer Name",
    role: "Co-President"
  },

  {
    name: "Officer Name",
    role: "Co-President"
  },

  {
    name: "Officer Name",
    role: "VP Internal"
  },

  {
    name: "Officer Name",
    role: "VP External"
  },

  {
    name: "Officer Name",
    role: "VP Projects"
  },

  {
    name: "Officer Name",
    role: "Treasurer"
  },

  {
    name: "Officer Name",
    role: "Secretary"
  }

];


/* =========================================================
   END EDITABLE SECTION

   Future officers usually should not need to change
   anything below this line.
   ========================================================= */



/* =========================================================
   CREATE PROJECT CARDS
   ========================================================= */

const projectsGrid =
  document.getElementById("projects-grid");


projects.forEach((project, index) => {

  const projectCard =
    document.createElement("article");

  projectCard.className = "project-card";


  const number =
    String(index + 1).padStart(2, "0");


  projectCard.innerHTML = `

    <span class="project-number">
      ${number}
    </span>

    <h3>
      ${project.name}
    </h3>

    <p>
      ${project.description}
    </p>

  `;


  projectsGrid.appendChild(projectCard);

});


/* =========================================================
   CREATE EVENTS
   ========================================================= */

const eventsList =
  document.getElementById("events-list");


events.forEach(event => {

  const eventElement =
    document.createElement("article");

  eventElement.className = "event";


  eventElement.innerHTML = `

    <div class="event-date">
      ${event.date}
    </div>

    <div>

      <h3>
        ${event.name}
      </h3>

      <strong>
        ${event.details}
      </strong>

      <p>
        ${event.description}
      </p>

    </div>

  `;


  eventsList.appendChild(eventElement);

});


/* =========================================================
   CREATE OFFICERS
   ========================================================= */

const officersGrid =
  document.getElementById("officers-grid");


officers.forEach(officer => {

  const officerCard =
    document.createElement("article");

  officerCard.className = "officer";


  const initials =
    officer.name
      .split(" ")
      .map(word => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();


  officerCard.innerHTML = `

    <div class="officer-photo">
      ${initials}
    </div>

    <h3>
      ${officer.name}
    </h3>

    <p>
      ${officer.role}
    </p>

  `;


  officersGrid.appendChild(officerCard);

});


/* =========================================================
   NEXT MEETING
   ========================================================= */

document.getElementById("next-meeting-name").textContent =
  nextMeeting.name;

document.getElementById("next-meeting-date").textContent =
  nextMeeting.date;

document.getElementById("next-meeting-time").textContent =
  nextMeeting.time;

document.getElementById("next-meeting-location").textContent =
  nextMeeting.location;


/* =========================================================
   LINKS
   ========================================================= */

document.getElementById("membership-link").href =
  websiteLinks.membershipForm;

document.getElementById("calendar-link").href =
  websiteLinks.calendar;

document.getElementById("instagram-link").href =
  websiteLinks.instagram;

document.getElementById("linkedin-link").href =
  websiteLinks.linkedin;


const emailAddress =
  `mailto:${websiteLinks.email}`;


document.getElementById("email-link").href =
  emailAddress;

document.getElementById("footer-email").href =
  emailAddress;


/* =========================================================
   COPYRIGHT YEAR
   ========================================================= */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const navToggle =
  document.querySelector(".nav-toggle");

const navMenu =
  document.querySelector(".nav-menu");


navToggle.addEventListener("click", () => {

  const open =
    navMenu.classList.toggle("open");

  navToggle.setAttribute(
    "aria-expanded",
    String(open)
  );

  document.body.classList.toggle(
    "menu-open",
    open
  );

});


document
  .querySelectorAll(".nav-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove(
        "menu-open"
      );

    });

  });
