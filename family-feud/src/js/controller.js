import { questions } from './questions.js';

const openingElement = document.querySelector('.opening');
const questionElement = document.querySelector('.question');
const answerBlock = document.querySelector('.answer-wrapper');
const nextQuestionButton = document.querySelector('.next-question');
const currentQuestion = document.querySelector('.current-question');
const strikeWrapper = document.querySelector('.strike-wrapper');
const strikeButton = document.querySelector('.strike');

let currentQuestionIndex = 0;
let totalQuestions = questions.length;

const populateQuestion = (currentIndex) => {
	questionElement.innerHTML = questions[currentIndex].question;
	let allAnswers = [];
	let columnLimit = Math.ceil(questions[currentIndex].answers.length / 2);
	questions[currentIndex].answers.forEach((element, index) => {
		if (index === 0 || index === columnLimit) {
			allAnswers.push('<div class="column-wrapper">');
		}
		allAnswers.push(`
			<div class="answer" id="answerIndex-${index}">
				<div class="number">${index + 1}</div>
			</div>
		`);
		if (index === columnLimit - 1 || index === questions[currentIndex].answers.length - 1) {
			allAnswers.push('</div>');
		}
	});
	console.log(allAnswers);
	answerBlock.innerHTML = allAnswers.map((el) => el).join('');
	// currentQuestion.innerHTML = `Current Question: ${currentQuestionIndex + 1}`;
};

function revealAnswer(e) {
	const dingSound = document.getElementById('ding');
	dingSound.currentTime = 0; //? rewind to beginning
	dingSound.play();
	console.log('e.target.id: ', e.target.id.split('-')[1]);
	let answer = questions[currentQuestionIndex].answers[e.target.id.split('-')[1]];
	console.log(answer.title, answer.points);
	let newHtml = `
			<div class="title">${answer.title}</div>
			<div class="points">${answer.points}</div>
	`;
	const answerBlock = (document.getElementById(e.target.id).innerHTML = newHtml);
}

const makeQuestionBlocksClickable = () => {
	const answers = document.querySelectorAll('.answer');
	answers.forEach((answer) => answer.addEventListener('click', revealAnswer));
};

// ---------------- OPENING ----------------------------------

openingElement.addEventListener('click', () => {
	openingElement.remove();
	console.log(currentQuestionIndex, totalQuestions);
	populateQuestion(currentQuestionIndex);
	makeQuestionBlocksClickable();
});

nextQuestionButton.addEventListener('click', () => {
	currentQuestionIndex++;
	console.log(currentQuestionIndex, totalQuestions);
	if (currentQuestionIndex + 1 <= totalQuestions) {
		console.log('next question loading');
		populateQuestion(currentQuestionIndex);
		makeQuestionBlocksClickable();
	} else {
		console.log('all done');
	}
});

strikeButton.addEventListener('click', () => {
	console.log('strike open');
	// strikeWrapper.style.scale = strikeWrapper.style.scale == 0 ? 1 : 0;
	strikeWrapper.style.scale = 1;
	const buzzerSound = document.getElementById('buzzer');
	buzzerSound.currentTime = 0; //? rewind to beginning
	buzzerSound.play();
	setTimeout(() => {
		strikeWrapper.style.scale = 0;
	}, 1000);
});

//TODO
// track score
// type in team name
// add more questions
// add music/effects
// track # of strikes
