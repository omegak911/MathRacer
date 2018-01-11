var Car = function() {
	var obj = Object.create(Car.prototype);
	obj.loc = 0;
	return obj;
}

Car.prototype.move = function() { this.loc++; };

var player = Car();
var computer = Car();

//html will need to invoke computer moves after player presses start
function computerMoves() {
	while (computer.loc > 50) {
		setInterval(computer.move(), 10000);
	}
}

//invoke if player input === basicMathProblems results
function playerMoves() {
	player.move();
}

//function that randomly generates Math Problems
var firstParam, secondParam, result;   //global var cuz we're gonna invoke display on it on html

function basicMathProblems() {
	firstParam = randomNum();
	secondParam = randomNum();
	result = firstParam + secondParam; //start with simply addition.  Once page works, create random generated operators

	return result;
}

function randomNum() {
	return Math.floor(Math.random() * 101);
}
basicMathProblems();
console.log(firstParam);