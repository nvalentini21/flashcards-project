const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turn = 1;
  }

  returnCurrentCard(){
    return this.deck[0]
  }

  test(){
    console.log(this.deck)
  }

  takeTurn(guess, card){
    var newTurn = new Turn(guess, this.deck[0])
    this.turn++
    this.deck.shift()
    return newTurn
  }
}

module.exports = Round;
