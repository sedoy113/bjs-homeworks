console.clear();

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
console.log(getTotalDamage());