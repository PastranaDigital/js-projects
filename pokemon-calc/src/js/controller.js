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
	// showSpinner(true);
	// alert('clicked');
	console.log(parseIncomingDeckList(decklist).length);
	let results = [];
	let isMulligan = 0;
	let isArcEnergy = 0;
	for (let i = 0; i < gamesToSimulate; i++) {
		let hand = pickStartingHand(parseIncomingDeckList(decklist));
		// console.log('hand: ', hand);
		// console.log(checkHandForMulligan(hand));
		if (checkHandForMulligan(hand)) {
			isMulligan++;
		} else {
			if (checkHandForArcEnergy(hand)) isArcEnergy++;
		}
		results.push(...hand);
	}
	// console.log(results);
	results = results.sort();
	results = results.reverse();
	// console.log(results);
	let mulliganPercentage = ((isMulligan / gamesToSimulate) * 100).toFixed(1);
	console.log(`Mulligan: ${mulliganPercentage}% | ${isMulligan}`);

	let arcEnergyPercentage = ((isArcEnergy / (gamesToSimulate - isMulligan)) * 100).toFixed(1);
	console.log(`Arc + Energy: ${arcEnergyPercentage}% | ${isArcEnergy}`);
	// showSpinner(false);
	// putResultsIn(fakeResults);

	//? graph results
	let options = [
		{
			y: results,
			type: 'histogram',
			marker: {
				color: 'lightblue',
			},
		},
	];
	let layout = {
		title: 'Hide the Modebar',
		showlegend: false,
	};
	Plotly.newPlot('myDiv', options, layout, { displayModeBar: false });
});

const showSpinner = (show) => {
	const spinnerDiv = document.querySelector('.loading-spinner');
	const contents = `
	<div class="dot dotOne"></div>
	<div class="dot dotTwo"></div>
	<div class="dot dotThree"></div>
	`;
	spinnerDiv.innerHTML = show ? contents : '';
};

const parseIncomingDeckList = (list) => {
	let parts = list.split('\n\n');
	let cardsPokemon = expandCards(parts[0].split('\n'));
	let cardsSupporters = expandCards(parts[1].split('\n'));
	// let cardsEnergies = expandCards(parts[2].split('\n'), true);
	let cardsEnergies = expandCards(parts[2].split('\n'));
	let fulldeck = [...cardsPokemon, ...cardsSupporters, ...cardsEnergies];
	return fulldeck;
};

const expandCards = (list, isEnergy = false) => {
	//? isEnergy for when no set name is provided on Energy
	let expanded = [];
	list.forEach((group) => {
		let parts = splitOnFirstCharacter(group, ' ', isEnergy);
		for (let i = 0; i < parts[0]; i++) {
			// console.log(parts[1]);
			expanded.push(parts[1]);
		}
	});
	return expanded;
};

const splitOnFirstCharacter = (str, char, isEnergy = false) => {
	let [first, ...rest] = str.split(char);
	// console.log(rest, rest.length);
	rest = isEnergy ? rest.slice(0, -1) : rest.slice(0, -2);
	// console.log(rest, rest.length);
	const remainder = rest.join(char);
	return [first, remainder];
};

const pickStartingHand = (decklist) => {
	//? Shuffle decklist
	const shuffled = decklist.sort(() => 0.5 - Math.random());

	//? Get sub-array of first n elements after shuffled
	//? staring hand + draw
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

const checkHandForArcEnergy = (hand) => {
	let pokemon =
		hand.includes('Arceus V') ||
		hand.includes('Battle VIP Pass') ||
		hand.includes('Quick Ball') ||
		hand.includes('Ultra Ball');
	let energy =
		hand.includes('Grass Energy') ||
		hand.includes('Energy Search') ||
		hand.includes('Psychic Energy') ||
		hand.includes('Capture Energy') ||
		hand.includes('Double Turbo Energy') ||
		hand.includes('Powerful Colorless Energy');
	return pokemon && energy;
};

const checkHandForMulligan = (hand) => {
	let basicPokemon =
		hand.includes('Arceus V') ||
		hand.includes('Crobat V') ||
		hand.includes('Lumineon V') ||
		hand.includes('Galarian Zigzagoon') ||
		hand.includes('Radiant Hawlucha') ||
		hand.includes('Drapion V') ||
		hand.includes('Pumpkaboo') ||
		hand.includes('Bidoof') ||
		hand.includes('Giratina V') ||
		hand.includes('Miltank');
	return !basicPokemon;
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
2 Giratina V LOR 130
2 Giratina VSTAR LOR 131
2 Bidoof BRS 120
2 Bibarel BRS 121
1 Crobat V SHF 44
1 Lumineon V BRS 40
1 Drapion V LOR 118
1 Radiant Hawlucha ASR 81
1 Galarian Zigzagoon SSH 117
1 Pumpkaboo EVS 76

4 Marnie CPA 56
3 Boss's Orders BRS 132
2 Professor's Research BRS 147
1 Raihan EVS 152
4 Ultra Ball BRS 150
4 Quick Ball FST 237
2 Switch SSH 183
1 Hisuian Heavy Ball ASR 146
1 Evolution Incense SSH 163
2 Choice Belt BRS 135
1 Path to the Peak CRE 148
1 Collapsed Stadium BRS 137

4 Double Turbo Energy BRS 151
4 Psychic Energy Base 5
4 Grass Energy Base 1
1 Capture Energy RCL 171
`;

/*
4 Arceus V BRS 122
3 Arceus VSTAR BRS 123
1 Bidoof BRS 120
1 Bibarel BRS 121
2 Giratina V LOR 130
2 Giratina VSTAR LOR 131
1 Miltank ASR 126

2 Escape Rope BST 125
2 Lost Vacuum LOR 162
4 Quick Ball SSH 179
2 Big Charm SSH 158
1 Choice Belt BRS 135
1 Air Balloon SSH 156
4 Ultra Ball BRS 150
2 Boss's Orders BRS 132
4 Marnie SSH 169
3 Path to the Peak CRE 148
2 Professor's Research BRS 147
1 Raihan EVS 202
2 Cheren's Care BRS 134
1 Memory Capsule VIV 155
1 Switch SSH 183

1 Capture Energy RCL 171
4 Psychic Energy SWSHEnergy 14
4 Grass Energy SWSHEnergy 10
4 Double Turbo Energy BRS 151
1 Powerful {C} Energy DAA 176
*/
