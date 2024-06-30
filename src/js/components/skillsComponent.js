import { skillsData } from "../data/skillsData";
console.log(skillsData);
export function renderSkills() {
  const skillsContainer = document.getElementById("skillsContainer");

  skillsData.forEach((category) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("skills__category");

    const categoryTitle = document.createElement("h2");
    categoryTitle.classList.add("skills__category__title");
    categoryTitle.textContent = category.category;

    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("skills__category__container");

    category.skills.forEach((skill) => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add("skill");

      const skillLogo = document.createElement("img");
      skillLogo.src = skill.logo;
      skillLogo.alt = skill.name;
      skillLogo.classList.add("skill__logo");

      const skillName = document.createElement("span");
      skillName.classList.add("skill__name");
      skillName.textContent = skill.name;

      const skillLevel = document.createElement("div");
      skillLevel.classList.add("skill__level");

      const skillLevelBar = document.createElement("div");
      skillLevelBar.classList.add("skill__level-bar");
      skillLevelBar.style.width = `${skill.level}%`;

      skillLevel.appendChild(skillLevelBar);
      skillDiv.appendChild(skillLogo);
      skillDiv.appendChild(skillName);
      skillDiv.appendChild(skillLevel);
      categoryContainer.appendChild(skillDiv);
    });

    categoryDiv.appendChild(categoryTitle);
    categoryDiv.appendChild(categoryContainer);
    skillsContainer.appendChild(categoryDiv);
  });
}
