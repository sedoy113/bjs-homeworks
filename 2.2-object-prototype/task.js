'use strict'
//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function isPalindrome() {

	const cleanString = this.toLowerCase().replace(/\s+/g, '');
	const cleanStringRevers = cleanString.split("").reverse().join("");

	return cleanString === cleanStringRevers;
}

// Задача № 2

function getAverageScore(data) {
	let average = [];

	for (let prop in data) {
		data[prop] = getAverageMark(data[prop]);
		average.push(data[prop])
	}
	data['average'] = getAverageMark(average);
	return data;
}

function getAverageMark(marks) {
	let roundedAverage;
	let reduceResult = (accumulate, el) => accumulate + el;
	if (marks.length === 0) {
		return 0;
	} else {
		return roundedAverage = Math.round(marks.reduce(reduceResult) / marks.length);
	}
}

function checkBirthday(birthday) {
	// код для задачи №3 писать здесь
	// return verdict
}