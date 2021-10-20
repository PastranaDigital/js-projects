//! Presentation Logic
import View from './View.js';

class TotalsView extends View {
	_parentElement = document.querySelector('#totals');
	_errorMessage = 'Error. No totals found';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', (e) => handler(0));
	}

	_generateMarkup() {
		return `
			<p>Score: ${this._data.correctAnswers * 100}</p>
			<p>Correct: ${this._data.correctAnswers}</p>
			<p>Total: ${this._data.totalSelectedQuestions}</p>
		`;
	}
}

export default new TotalsView();

/*
<p>Score:</p>
<p>Correct:</p>
<!-- Scoreboard information -->
<p>Total:</p>
*/
