function parseCount(number) {
	let resultNumber = Number.parseInt(number);
	if (Number.isNaN(resultNumber)) {
		throw new Error('Невалидное значение');
	}

	return resultNumber;
}

function validateCount(parse) {
	try {
		return parseCount(parse);
	} catch (error) {
		return error;
	}
}

console.log(parseCount('12i'));
//Задание 2
