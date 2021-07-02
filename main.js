//Set Elements' Initial State
gsap.to(".welcomeMessageTitle", { y: 50, duration: 0 });
gsap.to(".welcomeMessageText", { opacity: 0, duration: 0 });
gsap.to(".classes-section-h1", { opacity: 0, y: 50, duration: 0 });
gsap.to(".classes-section-h2", { opacity: 0, y: 50, duration: 0 });
gsap.to(".yoga-class-element", { opacity: 0, y: 100, duration: 0 });
gsap.to(".yoga-in-sagres-h1", { opacity: 0, y: 50, duration: 0 });
gsap.to(".yoga-in-sagres-content", { opacity: 0, y: 100, duration: 0 });
gsap.to(".collaborations-h1", { opacity: 0, y: 100, duration: 0 });
gsap.to(".collaborations-element", { opacity: 0, y: 200, duration: 0 });
gsap.to(".testimonials-h1", { x: 4000, duration: 0 });
gsap.to(".mySwiper", { x: -4000, duration: 0, });


//Animate Elements' State On Scroll
gsap.to(".welcomeMessageTitle", { scrollTrigger: { trigger: ".welcomeMessageTitle", start: "center 50%", }, y: 0, duration: 2, });
gsap.to(".welcomeMessageText", { scrollTrigger: { trigger: ".welcomeMessageTitle", start: "center 50%", }, opacity: 1, duration: 2, });
gsap.to(".classes-section-h1", { scrollTrigger: { trigger: ".classes-section-h1", start: "center 50%", }, opacity: 1, y: 0, duration: 3, });
gsap.to(".classes-section-h2", { scrollTrigger: { trigger: ".classes-section-h2", start: "center 60%", }, opacity: 1, y: 0, duration: 3, });
gsap.to(".yoga-class-element", { scrollTrigger: { trigger: ".yoga-class-element", start: "center 90%", }, opacity: 1, y: 0, stagger: 0.8, duration: 2, });
gsap.to(".yoga-in-sagres-h1", { scrollTrigger: { trigger: ".yoga-in-sagres-h1", start: "center 50%", }, opacity: 1, y: 0, duration: 3, });
gsap.to(".yoga-in-sagres-content", { scrollTrigger: { trigger: ".yoga-in-sagres-content", start: "center 90%", }, opacity: 1, y: 0, duration: 3, });
gsap.to(".testimonials-h1", { scrollTrigger: { trigger: ".testimonials-h1", start: "center 80%", }, x: 0, duration: 2.5, ease: "power4.out", });
gsap.to(".mySwiper", { scrollTrigger: { trigger: ".testimonials-h1", start: "center 80%", }, x: 0, duration: 2.5, ease: "power4.out", });
gsap.to(".collaborations-h1", { scrollTrigger: { trigger: ".collaborations-h1", start: "center 80%", }, opacity: 1, y: 0, duration: 2, });
gsap.to(".collaborations-element", { scrollTrigger: { trigger: ".collaborations-element", start: "center 100%", }, opacity: 1, y: 0, duration: 2, });


//SwiperJS Settings for Testimonials Section
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});