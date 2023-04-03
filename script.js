
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        // <img id="rock" src="rock.png">, and so forth for scissors and paper
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    // random input for cpu oppponent
    opponent = choices[Math.floor(Math.random() * 3)]; //0- .999999 * 3 = 0-2.99999
    document.getElementById("opponent-choice").src = opponent + ".png";

    // winner results will increase the scoreboard
    if (you == opponent) {
        yourScore += 0;
        opponentScore += 0;
    }
    // logic for the game. The first loop details what will happen if the user inputs rock
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        // The second set of the loop will detail what will occur if the user inputs scissors as their choice.
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        // The last set defines what will happen if the user inputs paper as their choice. 
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore; 
    document.getElementById("opponent-score").innerText = opponentScore;
}