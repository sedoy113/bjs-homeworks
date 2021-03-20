'use strict'

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

// console.log(parseCount('12i'));

//Задание 2
class Triangle {
	constructor(a, b, c) {
		if ((a + b) < c || (b + c) < a || (a + c) < b) {
			throw new Error('Треугольник с такими сторонами не существует');
		}
		this.a = a;
		this.b = b;
		this.c = c;
	}

	getPerimeter() {
		return Number.parseInt(this.a + this.b + this.c);
	}

	getArea() {
		let semiPerimeter = this.getPerimeter() / 2;
		let areaTriangle = Math.sqrt(semiPerimeter * (semiPerimeter - this.a) * (semiPerimeter - this.b) * (semiPerimeter - this.c));
		let newAreaTriangle = parseFloat(areaTriangle.toFixed(3));
		return newAreaTriangle;
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (e) {
		return {
			getArea() {
				return "Ошибка! Треугольник не существует";
			},
			getPerimeter() {
				return "Ошибка! Треугольник не существует";
			}
		}
	}
}