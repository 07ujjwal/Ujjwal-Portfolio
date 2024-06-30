// src/js/components/experiencesComponent.js
import { experiencesData } from "../data/experiencesData";

export function renderExperiences() {
  const slider = document.querySelector(".slider");
  const dotsContainer = document.querySelector(".dots");

  experiencesData.forEach((experience, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide", `slide--${index + 1}`);

    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("experience");

    const header = document.createElement("h5");
    header.classList.add("experience__header");
    header.textContent = `${experience.role} at ${experience.company}`;

    const description = document.createElement("blockquote");
    description.classList.add("experience__text");
    description.textContent = experience.description;

    const details = document.createElement("address");
    details.classList.add("experience__details");

    if (experience.logo) {
      const logo = document.createElement("img");
      logo.src = experience.logo;
      logo.alt = `${experience.company} logo`;
      logo.classList.add("experience__logo");
      details.appendChild(logo);
    }

    const company = document.createElement("h6");
    company.classList.add("experience__company");
    company.textContent = experience.company;

    const location = document.createElement("p");
    location.classList.add("experience__location");
    location.textContent = experience.location;

    const duration = document.createElement("p");
    duration.classList.add("experience__duration");
    duration.textContent = experience.duration;

    details.appendChild(company);
    details.appendChild(location);
    details.appendChild(duration);

    experienceDiv.appendChild(header);
    experienceDiv.appendChild(description);
    experienceDiv.appendChild(details);
    slideDiv.appendChild(experienceDiv);
    slider.appendChild(slideDiv);

    // Create dot for each slide
    const dot = document.createElement("button");
    dot.classList.add("dots__dot");
    dot.setAttribute("data-slide", index);
    dotsContainer.appendChild(dot);
  });

  // Add slider functionality
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let currentSlide = 0;
  const maxSlide = slides.length;

  const moveSlides = (slide) => {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };

  const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    moveSlides(currentSlide);
    activateDot(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }
    moveSlides(currentSlide);
    activateDot(currentSlide);
  };

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = (slide) => {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  dotContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      moveSlides(slide);
      activateDot(slide);
    }
  });

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  moveSlides(0);
  createDots();
  activateDot(0);
}
