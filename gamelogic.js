function displayWordSoFar(word, guesses) {
  const letterInWordArray = word.split("");

  let output = "";
  for (let i = 0; i < letterInWordArray.length; i++) {
    const letterInWord = letterInWordArray[i];
    const isletterGuessed = guesses.includes(letterInWord);
    if (!isletterGuessed) {
      output = output + "_ ";
    }
    if (isletterGuessed) {
      output = output + letterInWord + " ";
    }
  }
return output;
}

function isGameWon(word, guesses) {
  //doel:
  // word = "javascript" guesses = ["j", "a", "v", "s", "c", "r", "i", "p", "t"] true
  // word = "javascript" guesses = [], ["j", "a"] false

  // strategie:
  // kunnen we 1 letter vinden die je niet hebt geraden? return false
  // Kunnen we niet 1 letter vinden die je niet hebt geraden? return true

  // - [ ] loggen: wat is word & guesses (tussendoor loggen per stap)

  // - [ ] word -> word.split("")
  // - [ ] loopen over dat array met de letters van het woord
  // - [ ] voor elke letter in het woord
  // - [ ] Zit deze letter in guesses -> guesses.includes(letter)
  // - [ ] if in de loop
  // - [ ] in guesses true -> gaan we door
  // - [ ] in guesses false -> return false
  // - [ ] Zijn we aan het einde van de loop? aan het einde van die functie return true

  const splitWord = word.split('');

  let output = "";
  for (let i = 0; i < splitWord.length; i++) {
    const letterInSplitWord = splitWord[i];
    const letterInGuesses = guesses.includes(letterInSplitWord);
    if (!letterInGuesses) {
      return false;
    }
  }
  return true;
}


function isGameLost(word, guesses) {
  //DOEL:
  // word = "javascript"; guesses = ["q", "w", "e", "y", "u", "o", "d"]; -> true
  // word = "javascript"; guesses = ["q", "w", "e", "a", "t"]; -> false
  // STRATEGIE:
  // fouten tellen
  // 7 fout (of meer?) -> return true
  // minder dan 7 fout -> return false

  // - [ ] for loop over de guesses
  // - [ ] voor elke guess
  // - [ ] zit deze guess (letter) in het woord word.includes(guess)
  // - [ ] counter aanmaken -> start bij 0
  // - [ ] if
  // - [ ] als true (we doen niets)
  // - [ ] als false "+ doen" -> counter met 1 verhogen
  // - [ ] aan het eind van de functie if statement
  // - [ ] if
  // - [ ] count is 7 -> return true
  // - [ ] count is minder dan 7 -> return false

let count = 0;
  for (let i = 0; i < guesses.length; i++) {
    const eachGuess = guesses[i];
    const isLetterGuessed = word.includes(eachGuess);

    if(!isLetterGuessed) {
      count = count + 1;
      galgje (count);
    }
    //console.log('wat is dit?', isLetterGuessed)

  }
if (count === 7) {
  return true

}
if (count <= 7) {
  return false
}

}

function galgje(count) {
  if (count === 1) {
    console.log(`
    |
    |
    |
    |
    |
    ===========`);
  }
  else if (count === 2) {
    console.log(`
    ___________
    |
    |
    |
    |
    |
    ===========`);
  }

  else if (count === 3) {
    console.log(`
    ___________
    | /      |
    |/
    |
    |
    |
    ===========`);
  }
  else if (count === 4) {
    console.log(`
    ___________
    | /      |
    |/       o
    |
    |
    |
    ===========`);
  }
  else if (count === 5) {
    console.log(`
    ___________
    | /      |
    |/      _o_
    |
    |
    |
    ===========`);
  }
  else if (count === 6) {
    console.log(`
    ___________
    | /      |
    |/      _o_
    |        O
    |
    |
    ===========`);
  }
  else if (count === 7) {
    console.log(`
    ___________
    | /      |
    |/      _o_
    |        O
    |       / \\
    |
    ===========`);
  }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
  galgje: galgje,
};
