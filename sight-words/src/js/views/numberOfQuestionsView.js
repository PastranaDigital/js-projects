//! Presentation Logic
import View from './View.js';

class NumberOfQuestionsView extends View {
	_parentElement = document.querySelector('#numofquestions');
	_errorMessage = 'Error.';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', (e) => handler(0));
	}

	_generateMarkup() {
		return `
			<p>${this._data.currentQuestion} out of ${this._data.totalSelectedQuestions} words</p>
		`;
	}
}

export default new NumberOfQuestionsView();
