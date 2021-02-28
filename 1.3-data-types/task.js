'use strict'
function calculateTotalMortgage(percent, contribution, amount, date) {
	// код для задачи №1 писать здесь

	// корректность введенных данных
	if ((percent === '' || percent <= 0) || (contribution === '' || contribution < 0) || (amount === '' || amount <= 0)) {
		return `Параметр содержит неправильное значение, введите в полях числа, они не должны быть отрицательными`;
	} else if (date === undefined) {
		return `Параметр содержит неправильное значение, введите дату`;
	}


	// percent - 1/12 процентной ставки
	percent = percent / 100 / 12;
	// тело кредита: сумма, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)
	let amountReturnedBank = parseInt(amount) - parseInt(contribution);
	// количество выплачиваемых месяцев
	let numberPaidMonths = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
	// Ежемесячная оплата рассчитывается по формуле: Платеж=S*(P+P/(((1+P)^n)-1))
	let monthlySalary = amountReturnedBank * (percent + percent / (((1 + percent) ** numberPaidMonths) - 1));
	// общая сумма, которую придется заплатить клиенту
	let totalAmount = Number((monthlySalary * numberPaidMonths).toFixed(2));
	if (totalAmount !== totalAmount) {
		return `Проверьте все введенные данные`;
	}
	console.log(`Необходимо будет выплатить банку: ${totalAmount}`)

	return totalAmount;



}

function getGreeting(name) {
	console.log(typeof name)
	// код для задачи №2 писать здесь
	if (name === undefined || name.replace(/\s/g, '') === '') {
		name = 'Аноним';
	}
	console.log(`Привет, мир! Меня зовут ${name}.`);
	return `Привет, мир! Меня зовут ${name}.`;
}