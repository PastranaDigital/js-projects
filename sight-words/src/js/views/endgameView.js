//! Presentation Logic
import View from './View.js';

class EndgameView extends View {
	_parentElement = document.querySelector('#endgame');
	_errorMessage = 'Error. Modal not loaded';
	_message = '';

	addHandlerRender(handler) {
		window.addEventListener('load', (e) => handler());
	}

	toggleActiveClass() {
		const overlay = document.querySelector('#overlay');
		const modal = document.querySelector('#modal');
		modal.classList.toggle('active');
	}

	addHandlerRestartClick(handler) {
		this._parentElement.addEventListener('click', function (e) {
			const btn = e.target.closest('.start-button'); //? search the DOM
			if (!btn) return;

			// console.log('Go click');
			handler('rendering quiz...');
		});
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
					
					<!--<img src="https://cdn3.iconfinder.com/data/icons/geek-3/24/Game_Over_sign_video_game-512.png"/>-->
					<img src="./src/img/gameover.png" width="100%"/>

					<h1> Final Score </>
					<div class="endgame-score">${((this._data.correctAnswers / this._data.totalSelectedQuestions) * 100).toFixed(0)}%</div>

					<!-- https://codepen.io/viestursm/pen/mdJeKVw -->
				</div>
				<div class="modal-footer">
					<button data-start-button class="start-button">NEW GAME</button>
				</div>
			</div>
		`;
	}
}

export default new EndgameView();
