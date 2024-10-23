import { allCards } from './mergeJSON.js';

let inputStr = '';

// console.log('allCards: ', allCards);

const inputElement = document.querySelector('.input-textarea');
if (inputElement)
	inputElement.addEventListener('change', () => {
		inputStr = inputElement.value;
	});

const buttonElement = document.querySelector('.submit-button');
if (buttonElement) buttonElement.addEventListener('click', processInput);

let error = false;

// METHODS

function processInput() {
	if (inputElement) inputStr = inputElement.value;
	if (!inputStr) {
		error = true;
		console.error('Error: no input');
		return;
	}
	//? convert cards
	let decklist = convertStringToCardObj(inputStr);

	//? add images to card objects
	decklist = addImagesToCardObj(decklist, allCards);

	//? build card images
	buildDeckImage(decklist);

	//? hide other things

	const inputWrapper = document.querySelector('.input-wrapper');
	if (inputWrapper) inputWrapper.classList.add('hide');
	const buttonWrapper = document.querySelector('.button-wrapper');
	if (buttonWrapper) buttonWrapper.classList.add('hide');

	console.log('decklist: ', decklist);
	// return [...cardObj];
}

const convertStringToCardObj = (decklist) => {
	/*
4 Roaring Moon TEF 109
3 Koraidon TEF 119
3 Flutter Mane TEF 78
2 Roaring Moon ex PAR 124
1 Radiant Greninja ASR 46

4 Explorer's Guidance TEF 147
4 Professor Sada's Vitality PAR 170
4 Earthen Vessel PAR 163
4 Nest Ball PAF 84
3 Dark Patch ASR 139
3 Pokégear 3.0 SVI 186
2 Ultra Ball PAF 91
2 Counter Catcher PAR 160
2 Super Rod PAL 188
1 Prime Catcher TEF 157
1 Pal Pad SVI 182
1 Switch Cart ASR 154
4 Ancient Booster Energy Capsule PAR 159
4 PokéStop PGO 68

6 Darkness Energy 7
2 Fighting Energy 6
	*/
	let setMap = {
		ASR: 'swsh10',
		BRS: 'swsh9',
		BST: 'swsh5',
		CEL: 'cel25',
		CRE: 'swsh6',
		CRZ: 'swsh12pt5',
		EVS: 'swsh7',
		FST: 'swsh8',
		FUT20: 'fut20',
		LOR: 'swsh11',
		PAF: 'sv4pt5',
		PGO: 'pgo',
		SVP: 'svp',
		SWP: 'swp',
		SHF: 'swsh45',
		SIT: 'swsh12',
		SVE: 'sve',
		SVI: 'sv1',
		PAL: 'sv2',
		OBF: 'sv3',
		MEW: 'sv3pt5',
		PAR: 'sv4',
		TEF: 'sv5',
	};
	let dataArray = decklist.split('\n');
	let cardArray = [];
	dataArray.forEach((el) => {
		if (el.includes('Pokémon:') || el.includes('Trainer:') || el.includes('Energy:')) {
			console.log('Skipped: ', JSON.stringify(el));
			return;
		}
		let arr = el.split(' ');
		let cardObj = {
			count: Number(arr.shift()),
			number: Number(arr.pop()),
			ptcgoCode: arr.pop(),
			name: arr.join(' '),
		};
		cardObj.set = setMap[cardObj?.ptcgoCode];
		//? skip Titles or spaces
		if (isNaN(cardObj.count) || isNaN(cardObj.number)) return;
		cardArray.push(cardObj);
	});

	return cardArray;
};

const addImagesToCardObj = (decklist, allCards) => {
	if (!decklist) return;

	//? search thru allCards for a match
	decklist.forEach((el) => {
		allCards.forEach((c) => {
			if (c.number == el.number && (c.set.ptcgoCode == el.ptcgoCode || c.set.id == el.set)) {
				el.imageUrl = c.images.small;
			} else if (el.ptcgoCode == 'Energy' && c.set.id == 'sve' && el.number == c.number) {
				el.imageUrl = c.images.small;
			}
		});
		if (!el.imageUrl) {
			el.displayName = `${el.name} ${el.ptcgoCode} ${el.number}`;
			el.imageUrl = 'src/img/default_card2.png';
		}
	});
	return decklist;
};

const buildDeckImage = (decklist) => {
	const outputElement = document.querySelector('.output-wrapper');
	const decklistContent = document.querySelector('.decklist-content');

	let decklistHtml = decklist
		.map((card) => {
			return `
<div class="card">
	<!-- <img class="image" src=${card.imageUrl}> -->
	<div class="image" style="
	background-image: url('${card.imageUrl}'); background-size: cover;">${card.displayName ? card.displayName : ''}</div>
	<span class="count">${card.count}</span>
</div>
		`;
		})
		.join('');

	if (outputElement) {
		outputElement.classList.remove('hide');
		decklistContent.innerHTML = decklistHtml;
	}
};
