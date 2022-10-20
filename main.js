let playerTurn = 0;
let heading = document.getElementById('heading');
let box = document.querySelectorAll(".box");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

function hasPlayerWon(player_char) {
    let colour = 'red';
    if(player_char == 'O') colour = 'blue';
    if(box1.innerText == player_char && box2.innerText == player_char && box3.innerText == player_char) {

        return true;

    } else if(box4.innerText == player_char && box5.innerText == player_char && box6.innerText == player_char) {

        return true;

    } else if(box7.innerText == player_char && box8.innerText == player_char && box9.innerText == player_char) {        

        return true;

    } else if(box1.innerText == player_char && box5.innerText == player_char && box9.innerText == player_char) {

        return true;

    } else if(box3.innerText == player_char && box5.innerText == player_char && box7.innerText == player_char) {

        return true;

    } else if(box1.innerText == player_char && box4.innerText == player_char && box7.innerText == player_char) {

        return true;

    } else if(box2.innerText == player_char && box5.innerText == player_char && box8.innerText == player_char) {

        return true;

    } else if(box3.innerText == player_char && box6.innerText == player_char && box9.innerText == player_char) {

        return true;
        
    }

    return false;
}

box.forEach(item => {
    item.addEventListener('click', function () {
        if(playerTurn % 2 == 0) {
            if(item.innerText != "O" && item.innerText != "X") {
                item.innerText = "X";
                let has_won = hasPlayerWon('X');
                if(has_won == false) {
                    heading.innerText = "🔥 Player Two's Turn 🔥";
                } else {
                    heading.innerText = "🔥 Yay! Player One Won! 🔥";
                }
            }
        } else if(playerTurn % 2 == 1) {
            if(item.innerText != "X" && item.innerText != "O") {
                item.innerText = "O";
                let has_won = hasPlayerWon('O');
                if(has_won == false) {
                    heading.innerText = "🔥 Player One's Turn 🔥";
                } else {
                    heading.innerText = "🔥 Yay! Player Two Won! 🔥";
                }
            }   
        }
        playerTurn++;
    });
});

let btn = document.getElementById("btn");

btn.addEventListener('mousedown', function () {

    box.forEach(item => {
        item.innerText = "";
    });

    heading.innerText = "🔥 Begin Game 🔥"
 
});