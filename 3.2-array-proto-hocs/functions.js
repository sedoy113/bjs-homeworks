'use strict';
// task_1

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
// console.log(weapons);

function getNames() {
	return weapons.map(weapon => weapon.name);
}
// console.log(getNames());

function getCountReliableWeapons(durability) {
	return (weapons.filter(any => any.durability > durability)).length;

};
// console.log(getCountReliableWeapons(300));

function hasReliableWeapons(durability) {
	return weapons.some(any => any.durability > durability);
}
// console.log(hasReliableWeapons(600));

function getReliableWeaponsNames(durability) {
	return (weapons.filter(name => name.durability > durability)).map(weapon => weapon.name);
}
// console.log(getReliableWeaponsNames(200));

function getTotalDamage() {
	return (weapons.map(weapon => weapon.attack)).reduce((accumulate, el) => accumulate + el);
}
// console.log(getTotalDamage());

// task_2

// 2.1 Подготовка к заданию

// 2.1.1. sleep
function sleep(milliseconds) {
	let e = new Date().getTime() + milliseconds;
	while (new Date().getTime() <= e) { }
}

// 2.1.2. sum
function sum(...args) {
	// Замедление на половину секунды.
	sleep(100); // Можно использовать другое значение замедления.
	return args.reduce((sum, arg) => {
		return sum += +arg;
	}, 0);
}

// 2.1.3. compareArrays
function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length ? arr1.every((value, index) => value === arr2[index]) : false;
}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([1, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true

// 2.2 Обёртка над оптимизацией любой функции

function memorize(fn, limit) {
	const memory = []
	return function (...args) {
		// 2.3.1. Поиск
		let isMemory = memory.find(function (arr) {
			return compareArrays(arr.args, args);
		})
		if (isMemory) {
			return isMemory.result;
		}
		if (memory.length === limit) {
			memory.shift();
		}
		let result = fn(...args)
		memory.push({ args: args, result: result });
		// console.log(memory);
		return result;
	}
}

// 2.2.1. Вызов результата
const mSum = memorize(sum, 2); // 5 результатов может хранится в памяти
// const mSum = memorize(sum, 2);
console.log(sum(3, 4));
console.log(mSum(3, 4));// 7
console.log(mSum(1, 3));// 4


