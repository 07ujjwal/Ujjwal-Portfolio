document.querySelector(".nav__toggle--open").addEventListener("click", function() {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
});
document.querySelector(".nav__toggle--close").addEventListener("click", function() {
    document.querySelector(".nav__links").classList.toggle("show");
    document.querySelector(".nav__toggle--open").classList.toggle("show");
    document.querySelector(".nav__toggle--close").classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", ()=>{
    const aboutMeSection = document.querySelector(".about-me");
    const skillLogos = document.querySelectorAll(".skill__logo");
    const scrollToContactBtn = document.getElementById("scrollToContact");
    skillLogos.forEach((logo)=>{
        logo.style.animation = "float 2s ease-in-out infinite";
    });
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) aboutMeSection.classList.remove("exit");
            else aboutMeSection.classList.add("exit");
        });
    }, {
        threshold: 0.1
    });
    observer.observe(aboutMeSection);
    if (scrollToContactBtn) scrollToContactBtn.addEventListener("click", function(e) {
        e.preventDefault();
        const contactSection = document.getElementById("contactId");
        if (contactSection) {
            const offSetTop = contactSection.offsetTop;
            window.scrollTo({
                top: offSetTop,
                behavior: "smooth"
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const projectCards = document.querySelectorAll(".project-card");
    const observer = new IntersectionObserver((entries, observer)=>{
        entries.forEach((entry)=>{
            if (entry.isIntersecting) {
                entry.target.classList.add("project-card-enter");
                entry.target.classList.remove("project-card-exit");
            } else {
                entry.target.classList.remove("project-card-enter");
                entry.target.classList.add("project-card-exit");
            }
        });
    }, {
        threshold: 0.2
    });
    projectCards.forEach((card)=>{
        observer.observe(card);
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const slides = document.querySelectorAll(".slide");
    const btnLeft = document.querySelector(".slider__btn--left");
    const btnRight = document.querySelector(".slider__btn--right");
    const dotContainer = document.querySelector(".dots");
    let currentSlide = 0;
    const maxSlide = slides.length;
    const moveSlides = (slide)=>{
        slides.forEach((s, i)=>{
            s.style.transform = `translateX(${100 * (i - slide)}%)`;
        });
    };
    const nextSlide = ()=>{
        if (currentSlide === maxSlide - 1) currentSlide = 0;
        else currentSlide++;
        moveSlides(currentSlide);
        activateDot(currentSlide);
    };
    const prevSlide = ()=>{
        if (currentSlide === 0) currentSlide = maxSlide - 1;
        else currentSlide--;
        moveSlides(currentSlide);
        activateDot(currentSlide);
    };
    const createDots = ()=>{
        slides.forEach((_, i)=>{
            dotContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${i}"></button>`);
        });
    };
    const activateDot = (slide)=>{
        document.querySelectorAll(".dots__dot").forEach((dot)=>dot.classList.remove("dots__dot--active"));
        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
    };
    dotContainer.addEventListener("click", (e)=>{
        if (e.target.classList.contains("dots__dot")) {
            const { slide } = e.target.dataset;
            moveSlides(slide);
            activateDot(slide);
        }
    });
    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);
    document.addEventListener("keydown", (e)=>{
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "ArrowRight") nextSlide();
    });
    moveSlides(0);
    createDots();
    activateDot(0);
});

//# sourceMappingURL=index.de5c0784.js.map
