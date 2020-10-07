var rellax = new Rellax('.rellax', {
     speed: -2,
     center: true,
     wrapper: null,
     round: true,
     vertical: true,
     horizontal: false,
     breakpoints: [576, 768, 1201],

});


const newUrl = [
     "/subpages/project_1.html",
     "/subpages/project_2.html",
     "/subpages/project_3.html",
];

const projectBoxes = document.querySelectorAll('.work_wrapper > div .img');
const projects_scrim = document.querySelector('.projects_scrim');
// rellax.destroy();

projectBoxes[0].addEventListener('click', () => {
     projects_scrim.classList.add("active");

     setTimeout(() => {
          window.location = newUrl[0];

     }, 1700);
})
projectBoxes[1].addEventListener('click', () => {
     projects_scrim.classList.add("active");

     setTimeout(() => {
          window.location = newUrl[1];

     }, 1700);
})
projectBoxes[2].addEventListener('click', () => {
     projects_scrim.classList.add("active");

     setTimeout(() => {
          window.location = newUrl[2];

     }, 1700);
})

ScrollReveal({
     reset: true
});
ScrollReveal().reveal('.reveal', {
     delay: 600,
     duration: 500,
     reset: true,
     distance: '50px',
     origin: "bottom",
});
ScrollReveal().reveal('.headline', {
     delay: 300,
     duration: 500,
     reset: true,
     scale: .95,
     origin: "bottom",
     distance: '20px',
});

projects_scrim.classList.add("active");