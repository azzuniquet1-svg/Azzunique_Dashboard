document.addEventListener("DOMContentLoaded", function(){

  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    card.addEventListener("click", function(){
      console.log(this.querySelector("h4").innerText + " clicked");
    });
  });

});
