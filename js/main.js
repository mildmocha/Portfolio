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
