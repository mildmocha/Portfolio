document.addEventListener('click', ()=> {
  const pf = document.querySelector('.pf');
 pf.classList.add('open'); 
 
 const cardFronts = document.querySelectorAll ('.card-front') 
  const cards = document.querySelectorAll(".card");
  setTimeout(() => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("flip");
      }, index * 500);
    });
  }, 300);
  setTimeout(() => {
    cardFronts.forEach((cardFronts) => {
      setTimeout(() => {
        cardFronts.classList.add("open");
      });
    });
  }, 300);
;
})
function isFullscreen() {
  return document.fullscreenElement !== null || document.webkitFullscreenElement !== null || document.mozFullscreenElement !== null || document.msFullscreenElement !== null;
}
if (isFullscreen()){
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardWidth = card.offsetWidth;
    const cardHeight = cardWidth * 1.7142;
    card.style.height = `${cardHeight}px`;
  });
});
}

const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')

const open = document.querySelector('.profileBtn')
const open2 = document.querySelector('.projectBtn')
const open3 = document.querySelector('.contactBtn')

const projects = document.querySelectorAll('.projects')


const closeBtns = document.querySelectorAll('.closeBtn');


closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('out');
    
    modal2.classList.add('out');

    modal3.classList.remove('open');
  });
});
open.addEventListener('click', () =>{
  modal.classList.add('open')
  modal.classList.remove('out')
})
open2.addEventListener('click', () =>{
  modal2.classList.add('open')
  modal2.classList.remove('out')
//  projects.forEach((project)=>{
  //  const projectWidth = project.offsetWidth;
   // const projectHeight = projectWidth*1.5142;
    //project.style.height = `${projectHeight}px`;
  //})
})
open3.addEventListener('click', () =>{
  modal3.classList.add('open')
})
document.addEventListener('DOMContentLoaded', () => {
  const projects = document.querySelectorAll('.projects');
  const modalContent =  document.querySelectorAll('.projectModal');
  const backBtns = document.querySelectorAll('.backBtn');
 

  projects.forEach((project) => {
    project.addEventListener('click', () => {
      const content = project.querySelector('.content');
      const image = content.querySelector('img').src;
      console.log(image)
modalContent.forEach((projectModal) =>{
      projectModal.style.backgroundImage = `url(${image})`;
      projectModal.classList.remove('out');

      projectModal.classList.add('open');
})
    });
    backBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        modalContent.forEach((projectModal) =>{
          
          projectModal.classList.add('out');
          
        })
      });
    });
  });




});


