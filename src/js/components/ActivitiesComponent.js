import { activitiesData } from "../data/activitiesData";

export function renderActivities() {
  const activitiesContainer = document.querySelector(".activities__container");

  const vlogsArticlesHTML = activitiesData.vlogsArticles
    .map(
      (item) => `<li><a href="${item.link}">${item.type} ${item.title}</a></li>`
    )
    .join("");

  const extracurricularHTML = activitiesData.extracurricular
    .map(
      (activity) => `
      <div class="activities__item">
        <h4>${activity.title}</h4>
        <p><strong>${activity.period}</strong></p>
        <ul>
          ${activity.details.map((detail) => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
    `
    )
    .join("");

  activitiesContainer.innerHTML = `
      <div class="activities__vlogs-articles">
        <h3 class="activities__title">Vlogs & Articles</h3>
        <ul class="activities__list">
          ${vlogsArticlesHTML}
        </ul>
      </div>
      <div class="activities__extracurricular">
        <h3 class="activities__title">Extracurricular Activities</h3>
        ${extracurricularHTML}
      </div>
    `;
}
