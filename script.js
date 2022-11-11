const card = document.querySelectorAll(".card");

card.forEach(card => {
    card.addEventListener( 'click', function() {
      card.classList.toggle('flipCard');
    });
  });