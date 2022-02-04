const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.newTurn = {};

  }

  returnCurrentCard(){
    return this.deck[0]
  }

  takeTurn(guess){
    this.newTurn = new Turn(guess, this.deck[0])
    this.turns++
    if (!this.newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id)
    }
    this.deck.shift()
    return this.newTurn.giveFeedback()
  }

  calculatePercentCorrect () {
    const num1 = this.incorrectGuesses.length
    const num2 = this.turns
    return (100 - (num1/num2 * 100)).toFixed(2)
  }

  endRound() {
    console.log( `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
