const projects_scrim = document.querySelector('.projects_scrim');
projects_scrim.classList.add("active");


ScrollReveal({
     reset: true
});
ScrollReveal().reveal('.reveal', {
     delay: 400,
     duration: 500,
     reset: true,
     distance: '50px',
     origin: "bottom",
});
ScrollReveal().reveal('.headline', {
     delay: 200,
     duration: 500,
     reset: true,
     scale: .95,
     origin: "bottom",
     distance: '20px',
});

var rellax = new Rellax('.rellax', {
     speed: -2,
     center: true,
     wrapper: null,
     round: true,
     vertical: true,
     horizontal: false,
     breakpoints: [576, 768, 1201],

});