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
  let output = '';
  for (i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    console.log(letterInWord);

    // - [ ] checken: zit de letter in guesses?
    const isLetterGuessed = guesses.includes(letterInWord);
    console.log(isLetterGuessed);
    console.log(letterInWord, 'geraden?', isLetterGuessed);

    // - [ ] if else
    // - [ ] zo nee: "_ "
    if (!isLetterGuessed) {
      output = output + '_ ';
    }
    // - [ ] zo ja: "j " (niet j, maar de letter die we dan checken)
    if (isLetterGuessed) {
      output = output + letterInWord + ' ';
    }
  }
  console.log(output)
  // - [ ] klaar? -> onze string die we hebben gemaakt returnen
return output;
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
