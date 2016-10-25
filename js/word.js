
var inquirer = require("inquirer");


function Hangman(word, correctGuesses, lettersGuessed, attemptsRemaining) {
	this.word = word;
	this.correctGuesses = correctGuesses;
	this.lettersGuessed = lettersGuessed;
	this.attemptsRemaining = 0;
};
