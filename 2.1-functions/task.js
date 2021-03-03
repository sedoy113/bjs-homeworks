'use srict'

// Задача №1. Корни квадратного уравнения
function getSolutions(a, b, c) {
	let D = b ** 2 - 4 * a * c;

	if (D < 0) {
		return { D: D, roots: [] };
	} else if (D === 0) {
		let x1 = -b / 2 * a;
		return { D: D, roots: [x1] };
	} else if (D > 0) {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		return { D: D, roots: [x1, x2] };
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.roots.length < 1) {
		console.log(`Уравнение не имеет вещественных корней`)
	} else if (result.roots.length === 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`)
	} else if (result.roots.length === 2) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
};
showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задача №2. Журнал успеваемости

function getAverageScore(data) {
	let average = [];

	for (let prop in data) {
		data[prop] = getAverageMark(data[prop]);
		average.push(data[prop])
	}
	data['average'] = getAverageMark(average);
	// console.log(data['average']);
	console.log(data);
	return data;
}

function getAverageMark(marks) {
	let reduceResult = (accumulate, el) => accumulate + el;
	if (marks.length === 0) {
		return 0;
	} else {
		return marks.reduce(reduceResult) / marks.length;
	}
}

getAverageScore({
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	misic: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2],
	french: [4, 4]
});

