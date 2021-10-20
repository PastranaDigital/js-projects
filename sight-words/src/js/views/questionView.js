//! Presentation Logic
import View from './View.js';

class QuestionView extends View {
	_parentElement = document.querySelector('.question-block');
	_errorMessage = 'Error. No question found';
	_message = '';

	toggleActiveClass() {
		const wrapper = document.querySelector('.question-wrapper');
		wrapper.classList.toggle('active');
	}

	addHandlerRender(handler) {
		window.addEventListener('load', (e) => handler());
	}

	_generateMarkup() {
		return `
			<div id="question">
				${this._data}
			</div>
		`;
	}
}

export default new QuestionView();
