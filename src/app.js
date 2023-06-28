/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generateRandomCard(PaloCarta, NumeroCarta);
};

function generateRandomCard(cardSuits, numbers) {
  let randomSuit = Math.floor(Math.random() * cardSuits.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);

  let suit = cardSuits[randomSuit];
  let card = numbers[randomNumber];

  let cardHeader = document.getElementById("cardHeader");
  cardHeader.innerHTML = suit;

  let cardBody = document.getElementById("cardBody");
  cardBody.innerHTML = card;

  let cardFooter = document.getElementById("cardFooter");
  cardFooter.innerHTML = suit;

  //Regular altura y ancho
  widthInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      modificartamaño();
    }
  });

  heightInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      modificartamaño();
    }
  });
  function modificartamaño() {
    let newWidth = document.getElementById("widthInput").value;
    let newHeight = document.getElementById("heightInput").value;

    let card = document.querySelector(".card");
    card.style.width = newWidth + "px";
    card.style.height = newHeight + "px";

    //Modificar tamaño de fuente
    let FontSize = Math.min(newWidth, newHeight) * 0.35;

    let cardHeader = document.getElementById("cardHeader");
    cardHeader.style.fontSize = FontSize + "px";

    let cardBody = document.getElementById("cardBody");
    cardBody.style.fontSize = FontSize + "px";

    let cardFooter = document.getElementById("cardFooter");
    cardFooter.style.fontSize = FontSize + "px";
  }
  //Reseteo de color para que no siga siempre a rojo:
  cardHeader.classList.remove("red");
  cardFooter.classList.remove("red");
  cardBody.classList.remove("red");

  //Condicion para cambio de color...
  if (suit == "♥" || suit == "♦") {
    cardHeader.classList.add("red");
    cardFooter.classList.add("red");
    cardBody.classList.add("red");
  }
}

let PaloCarta = ["♦", "♥", "♠", "♣"];
let NumeroCarta = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"];

//Boton generar carta aleatoria
let button = document.getElementById("button");
button.addEventListener("click", function() {
  generateRandomCard(PaloCarta, NumeroCarta);
});

setInterval(function() {
  generateRandomCard(PaloCarta, NumeroCarta);
}, 10000);
