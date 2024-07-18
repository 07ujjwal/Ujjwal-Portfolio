import { experiencesData } from "../data/experiencesData";

export function renderExperiences() {
  const slider = document.querySelector(".slider");
  const dotsContainer = document.querySelector(".dots");

  experiencesData.forEach((experience, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide", `slide--${index + 1}`);

    slideDiv.innerHTML = `
      <div class="experience">
        <h5 class="experience__header">${experience.role} at ${experience.company}</h5>
        <blockquote class="experience__text">${experience.description}</blockquote>
        <address class="experience__details">
          <p class="experience__location">${experience.location}</p>
          <p class="experience__duration">${experience.duration}</p>
        </address>
      </div>
    `;

    slider.appendChild(slideDiv);

    const dot = `
      <button class="dots__dot" data-slide="${index}"></button>
    `;
    dotsContainer.insertAdjacentHTML("beforeend", dot);
  });

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
      const dot = `
        <button class="dots__dot" data-slide="${i}"></button>
      `;
      dotContainer.insertAdjacentHTML("beforeend", dot);
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

  const autoSlide = () => {
    setInterval(() => {
      nextSlide();
    }, 3000);
  };

  moveSlides(0);
  createDots();
  activateDot(0);
  autoSlide();
}
