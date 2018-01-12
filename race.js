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
var firstParam, secondParam, result, randomOperator;   //global var cuz we're gonna invoke display on it on html

function basicMathProblems() {
	randomOperator = Math.floor(Math.random() * 3); //*num changes with additional operators.  Right now we are using just 2
	
	if (randomOperator < 2) {
		firstParam = randomNumUpTo100();
		secondParam = randomNumUpTo100();
		if (randomOperator === 0) {
			result = firstParam + secondParam;
		} else {
			result = firstParam - secondParam;
		}
	} else if (randomOperator >= 2) {
		firstParam = randomNumUpTo15();
		secondParam = randomNumUpTo15();
		if (randomOperator === 2) {
			result = firstParam * secondParam;
		}
	}
	return result;
}

function randomNumUpTo100() {
	return Math.floor(Math.random() * 101);
}

function randomNumUpTo15() {
	return Math.floor(Math.random() * 16);
}