import * as model from './model.js';
import welcomeView from './views/welcomeView.js';
import endgameView from './views/endgameView.js';
import totalsView from './views/totalsView.js';
import questionView from './views/questionView.js';
import numberOfQuestionsView from './views/numberOfQuestionsView.js';
import { MIN_VALUE, MAX_VALUE, STEP } from './config.js';

const controlTotals = function () {
	totalsView.render(model.state.totals);
};

const controlQuestion = function () {
	// shuffleArray(model.state.questionBank[model.state.totals.currentQuestion - 1].answers);
	questionView.render(model.state.questionBank[model.state.totals.currentQuestion - 1]);
};

const controlNumberOfQuestions = function () {
	numberOfQuestionsView.render(model.state.totals);
};

const controlWelcome = function () {
	welcomeView.render(model.state);
};

const controlWelcomeClick = function (value) {};

const controlWelcomeGoClick = function (value) {
	const newValue = value === 'ALL' ? model.state.questionBank.length : value;

	//? update the value inside the data with a new number of questions
	console.log('newValue', newValue);
	model.updateNumOfQuestions(newValue);

	//? close modal
	welcomeView.toggleActiveClass();
	questionView.toggleActiveClass();

	//? render the quiz
	renderQuiz();
};

const controlEndgame = function () {
	questionView.toggleActiveClass();
	endgameView.render(model.state.totals);
	endgameView.addHandlerRestartClick(controlRestartGame);
	// endgameView.toggleActiveClass();
};

const controlRenderGame = function () {
	welcomeView.addHandlerRender(controlWelcome);
	welcomeView.addHandlerClick(controlWelcomeClick);
	// welcomeView.addHandlerButtonClick(controlWelcomeClick);
	welcomeView.addHandlerGoClick(controlWelcomeGoClick);
};

const controlRestartGame = function (payload) {
	console.log(payload);
	window.location.reload(false);

	//? endgameView.removeActiveClass();
	//? model.newGame();
	// welcomeView.toggleActiveClass();

	//? controlWelcome();
	// controlRenderGame();
};

const controlAnswerClick = function (value) {
	// console.log('inside control', value);

	//? increase the score and correct by the value
	model.updateTotals(value);

	//? check that we are not on the last question
	//? update the model current number
	model.advanceCurrentNumber();
	//? render the updated totals
	controlTotals();

	if (model.state.totals.currentQuestion <= model.state.totals.totalSelectedQuestions) {
		//? render the num of questions
		controlNumberOfQuestions();
		//? render next word
		controlQuestion();
	} else {
		controlEndgame();
		// alert('End of quiz');
	}
};

const renderQuiz = function () {
	// console.log(model.state);
	model.shuffleQuestionOrder();

	controlTotals();
	controlQuestion();
	controlNumberOfQuestions();

	questionView.addHandlerAnswerClick(controlAnswerClick);
};

const init = function () {
	// for front page modal buttons
	// enable active states for buttons in mobile safari
	document.addEventListener('touchstart', function () {}, false);

	controlRenderGame();

	//* moved to renderQuiz function
	// model.shuffleQuestionOrder();
	// totalsView.addHandlerRender(controlTotals);
	// questionView.addHandlerRender(controlQuestion);
	// numberOfQuestionsView.addHandlerRender(controlNumberOfQuestions);
};

init();
