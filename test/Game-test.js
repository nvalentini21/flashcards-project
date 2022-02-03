const chai = require('chai');
const expect = chai.expect;
const Game = require('../src/Game')
const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Game', function() {

beforeEach(() => {
card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
deck = new Deck([card1, card2, card3])
round = new Round(deck);
game = new Game();
});

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it.skip('should keep track of the currentRound', () => {
    game.start()
    expect(game.currentRound).to.equal(round)
  })

  it.skip('should be able to create cards', () => {
    game.start()
    expect(game.currentRound.deck).to.equal(deck)
  })

  it.skip('should be able to create a new Round using the Deck', () => {
    expect(this.currentRound).to.equal(round)
    expect(round.deck).to.equal(deck)
  })

  it.skip('should invoke a function to display the message in the CLI', () => {})

  it.skip('shoul invoke a function to print a question to allow interactiion with CLI', () => {})

  it.skip('should play the game', () => {
    game.start()
  })


});
