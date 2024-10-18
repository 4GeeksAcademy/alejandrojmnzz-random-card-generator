/* eslint-disable */
import "bootstrap";
import "./style.css";

let symbols = ["♦", "♥", "♠", "♣"];
let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

let card = document.querySelector(".card");

let cardTop = document.createElement("div");
let cardMid = document.createElement("div");
let cardBottom = document.createElement("div");

card.appendChild(cardTop).classList = "symbols";
card.appendChild(cardMid);
card.appendChild(cardBottom).classList = "symbols";

let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

cardTop.innerHTML = `<span>${randomSymbol}<span/>`;

cardBottom.innerHTML = `<span>${randomSymbol}<span/>`;
cardBottom.style.justifyContent = "end";
cardBottom.children[0].style.rotate = "180deg";

if (randomSymbol == symbols[0] || randomSymbol == symbols[1]) {
  card.style.color = "red";
}

cardMid.textContent = values[Math.floor(Math.random() * values.length)];
cardMid.classList = "value";
