/**
 *
 * @param {Array} array what that you want shuffled
 */
//* the de-facto unbaised shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle
export const shuffleArray = function (array) {
	let currentIndex = array.length;
	let randomIndex;

	//? While there remain elements to shuffle
	while (currentIndex != 0) {
		//? Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		//? swap that with the current element
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}

	return array;
};

export const roundDownTo5 = function (incomingValue) {
	return Math.floor(incomingValue / 5) * 5;
};
