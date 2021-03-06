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
			<div id="totals">
				<table>
					<tr>
						<td class="table-heading">
						Score
						</td>
						<td class="table-heading">
						Correct
						</td>
						<td class="table-heading">
						Wrong
						</td>
						<td class="table-heading">
						Words
						</td>
					</tr>
					<tr>
						<td class="table-body">${
							this._data.currentQuestion === 1
								? 0
								: ((this._data.correctAnswers / (this._data.currentQuestion - 1)) * 100).toFixed(0)
						}%
						</td>
						<td class="table-body">${this._data.correctAnswers}
						</td>
						<td class="table-body">${this._data.currentQuestion - 1 - this._data.correctAnswers}
						</td>
						<td class="table-body">${this._data.currentQuestion - 1}
						</td>
					</tr>
				</table>
			</div>
			`;
	}
}

export default new TotalsView();

/*
<p>Score: ${this._data.correctAnswers * 100}</p>
<p>Correct: ${this._data.correctAnswers}</p>
<p>Total: ${this._data.totalSelectedQuestions}</p>
*/
