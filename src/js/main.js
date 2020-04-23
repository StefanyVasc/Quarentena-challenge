function startHamburguerMenu() {
  const mobile = document.querySelector("#mobile");
  const links = document.querySelector("#links");
  const header = document.querySelector("header ");
  const faq = document.querySelector("#faq");

  mobile.addEventListener("click", function () {
    links.classList.toggle("active");
    header.classList.toggle("active");
    mobile.classList.toggle("active");
    faq.classList.toggle("link-mobile");
  });
}

startHamburguerMenu();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classActive = "active";

  if (accordionList.length) {
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

    function activeAccordion() {
      this.classList.toggle(classActive);
      this.nextElementSibling.classList.toggle(classActive);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linkInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  linkInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimateScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.85;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf;

        if (isSectionVisible < 0) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    }
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

initAnimateScroll();
