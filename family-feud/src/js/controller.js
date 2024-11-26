import { questions } from './questions.js';

const openingElement = document.querySelector('.opening');
const beginButton = document.querySelector('.begin-button');
const teamOneInput = document.getElementById('team-one-input');
const teamTwoInput = document.getElementById('team-two-input');

const questionElement = document.querySelector('.question');
const answerBlock = document.querySelector('.answer-wrapper');
const nextQuestionButton = document.querySelector('.next-question');
const currentQuestion = document.querySelector('.current-question');

const teamOnePoints = document.querySelector('.team-one');
const teamTwoPoints = document.querySelector('.team-two');
const teamOneButton = document.getElementById('team-one-button');
const teamTwoButton = document.getElementById('team-two-button');

const questionPoints = document.querySelector('.question-points');
const strikeWrapper = document.querySelector('.strike-wrapper');
const strikeButton = document.querySelector('.strike');

let currentQuestionIndex = 0;
let currentQuestionScore;
let totalQuestions = questions.length;
let teamOneScore = 0;
let teamTwoScore = 0;
let teamOneName;
let teamTwoName;

let strikeCount;

// listen for input to Team Names
teamOneInput.addEventListener('change', (event) => {
	console.log('event.target.value: ', event.target.value);
	teamOneName = event.target.value;
});

teamTwoInput.addEventListener('change', (event) => {
	console.log('event.target.value: ', event.target.value);
	teamTwoName = event.target.value;
});

// listen for click on Team Names to add score

teamOneButton.addEventListener('click', () => {
	teamOneScore += currentQuestionScore;
	teamOnePoints.innerHTML = teamOneScore;
});

teamTwoButton.addEventListener('click', () => {
	teamTwoScore += currentQuestionScore;
	teamTwoPoints.innerHTML = teamTwoScore;
});

const populateQuestion = (currentIndex) => {
	strikeCount = 1;
	updateStrikeCount();
	currentQuestionScore = 0;
	teamOnePoints.innerHTML = teamOneScore;
	teamTwoPoints.innerHTML = teamTwoScore;
	questionPoints.innerHTML = currentQuestionScore;
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
	currentQuestionScore += answer.points;
	questionPoints.innerHTML = currentQuestionScore;
	const answerBlock = document.getElementById(e.target.id);
	answerBlock.innerHTML = newHtml;
}

const makeQuestionBlocksClickable = () => {
	const answers = document.querySelectorAll('.answer');
	answers.forEach((answer) => answer.addEventListener('click', revealAnswer));
};

// ---------------- OPENING ----------------------------------

beginButton.addEventListener('click', () => {
	openingElement.remove();
	console.log(currentQuestionIndex, totalQuestions);
	populateQuestion(currentQuestionIndex);
	makeQuestionBlocksClickable();
	teamOneButton.innerHTML = teamOneName || 'Team One';
	teamTwoButton.innerHTML = teamTwoName || 'Team Two';
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

const updateStrikeCount = () => {
	switch (strikeCount) {
		case 1:
			strikeButton.innerHTML = '1st Strike';
			break;
		case 2:
			strikeButton.innerHTML = '2nd Strike';
			break;
		case 3:
			strikeButton.innerHTML = '3rd Strike';
			break;
		default:
			strikeButton.innerHTML = '1st Strike';
			break;
	}
};

strikeButton.addEventListener('click', () => {
	console.log('strike: ', strikeCount);
	// strikeWrapper.style.scale = strikeWrapper.style.scale == 0 ? 1 : 0;
	let strikes = [];
	for (let index = 0; index < strikeCount; index++) {
		strikes.push(`<img src="./src/img/FamilyFeudStrike.png" id="strike-x">`);
	}
	strikeWrapper.innerHTML = strikes.map((el) => el).join('');
	strikeWrapper.style.scale = 1;

	const buzzerSound = document.getElementById('buzzer');
	buzzerSound.currentTime = 0; //? rewind to beginning
	buzzerSound.volume = 0.25;
	buzzerSound.play();
	strikeCount++;
	if (strikeCount > 3) {
		strikeCount = 1;
	}
	setTimeout(() => {
		strikeWrapper.style.scale = 0;
		updateStrikeCount();
	}, 1000);
});

//TODO
// add more questions
