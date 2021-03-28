
//Animate elements on scroll
gsap.to(".welcomeMessageTitle", { y: 50, duration: 0 });
gsap.to(".welcomeMessageText", { opacity: 0, duration: 0 });
gsap.to(".classes-section-h1", { opacity: 0, y: 50, duration: 0 });
gsap.to(".classes-section-h2", { opacity: 0, y: 50, duration: 0 });
gsap.to(".yoga-class-element", { opacity: 0, y: 100, duration: 0 });

window.addEventListener("scroll", () => {
  console.log(`Scroll position: ${Math.floor(window.scrollY)}`);
  if (window.scrollY >= 400) {
    gsap.to(".welcomeMessageTitle", { opacity: 1, y: 0, duration: 2 });
    gsap.to(".welcomeMessageText", { opacity: 1, duration: 3 });
  }
  if (window.scrollY >= 620) {
    gsap.to(".classes-section-h1", { opacity: 1, y: 0, duration: 3 });
  }
  if (window.scrollY >= 650) {
    gsap.to(".classes-section-h2", { opacity: 1, y: 0, duration: 3 });
  }
  if (window.scrollY >= 1100) {
    gsap.to(".yoga-class-element", {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      duration: 2,
    });
  }
});
