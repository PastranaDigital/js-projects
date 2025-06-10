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

function App() {
	// const [count, setCount] = useState(0);

	let shuffledData = shuffleArray(data);

	return (
		<>
			<p>Front displaying now, Guess the back</p>
			<div className='container'>
				<div className='arrow-container wrong'>
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
				<Card term={data[0]} />
				<div className='arrow-container correct'>
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
			</div>
		</>
	);
}

export default App;
