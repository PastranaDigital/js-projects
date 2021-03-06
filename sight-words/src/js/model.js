import { shuffleArray } from './helper.js';

export const shuffleQuestionOrder = function () {
	shuffleArray(state.questionBank);
};

export const updateNumOfQuestions = function (newNumber) {
	state.totals.totalSelectedQuestions = newNumber;
	// console.log('state.totals.totalSelectedQuestions: ', state.totals.totalSelectedQuestions);
};

export const updateTotals = function (value) {
	state.totals.correctAnswers += value;
};

export const advanceCurrentNumber = function () {
	state.totals.currentQuestion++;
};

export const newGame = function () {
	state.totals.correctAnswers = 0;
	state.totals.currentQuestion = 1;
};

export const state = {
	totals: {
		correctAnswers: 0,
		totalSelectedQuestions: 10,
		currentQuestion: 1,
	},
	questionBank: [
		'I',
		'a',
		'am',
		'see',
		'like',
		'the',
		'me',
		'can',
		'look',
		'at',
		'and',
		'go',
		'to',
		'my',
		'said',
		'here',
		'is',
		'this',
		'it',
		'got',
		'was',
		'love',
		'in',
		'on',
		'play',
		'up',
		'will',
		'do',
		'fun',
		'we',
		'come',
		'went',
		'she',
		'you',
		'did',
		'get',
		'for',
		'are',
		'make',
		'they',
		'bad',
		'no',
		'now',
		'has',
		'her',
		'ball',
		'him',
		'out',
		'stop',
		'us',
		'with',
		'quack',
		'jump',
		'zoo',
		'have',
		'of',
		'rain',
		'eat',
		'kite',
		'vest',
		'maroon',
		'not',
		'green',
		'be',
		'where',
		'red',
		'call',
		'fall',
		'all',
		'orange',
		'white',
		'black',
		'three',
		'ten',
		'one',
		'down',
		'two',
		'blue',
		'five',
		'seven',
		'big',
		'nine',
		'four',
		'brown',
		'little',
		'pink',
		'up',
		'run',
		'sun',
		'purple',
		'six',
		'small',
		'away',
		'funny',
		'yellow',
		'eight',
		'find',
		'happy',
		'sad',
		'angry',
		'mad',
		'made',
	],
};
