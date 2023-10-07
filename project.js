// guess a number
// 1. generate random number
// 2. make user guess
// 3. subtract user chances of guessing if guess is wrong
// 4. let user know if they guessed it right or not
// 5. repeat

const prompt = require('prompt-sync')()

let chances = 10

const userGuess = () => {
  console.log('Guess between 1-10' + '\nGuess chances: ' + chances)
  const userNumber = prompt('Guess the number: ')
  const number = parseFloat(userNumber)
  return number
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1
}

const game = () => {
  while (true) {
    const guessedNumber = userGuess()
    const randomNumber = getRandomNumber()
    if (guessedNumber != randomNumber) {
      console.log(randomNumber + '\nIncorrect, try again.\n')
      chances--
    }

    if (guessedNumber === randomNumber) {
      console.log('You guessed the number ' + randomNumber + ' !')
      const guessAgain = prompt(
        'Do you want to guess again, (y/n)? '
      ).toLowerCase()

      if (guessAgain == 'y') {
        chances = 10
        game()
      } else break
    }

    if (chances === 0) {
      console.log('You lost, better guess next time:>>>')
      break
    }
  }
}

game()
