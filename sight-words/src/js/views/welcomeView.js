//! Presentation Logic
import View from './View.js';
import { roundDownTo5 } from '../helper.js';

class WelcomeView extends View {
	_parentElement = document.querySelector('#welcome');
	_errorMessage = 'Error. Modal not loaded';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', (e) => handler());
	}

	toggleActiveClass() {
		const overlay = document.querySelector('#overlay');
		const modal = document.querySelector('#modal');
		// console.log(overlay.classList);
		// overlay.classList.toggle('active');
		modal.classList.toggle('active');
	}

	addHandlerClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.number-button'); //? search the DOM
			if (!btn) return;

			// console.log(btn.dataset.operation);
			handler(btn.dataset.operation, document.getElementById('questions'));
		});
	}

	addHandlerGoClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.start-button'); //? search the DOM
			if (!btn) return;

			// console.log('Go click');
			handler('rendering quiz...');
		});
	}

	setInputValue(input, value) {
		let newInput = input.cloneNode(true);
		const parentBox = input.parentElement.getBoundingClientRect();

		input.id = '';

		newInput.value = value;

		if (value > input.value) {
			// right to left
			input.parentElement.appendChild(newInput);
			input.style.marginLeft = -parentBox.width + 'px';
		} else if (value < input.value) {
			// left to right
			newInput.style.marginLeft = -parentBox.width + 'px';
			input.parentElement.prepend(newInput);
			window.setTimeout(function () {
				newInput.style.marginLeft = 0;
			}, 20);
		}

		window.setTimeout(function () {
			input.parentElement.removeChild(input);
		}, 250);
	}

	setInputButtonState() {
		const inputs = document.getElementsByClassName('number-input-text-box');

		for (let input of inputs) {
			if (input.id.length > 0) {
				// during value transition the old input won't have an id
				const value = input.value;
				const parent = input.parentElement.parentElement;

				if (parent.children[0] && input.hasAttribute('min'))
					parent.children[0].disabled = value <= parseFloat(input.min);

				if (parent.children[2] && input.hasAttribute('max'))
					parent.children[2].disabled = value >= parseFloat(input.max);
			}
		}
	}

	_generateMarkup() {
		return `
			<div id="overlay" class="active">
				<div id="title">
					<h1>Sight Words</h1>
				</div>
			</div>
			<div class="modal active" id="modal">
				<div id="questionamt" class="modal-body">
					<h1>How many words for this game?</h1>

					<!-- https://codepen.io/viestursm/pen/mdJeKVw -->
					<form action="javascript:void(0);">
						<div class="number-input-container">
							<button
								type="button"
								class="number-button button-decrement"
								data-operation="decrement"
							></button>
							<div class="number-input">
								<input
									type="number"
									id="questions"
									name="questions"
									class="number-input-text-box"
									value="10"
									min="5"
									max="${roundDownTo5(this._data.questionBank.length)}"
									data-step="5"
								/>
							</div>
							<button
								type="button"
								class="number-button button-increment"
								data-operation="increment"
							></button>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button data-start-button class="start-button">BEGIN</button>
				</div>
			</div>
		`;
	}
}

export default new WelcomeView();

/*
<div id="overlay" class="active">
	<div id="title">
		<h1>Trivia Game</h1>
	</div>
</div>
<div class="modal active" id="modal">
	<div id="questionamt" class="modal-body">
		<h1>How many questions for this game?</h1>

		<!-- https://codepen.io/viestursm/pen/mdJeKVw -->
		<form action="javascript:void(0);">
			<div class="number-input-container">
				<button
					type="button"
					class="number-button button-decrement"
					onclick="setNumber()"
					data-input-id="questions"
					data-operation="decrement"
				></button>
				<div class="number-input">
					<input
						type="number"
						id="questions"
						name="questions"
						class="number-input-text-box"
						value="10"
						min="5"
						max="100"
						oninput="handleNumberInput()"
						onblur="handleNumberInputBlur(event)"
						data-step="5"
					/>
				</div>
				<button
					type="button"
					class="number-button button-increment"
					onclick="setNumber()"
					data-input-id="questions"
					data-operation="increment"
				></button>
			</div>
		</form>
	</div>
	<div class="modal-footer">
		<button data-start-button class="start-button">GO</button>
	</div>
</div>
*/
