/**
 * madlibs.js solution
 **/

// Inquirer dependency
var inquirer = require("inquirer");

// The madlib constructor
function Hangman(word, correctGuesses, lettersGuessed, attemptsRemaining) {
	this.word = word;
	this.correctGuesses = correctGuesses;
	this.lettersGuessed = lettersGuessed;
	this.attemptsRemaining = 0;
};
