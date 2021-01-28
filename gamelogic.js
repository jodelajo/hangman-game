function displayWordSoFar(word, guesses) {
  // - [x] zet je testje op test.only (later weer weghalen)
  // - [ ] loggen: wat is word, wat is guesses
  // console.log(word);
  // console.log(guesses);

  // - [ ] javascript, ['a', 'b'] -> "_ _ _ _ _ _ _ _ _ _ "
  // - [ ] javascript "splitten" split() -> ['j','a','v','a','s','c','r','i','p','t']
  const letterArray = word.split("");
  console.log(letterArray);

  // - [ ] een loop maken -> ['j','a','v','a','s','c','r','i','p','t']
  let outcome = " ";
  for (i = 0; i < letterArray.length; i++) {
    const lettersInWord = letterArray[i];
    console.log(lettersInWord);


  }
  // - [ ] checken: zit de letter in guesses?
  // - [ ] if else
  // - [ ] zo nee: "_ "
  // - [ ] zo ja: "j " (niet j, maar de letter die we dan checken)
  // - [ ] klaar? -> onze string die we hebben gemaakt returnen
}

function isGameWon(word, guesses) {
  // WRITE ME
}

function isGameLost(word, guesses) {
  // WRITE ME
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
