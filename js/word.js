
var inquirer = require("inquirer");


function Hangman(word, correctGuesses, lettersGuessed, attemptsRemaining, wins, losses) {
	this.word = word;
	this.correctGuesses = correctGuesses;
	this.lettersGuessed = lettersGuessed;
	this.attemptsRemaining = 10;
	this.wins = 0;
	this.losses = 0;
};

if (this.lettersGuessed.indexOf(letter) === -1) {
    this.lettersGuessed.push(letter);

   for (i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
            valid = true;
            this.validList[i] = letter;
        }
    }
    if (!valid) {
        this.attemptsRemaining = this.attemptsRemaining - 1;
    }
}