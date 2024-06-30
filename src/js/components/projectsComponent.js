// src/js/components/projectsComponent.js
import { projectsData } from "../data/projectsData.js";

export function renderProjects() {
  const projectsContainer = document.querySelector(".projects__container");

  const projectsHTML = projectsData
    .map(
      (project) => `
    <div class="project-card">
      <img src="${project.imageUrl}" alt="Project Image for ${project.title}" class="project-card__image" />
      <div class="project-card__content">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__description">${project.description}</p>
        <p class="project-card__stack">${project.stack}</p>
        <a href="${project.githubUrl}" class="project-card__link">GitHub</a>
        <a href="${project.liveDemoUrl}" class="project-card__link">Live Demo</a>
      </div>
    </div>
  `
    )
    .join("");

  projectsContainer.innerHTML = projectsHTML;
}
