class Card {
  constructor(id, question, answers, correctAnswer) {
    this.id = id
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card;

//will probably need ot use for each method
//on prototype data to map each aspect of the data
//to the card?
