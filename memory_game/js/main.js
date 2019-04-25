console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"

},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var scoreNumber = 0;
var totalNumber = 0;
document.getElementById('score').textContent = scoreNumber;
document.getElementById('total').textContent = totalNumber;
var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		alert("You found a match!");
		scoreNumber+= 1;
		totalNumber+= 1;
	} else {
		console.log("Sorry, try again.");
		alert("Sorry, try again.");
		totalNumber+= 1;
	};
	console.log(scoreNumber);
	console.log(totalNumber);
	document.getElementById('score').textContent = scoreNumber;
	document.getElementById('total').textContent = totalNumber;
};
var resetGame = function() {
	cardsInPlay = [];
	var cardImages = document.getElementsByTagName('img');
	for (var i = 0; i < cardImages.length; i++) {
		cardImages[i].setAttribute('src', 'images/back.png');
	};
};
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	} else if (cardsInPlay.length > 2) {
		resetGame();
	};
};
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};
createBoard();
document.querySelector('button').addEventListener('click', resetGame);
