const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')
const Turn = require('../src/Turn')

describe('Round', function() {

beforeEach(() => {
 card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
 card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
 card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  deck = new Deck([card1, card2, card3])
  round = new Round(deck);
});

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store the current card from deck', function() {
    round.test();
    expect(round.deck[0]).to.equal(card1);
  });

  it('should have a default turn count of 1', () => {
    expect(round.turn).to.equal(1);
  })

  it('should return the current card', () => {
    round.returnCurrentCard()
    expect(round.returnCurrentCard()).to.equal(card1)
  })

  it('should instantiate a new turn when a guess is made', () => {
    var roundTurn = round.takeTurn()
    expect(roundTurn).to.be.an.instanceof(Turn)
  })

  it('add 1 to the turn count when a guess is made', () => {
    round.takeTurn()
    expect(round.turn).to.equal(2)
  })

  it('update the current card to the next card in the deck', () => {
    round.takeTurn()
    expect(round.deck[0]).to.equal(card2)
  })
});
