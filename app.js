let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoices() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter == "r") return "Rock";
	if (letter == "p") return "Paper";
	return "Scissors";
}

function win(user, computer) {
	const smallUserWord = 'user'.fontsize(3).sub();
	const smallCompWord = 'comp'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = convertToWord(user) + smallUserWord + " beats " + convertToWord(computer) + smallCompWord + ". You win!";
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}



function lose(user, computer) {
	const userChoice_div = document.getElementById(user);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = 'user'.fontsize(3).sub();
	const smallCompWord = 'comp'.fontsize(3).sub();
	result_p.innerHTML = convertToWord(user) + smallUserWord + " loses to " + convertToWord(computer) + smallCompWord + ". You lost...";	
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(user, computer) {
	const smallUserWord = 'user'.fontsize(3).sub();
	const smallCompWord = 'comp'.fontsize(3).sub();
	const userChoice_div = document.getElementById(user);
	result_p.innerHTML = convertToWord(user) + smallUserWord + " equal " + convertToWord(computer) + smallCompWord + ". It's a draw!";	
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoices();
	switch(userChoice + computerChoice) {
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice, computerChoice);
			break;
		default:
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"))

	paper_div.addEventListener('click', () => game("p"))

	scissors_div.addEventListener('click', () => game("s"))
}

main();