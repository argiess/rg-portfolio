// BURGER MENU START
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".list__menu");

burger.addEventListener("click", ()=>{
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".list__link").forEach(n => n.addEventListener("click", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}));
// BURGER MENU END

// SCROLL EFFECT START
const header = document.querySelector(".header");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 69){
        header.classList.add("scrolled");
    }
    else{
        header.classList.remove("scrolled");
    }
});

document.addEventListener("keydown", ()=>{
    burger.classList.remove("active");
    navMenu.classList.remove("active");
});
// SCROLL EFFECT END

// REVIEW SLIDER START
const swiper = new Swiper('.js-review-slider', {
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
        el: 'js-reviews-pagination',
        clickable: true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
});
// REVIEW SLIDER END

// FAQ START
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
// FAQ END