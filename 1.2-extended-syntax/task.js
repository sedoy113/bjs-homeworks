'use strict'

function getResult(a, b, c) {

	// 2x^2+4x-3=0.
	// код для задачи №1 писать здесь
	let discriminant = (b * b) - (4 * a * c);
	console.log(discriminant);
	let x;
	if (discriminant < 0) {
		return x = [];
		console.log(x);
	} else if (discriminant === 0) {
		x = -b / 2 * a;
		return x = [x];
	} else if (discriminant > 0) {
		x = (-b + Math.sqrt(discriminant)) / (2 * a);
		let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return x = [x, x2];
	}
}

function getAverageMark(marks) {
	// код для задачи №2 писать здесь
	let averageMark;
	let summ = 0;

	if (marks.length === 0 || marks.length === isNaN) {
		return 0;
	} else if (marks.length > 5) {
		console.log(`Оценок больше пяти, вы ввели ${marks.length} оценок`);
		marks.splice(5);
	}

	for (let i = 0; i < marks.length; i++) {
		summ += marks[i];
	}
	// console.log(summ);
	averageMark = summ / marks.length;

	return Math.round(averageMark);
}

function askDrink(name, dateOfBirthday) {
	// код для задачи №3 писать здесь
	let result = new Date().getFullYear() - dateOfBirthday.getFullYear();
	if (result > 18) {
		return `Не желаете ли олд-фэшн, ${name}?`
	}
	return `Сожалею,  ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
	// return result;
}