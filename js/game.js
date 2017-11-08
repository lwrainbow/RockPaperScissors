// JavaScript Document
var pcChoise = 0;
var userchoise = 0;
// game on or not
var gameOver = false;
var tie = 0;
var win = 0;
var lose = 0;

// set all game variables to starting position
function reset(){
	pcChoise = 0;
	userchoise = 0;
	gameOver = false;
	document.getElementById("computer").src = "image/computer.png";
	document.getElementById("rock").src="image/rock.png";
	document.getElementById("scissor").src="image/scissor.png";
	document.getElementById("paper").src="image/paper.png";
}

//user's choise
function choose(userchoise) {
	if (gameOver == false) {
	//mark the choose you choise
	if (parseInt(userchoise) === 1){
		document.getElementById("rock").src="image/rock_choose.png";
	}
	if (parseInt(userchoise) === 2){
		document.getElementById("scissor").src="image/scissor_choose.png";
	}
	if (parseInt(userchoise) === 3){
		document.getElementById("paper").src="image/paper_choose.png";
	}
	pc();
	compare(userchoise, pcChoise);
	gameOver = true;
	}
}

// check who win
function compare(choice1, choice2) {
	if (choice1 === choice2){
		document.getElementById("tie").innerHTML = ++tie;
	}
	if (choice1 === 1){
		if (choice2 === 2){
			document.getElementById("win").innerHTML = ++win;
		}
		if (choice2 === 3){
			document.getElementById("lose").innerHTML = ++lose;
		}	
	}
	if (choice1 === 2){
		if (choice2 === 1){
			document.getElementById("lose").innerHTML = ++lose;
		}
		if (choice2 === 3){
			document.getElementById("win").innerHTML = ++win;
		}
	}
	if (choice1 === 3){
		if (choice2 === 2){
			document.getElementById("lose").innerHTML = ++lose;
		}
		if (choice2 === 1){
			document.getElementById("win").innerHTML = ++win;
		}
	}
}

// pc's choose
function pc() {
	//generate a random integer represented one choice
	pcChoise = parseInt(1 + Math.random() * 3);
	if (pcChoise === 1){
		document.getElementById("computer").src="image/rock.png";
	}
	else if (pcChoise === 2){
		document.getElementById("computer").src="image/scissor.png";
	}
	else{
		document.getElementById("computer").src="image/paper.png";
	}
}