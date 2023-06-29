document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const cardWidth = card.offsetWidth;
    const cardHeight = cardWidth * 1.7142;
    card.style.height = `${cardHeight}px`;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  setTimeout(() => {
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("flip");
      }, index * 500);
    });
  }, 200);
});
const modal = document.querySelector('.modal')
const modal2 = document.querySelector('.modal2')
const modal3 = document.querySelector('.modal3')

const open = document.querySelector('.profileBtn')
const open2 = document.querySelector('.projectBtn')
const open3 = document.querySelector('.contactBtn')

const closeBtns = document.querySelectorAll('.closeBtn');


closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('open');
    modal2.classList.remove('open');
    modal3.classList.remove('open');
  });
});
open.addEventListener('click', () =>{
  modal.classList.add('open')
})
open2.addEventListener('click', () =>{
  modal2.classList.add('open')
})
open3.addEventListener('click', () =>{
  modal3.classList.add('open')
})


