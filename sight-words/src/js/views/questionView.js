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

	// _generateMarkupAnswer(ans) {
	// 	ans = ans.split('@');
	// 	return `
	// 		<div class="answers">
	// 			<p data-answer='${ans[1] ? ans[1] : 'false'}'>${ans[0]}<p>
	// 		</div>
	// 	`;
	// }
}

export default new QuestionView();
