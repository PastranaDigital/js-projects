import { shuffleArray } from './helper.js';

export const shuffleQuestionOrder = function () {
	shuffleArray(state.questionBank);
};

export const updateNumOfQuestions = function (newNumber) {
	state.totals.totalSelectedQuestions = newNumber;
	// console.log('state.totals.totalSelectedQuestions: ', state.totals.totalSelectedQuestions);
};

export const state = {
	totals: {
		correctAnswers: 0,
		totalSelectedQuestions: 10,
		currentQuestion: 1,
	},
	questionBank: [
		'not',
		'green',
		'be',
		'where',
		'it',
		'look',
		'red',
		'all',
		'orange',
		'we',
		'white',
		'black',
		'three',
		'ten',
		'the',
		'in',
		'one',
		'down',
		'said',
		'two',
		'blue',
		'five',
		'make',
		'seven',
		'big',
		'nine',
		'can',
		'four',
		'brown',
		'little',
		'see',
		'pink',
		'up',
		'run',
		'for',
		'me',
		'you',
		'purple',
		'play',
		'my',
		'is',
		'six',
		'small',
		'jump',
		'away',
		'funny',
		'yellow',
		'eight',
		'find',
		'at',
	],
};
