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

	addHandlerAnswerClick(handler) {
		const buttons = document.querySelector('.button-wrapper');
		buttons.addEventListener('click', function (e) {
			const btn = e.target.closest('.answers'); //? search the DOM
			if (!btn) return;
			// console.log(+btn.dataset.value);
			// console.log('Answer click');
			handler(+btn.dataset.value);
		});
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
