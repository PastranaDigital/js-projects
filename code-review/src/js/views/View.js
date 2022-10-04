//! Parent class for all other views
//! Presentation Logic

export default class View {
	_data;

	/**
	 * Render the received object to the DOM
	 * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
	 * @param {boolean} [render=true] (optional) If false, create markup string instead of rendering to the DOM
	 * @returns {undefined | string} A markup string is returned if render=false
	 * @this {Object} View instance
	 */
	render(data, render = true) {
		if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

		this._data = data;
		const markup = this._generateMarkup();

		if (!render) return markup;
		//? clear the current contents
		this._clear();
		//? add the markup
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	update(data) {
		this._data = data;
		const newMarkup = this._generateMarkup();

		//? converts the string (newMarkup) to a virtual DOM so we can compare the HTML to old version
		const newDOM = document.createRange().createContextualFragment(newMarkup);
		const newElements = Array.from(newDOM.querySelectorAll('*'));
		//? if we used the old render method, the following would have been rendered
		const currentElements = Array.from(this._parentElement.querySelectorAll('*'));

		newElements.forEach((newEl, i) => {
			const curEl = currentElements[i];

			//? only happens on text changes directly
			if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
				curEl.textContent = newEl.textContent;
			}

			//? updates changed attributes
			if (!newEl.isEqualNode(curEl))
				Array.from(newEl.attributes).forEach((attr) => curEl.setAttribute(attr.name, attr.value));
		});
	}

	_clear() {
		this._parentElement.innerHTML = '';
	}

	renderSpinner() {
		const markup = `
			<div class="spinner">
				<svg>
				<use href="${icons}#icon-loader"></use>
				</svg>
			</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	renderError(message = this._errorMessage) {
		const markup = `
			<div class="error">
				<p>${message}</p>
			</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}

	renderMessage(message = this._message) {
		const markup = `
			<div class="message">
				<p>${message}</p>
			</div>
		`;
		this._clear();
		this._parentElement.insertAdjacentHTML('afterbegin', markup);
	}
}
