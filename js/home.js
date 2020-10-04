var rellax = new Rellax('.rellax', {
     speed: -2,
     center: true,
     wrapper: null,
     round: true,
     vertical: true,
     horizontal: false,
     breakpoints: [576, 768, 1201],

});


const newUrl1 = "../subpages/project_1.html";

const projectBoxes = document.querySelectorAll('.work_wrapper > div .img');
const projects_scrim = document.querySelectorAll('.projects_scrim');
// rellax.destroy();

projectBoxes[0].addEventListener('click', () => {
     projects_scrim[0].classList.add("active");

     setTimeout(() => {
          window.location = newUrl1;

     }, 1700);
})