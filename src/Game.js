const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

class Game {
  constructor(round) {
    this.currentRound = {};
  }


  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    const cards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer))
    const deck = new Deck(cards)
    const newRound = new Round (deck)
    this.currentRound = newRound;
    this.printMessage(deck, newRound)
    this.printQuestion(newRound)
  }
}

module.exports = Game;
