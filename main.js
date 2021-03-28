let welcomeMessageTitle = document.querySelector('.welcomeMessageTitle');
let welcomeMessageText = document.querySelector('.welcomeMessageText');

welcomeMessageText.style.opacity = 0;
welcomeMessageTitle.style.transform = "translateY(70px)";

window.addEventListener('scroll', () =>{
    console.log(`Scroll position: ${Math.floor(window.scrollY)}`);
    if(window.scrollY>=400){
        gsap.to(welcomeMessageTitle, {y:-20, duration: 2});
        gsap.to(welcomeMessageText, {opacity: 1, duration: 3});
    }
})