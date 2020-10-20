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


projects_scrim.classList.add("active");