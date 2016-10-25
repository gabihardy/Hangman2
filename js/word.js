
var inquirer = require("inquirer");


function Hangman(word, correctGuesses, lettersGuessed, attemptsRemaining, wins, losses) {
	this.word = word;
	this.correctGuesses = correctGuesses;
	this.lettersGuessed = lettersGuessed;
	this.attemptsRemaining = 0;
	this.wins = 0;
	this.losses = 0;
};
