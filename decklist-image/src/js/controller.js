console.clear();

let data;
let inputStr = '';
let outputStr = '';

const inputElement = document.querySelector('.input-textarea');
if (inputElement)
	inputElement.addEventListener('change', () => {
		inputStr = inputElement.value;
		const alert = document.querySelector('.alert');
		if (alert) alert.classList.add('hide');
	});

const buttonElement = document.querySelector('.submit-button');
if (buttonElement) buttonElement.addEventListener('click', processInput);

// METHODS

function processInput() {
	let adjInputStr = inputStr.split('<labels>');
	adjInputStr.shift(); // remove the xml header
	let finalArr = [];
	adjInputStr.forEach((el) => {
		let tempObj = parseXmlToJson(el);
		// avoid adding duplicates
		if (finalArr.some((e) => e.fullName === tempObj.fullName)) return;
		finalArr.push(tempObj);
	});
	return sortArray(finalArr, 'fullName');
}

function parseXmlToJson(xml) {
	const arr = [];
	const json = {};
	for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
		// console.log("res", JSON.stringify(res));
		const key = res[1] || res[3];
		const value = res[2];
		// const value = res[2] && parseXmlToJson(res[2]);
		json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
		// arr.push(json);
		// return json;
	}
	// console.log("json: ", json);
	return json;
}

const transformInput = (data) => {
	if (!data) return;
	let array = data.split('\n');
	//? Clean up the first & last \n from the paste
	if (array[0].length == 0) array.shift();
	if (array[array.length - 1].length == 0) array.pop();

	console.log(array.length);
	// console.log(array);

	let finalArray = [];
	array.forEach((el) => {
		let tempObj = {};
		let split = el.indexOf('.');
		tempObj.name = el.substring(0, split);
		tempObj.value = el.substring(split + 1);
		// console.log(tempObj);
		finalArray.push(tempObj);
	});

	console.log(finalArray);
	let sortedArr = sortArray(finalArray, 'name', false);
	let uniqueArr = uniqueVals(finalArray, 'value');
	let groupedUniqueArr = groupBy(uniqueArr, 'name');

	createPackageXml(groupedUniqueArr);
};

// HELPERS

const groupBy = (arr, enumProperty) => {
	return arr.reduce(function (item, prop) {
		if (!item[prop[enumProperty]]) {
			item[prop[enumProperty]] = [];
		}
		item[prop[enumProperty]].push(prop);
		return item;
	}, {});
};

/**
 * @description Takes in a list of objects and checks for unique records based on a property
 * @param {*} list List of objects to iterate through
 * @param {*} uniqueProperty Unique property that list should filter against
 * @returns {Array<object>}
 */

const uniqueVals = (list, uniqueProperty) => {
	if (list?.length) {
		const result = [];
		const map = new Map();
		for (const item of list) {
			if (item && !map.has(item[uniqueProperty])) {
				map.set(item[uniqueProperty], true);
				result.push({ ...item });
			}
		}
		return result;
	}
};

const sortArray = (incomingArray, value, descending = false) => {
	let i = descending ? -1 : 1;
	incomingArray.sort((a, b) => (a[value] > b[value] ? 1 * i : b[value] > a[value] ? -1 * i : 0));
	console.log('incomingArray: ', incomingArray);
};
