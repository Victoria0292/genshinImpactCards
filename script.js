const cards = document.querySelectorAll(".card");

//Loops through each card
cards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("cardFlip");
  });
  //Listening for a click, when click happens function will run
  card.addEventListener("click", () => {
    removeActiveClasses();
    card.classList.add("active");
  });
});

//Removes the classes that are not active
function removeActiveClasses() {
  //Loops through each card
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}
