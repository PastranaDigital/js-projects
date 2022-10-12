const btn = document.querySelector('.custom-btn');

btn.addEventListener('click', () => {
	// const decklist = document.querySelector('.decklist').value;
	const decklist = data;
	const gamesToSimulate = document.querySelector('.games-to-simulate').getAttribute('placeholder');
	// const gamesToSimulate =
	// 	document.querySelector('.games-to-simulate') == ''
	// 		? document.querySelector('.games-to-simulate').getAttribute('placeholder')
	// 		: document.querySelector('.games-to-simulate').value;
	// console.log(decklist);
	console.log(gamesToSimulate);
	// alert('clicked');
	// console.log(parseIncomingDeckList(decklist));
	for (let i = 0; i < gamesToSimulate; i++) {
		let hand = pickStartingHand(parseIncomingDeckList(decklist));
		console.log('hand: ', hand);
	}

	putResultsIn(fakeResults);
});

const parseIncomingDeckList = (list) => {
	let parts = list.split('\n\n');
	let cardsPokemon = expandCards(parts[0].split('\n'));
	let cardsSupporters = expandCards(parts[1].split('\n'));
	let cardsEnergies = expandCards(parts[2].split('\n'));
	let fulldeck = [...cardsPokemon, ...cardsSupporters, ...cardsEnergies];
	return fulldeck;
};

const expandCards = (list) => {
	let expanded = [];
	list.forEach((group) => {
		let parts = splitOnFirstCharacter(group, ' ');
		for (let i = 0; i < parts[0]; i++) {
			// console.log(parts[1]);
			expanded.push(parts[1]);
		}
	});
	return expanded;
};

const splitOnFirstCharacter = (str, char) => {
	const [first, ...rest] = str.split(char);
	const remainder = rest.join(char);
	return [first, remainder];
};

const pickStartingHand = (decklist) => {
	//? Shuffle decklist
	const shuffled = decklist.sort(() => 0.5 - Math.random());

	//? Get sub-array of first n elements after shuffled
	let selected = shuffled.slice(0, 7);

	return selected;
};

const putResultsIn = (results) => {
	const resultsSection = document.querySelector('.resultsSection');
	let resultsHTML = results
		.map((el) => {
			return `<p>${el.name} - ${el.count}</p>`;
		})
		.join('');
	resultsSection.innerHTML = resultsHTML;
};

const fakeResults = [
	{
		name: 'Arceus',
		count: 5,
	},
	{
		name: 'Marnie',
		count: 2,
	},
	{
		name: 'Energy',
		count: 1,
	},
];

//? DECKLIST FROM LIMITLESS
const data = `
4 Arceus V BRS 122
3 Arceus VSTAR BRS 123
2 Bidoof BRS 120
1 Bibarel BRS 121
2 Giratina V LOR 130
2 Giratina VSTAR LOR 131
1 Crobat V SHF 44
1 Pumpkaboo EVS 76

4 Marnie CPA 56
3 Professor's Research BRS 147
3 Boss's Orders BRS 132
1 Raihan EVS 152
4 Quick Ball FST 237
4 Ultra Ball BRS 150
2 Evolution Incense SSH 163
2 Switch SSH 183
2 Big Charm SSH 158
1 Choice Belt BRS 135
4 Path to the Peak CRE 148

4 Grass Energy 1
4 Double Turbo Energy BRS 151
4 Psychic Energy 5
1 Capture Energy RCL 171
1 Powerful Colorless Energy DAA 176`;
