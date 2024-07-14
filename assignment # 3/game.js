//PRACTICE EXERCISE # 4.5
let prize = prompt("pick a number 0-10")
let output = "My Selection: ";
switch (prize){
 case 0:
 output += "Gold ";
 case 1:
 output += "Coin ";
 break;
 case 2:
 output += "Big ";
 case 3:
 output += "Box of ";
 case 4:
 output += "Silver ";
 case 5:
 output += "Bricks ";
 break;
 default:
 output += "Sorry Try Again";
}
console.log(output);

// PROJECTS
// EVALUATING A NUMBER GAME:
let value = prompt("What number?");
val = Number(value);
let num = 100;
let message = "nothing";
if (value > num) {
 message = value + " was greater than " + num;
} else if (value === num) {
    message = value + " was equal to " + num;
} else {
 message = value + " is less than " + num;
}
console.log(message);
console.log(message);

// FRIEND CHEACKER GAME
let person = prompt("Enter a name");
let showNumber;
switch (person) {
 case "John" :
 case "Larry" :
 case "Jane" :
 case "Laurence" :
 showNumber = person + " is my friend";
 break;
 default :
 message = "I don't know " + person;
}
console.log(showNumber);

// ROCKER PAPER SCISSORS GAME:
const myArr = ["Rock", "Paper", "Scissors"];
let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let result = "player " + myArr[player] + " vs computer " +
myArr[computer] + " ";
if (player === computer) {
 result += "it's a tie";
} else if (player > computer) {
 if (computer == 0 && player == 2) {
 result += "Computer Wins";
 } else {
 result += "Player Wins";
 }
} else {
 if (computer == 2 && player == 0) {
result += "Player Wins";
 } else { 
    result += "Computer Wins";
 }
}
console.log(result);