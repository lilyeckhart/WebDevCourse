let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let playerOneDice = document.querySelector(".img1");
let playerTwoDice = document.querySelector(".img2");

if (randomNumber1 === 1) {
    playerOneDice.setAttribute("src", "images/dice1.png");
} else if (randomNumber1 === 2) {
    playerOneDice.setAttribute("src", "images/dice2.png");
} else if (randomNumber1 === 3) {
    playerOneDice.setAttribute("src", "images/dice3.png");
} else if (randomNumber1 === 4) {
    playerOneDice.setAttribute("src", "images/dice4.png");
} else if (randomNumber1 === 5) {
    playerOneDice.setAttribute("src", "images/dice5.png");
} else {
    playerOneDice.setAttribute("src", "images/dice6.png");
}

if (randomNumber2 === 1) {
    playerTwoDice.setAttribute("src", "images/dice1.png");
} else if (randomNumber2 === 2) {
    playerTwoDice.setAttribute("src", "images/dice2.png");
} else if (randomNumber2 === 3) {
    playerTwoDice.setAttribute("src", "images/dice3.png");
} else if (randomNumber2 === 4) {
    playerTwoDice.setAttribute("src", "images/dice4.png");
} else if (randomNumber2 === 5) {
    playerTwoDice.setAttribute("src", "images/dice5.png");
} else {
    playerTwoDice.setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}