function Card({ term }) {
	return (
		<>
			<div className='card'>
				<div className='content'>
					<div className='front'>{term.front.toLowerCase()}</div>
					<div className='back'>{term.back.toLowerCase()}</div>
				</div>
			</div>
		</>
	);
}

export default Card;
