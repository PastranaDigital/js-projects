import { useState } from 'react';

function Card({ term }) {
	const [flip, setFlip] = useState('');

	return (
		<>
			<div className='card'>
				<div
					className={'content' + flip}
					onClick={() => {
						if (flip === '') {
							setFlip(' flip');
						} else {
							setFlip('');
						}
					}}
				>
					<div className='front'>{term.front.toLowerCase()}</div>
					<div className='back'>{term.back.toLowerCase()}</div>
				</div>
			</div>
		</>
	);
}

export default Card;
