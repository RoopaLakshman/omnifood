const menuOpen = document.querySelector(".mobile-nav");
const menuClose = document.querySelector(".close-outline");
const header = document.getElementById("header");
const body = document.querySelector("body");

console.log(menuOpen);
console.log(header);
menuOpen.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const classNames = link.getAttribute("class");
    console.log(classNames);
    const classList = link.classList;
    console.log(classList);
    if (link.classList.contains("main-nav-item")) {
      header.classList.remove("nav-open");
    }
  });
});

const heroSection = document.querySelector(".hero-section");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      body.classList.add("sticky");
    } else {
      body.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0, rootMargin: "-80px" }
);
obs.observe(heroSection);
