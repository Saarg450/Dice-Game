var player1 = "Player 1";
var player2 = "Player 2";

function EditNames() {

    player1 = prompt("Change Player 1 name");
    player2 = prompt("Change Player 2 name");

    document.querySelector("p.Player1").innerHTML = player1;
    document.querySelector("p.Player2").innerHTML = player2;
}

function RollTheDice() {

    document.querySelector("h1").innerHTML = "Finger Crossed!...";

    setTimeout(function () {

        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "dice" + randomNumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dice" + randomNumber2 + ".png");

        if(randomNumber2 === randomNumber1) {

            document.querySelector("h1").innerHTML = "Draw!!";
        }

        else if (randomNumber2 < randomNumber1) {

            document.querySelector("h1").innerHTML = (player1 + " WINS!!");
        }

        else {

            document.querySelector("h1").innerHTML = (player2 + " WINS!!");
        }
    }, 2500);
}