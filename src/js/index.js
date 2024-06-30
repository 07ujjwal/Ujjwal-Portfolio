import { renderSkills } from "./components/skillsComponent";
import { renderExperiences } from "./components/experiencesComponent";
import { renderProjects } from "./components/projectsComponent.js";

document
  .querySelector(".nav__toggle--open")
  .addEventListener("click", function () {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
  });

document
  .querySelector(".nav__toggle--close")
  .addEventListener("click", function () {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
  });

document.addEventListener("DOMContentLoaded", () => {
  const aboutMeSection = document.querySelector(".about-me");
  const skillLogos = document.querySelectorAll(".skill__logo");
  const scrollToContactBtn = document.getElementById("scrollToContact");

  skillLogos.forEach((logo) => {
    logo.style.animation = "float 2s ease-in-out infinite";
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutMeSection.classList.remove("exit");
        } else {
          aboutMeSection.classList.add("exit");
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(aboutMeSection);

  if (scrollToContactBtn) {
    scrollToContactBtn.addEventListener("click", function (e) {
      e.preventDefault();

      const contactSection = document.getElementById("contactId");

      if (contactSection) {
        const offSetTop = contactSection.offsetTop;

        window.scrollTo({
          top: offSetTop,
          behavior: "smooth",
        });
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-card-enter");
          entry.target.classList.remove("project-card-exit");
        } else {
          entry.target.classList.remove("project-card-enter");
          entry.target.classList.add("project-card-exit");
        }
      });
    },
    { threshold: 0.2 }
  );

  projectCards.forEach((card) => {
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderExperiences();
  renderProjects();
});
