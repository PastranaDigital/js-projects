import { useState } from 'react';
import data from './data.js';
import Card from './Card.jsx';
import './App.css';

function shuffleArray(array) {
	for (let i = array.length - 1; i >= 1; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

let shuffledData = shuffleArray(data);
console.log(shuffledData);

function App() {
	const [index, setIndex] = useState(0);
	const [correct, setCorrect] = useState([]);
	const [wrong, setWrong] = useState([]);
	const [showCard, setShowCard] = useState(true);

	const nextCard = (isCorrect, cardData) => {
		if (index >= data.length - 1) {
			setShowCard(false);
		} else {
			setIndex((index) => index + 1);
		}
		// console.log('cardData: ', cardData);
		if (isCorrect) {
			//put into correct array
			setCorrect((previousValues) => [...previousValues, cardData]);
		} else {
			//put into wrong array
			setWrong((previousValues) => [...previousValues, cardData]);
		}
	};

	const calculateScore = () => {
		if (index === 0) return 0;
		return ((100 * correct.length) / (wrong.length + correct.length)).toFixed(1);
	};

	return (
		<>
			<p>Front displaying now, Guess the back</p>
			<div className='container'>
				{showCard && (
					<div className='arrow-container wrong' onClick={() => nextCard(false, shuffledData[index])}>
						<div>
							<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
								<polyline
									className='path check'
									fill='none'
									stroke='#ffffff'
									strokeWidth='6'
									strokeLinecap='round'
									strokeMiterlimit='10'
									points='8,8 24,24'
								></polyline>
								<polyline
									className='path check'
									fill='none'
									stroke='#ffffff'
									strokeWidth='6'
									strokeLinecap='round'
									strokeMiterlimit='10'
									points='8,24 24,8'
								></polyline>
							</svg>
						</div>
					</div>
				)}
				{/**
				 * REMOUNTING THE CARD COMPONENT
				 * React uses the key prop to identify elements in a list, but it also uses it internally to determine if a component should be preserved or recreated. If React sees a component at the same position in the tree but with a different key, it will:
					1. Unmount the old instance of the component (destroying its internal state).
					2. Mount a brand new instance of the component (with its initial state).
				 * This effectively "resets" the child component.
				 */}
				<Card showCard={showCard} term={shuffledData[index]} key={index} />
				{showCard && (
					<div className='arrow-container correct' onClick={() => nextCard(true, shuffledData[index])}>
						<div>
							<svg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
								<polyline
									className='path check'
									fill='none'
									stroke='#ffffff'
									strokeWidth='6'
									strokeLinecap='round'
									strokeMiterlimit='10'
									points='25,10 13,22 7.5,17 '
								></polyline>
							</svg>
						</div>
					</div>
				)}
			</div>
			<p>
				{index + 1} of {data.length}
			</p>
			<p>
				Wrong: {wrong.length} | Correct: {correct.length} | Score: {calculateScore()}%
			</p>
		</>
	);
}

export default App;
