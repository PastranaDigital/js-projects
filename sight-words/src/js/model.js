import { shuffleArray } from './helper.js';

export const shuffleQuestionOrder = function () {
	console.log('state.totals.totalSelectedQuestions: ', state.totals.totalSelectedQuestions);
	if (Number(state.totals.totalSelectedQuestions) === 15) {
		// take the first words for Maya's list
		state.questionBank = state.questionBank.slice(0, 45);
	}
	shuffleArray(state.questionBank);
	console.log('state.questionBank: ', state.questionBank);
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
		'can',
		'the',
		'see',
		'is',
		'jump',
		'make',
		'away',
		'I',
		'a',
		'am',
		'like',
		'me',
		'look',
		'at',
		'and',
		'go',
		'to',
		'my',
		'bad',
		'this',
		'it',
		'was',
		'love',
		'in',
		'on',
		'do',
		'you',
		'has',
		'no',
		'now',
		'of',
		'did',
		'fun',
		'we',
		'not',
		'be',
		'down',
		'all',
		'big',
		'up',
		'run',
		'happy',
		'sad',
		'angry',
		'mad', // 45 easy words
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'purple',
		'white',
		'black',
		'pink',
		'brown', // 10 colors
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten', // 10 numbers
		'got',
		'said',
		'here',
		'play',
		'will',
		'come',
		'went',
		'she',
		'get',
		'for',
		'are',
		'they',
		'her',
		'ball',
		'him',
		'out',
		'stop',
		'us',
		'with',
		'quack',
		'zoo',
		'have',
		'rain',
		'eat',
		'kite',
		'vest',
		'maroon',
		'where',
		'call',
		'fall',
		'little',
		'sun',
		'small',
		'away',
		'funny',
		'find',
		'made',
	],
};
