const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost, galgje } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  const wordSoFar = displayWordSoFar(word, guesses);
  console.log(wordSoFar);
  const letter = question("Raad een letter: ");
  // voeg de geraden letter toe aan de array met guesses
  guesses.push(letter);

const winner = isGameWon(word, guesses);
if (winner) {
  console.log('gefeliciteerd!');
  return;
}
const loser = isGameLost(word, guesses);
if (loser) {
  console.log('je hebt verloren :(');
  return;
}
  // volgende ronde! we roepen game nog een keer aan
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
