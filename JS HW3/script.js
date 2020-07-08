// console.log("test");

// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу

let dog010 = {name: "Juk", age: 2, eyes: "brown", legs: 4, tail: 1};
let human011 = {name: "Tim", age: 23, eyes: "green", children: false, education: "bachelor"};
let car012 = {brand: "MAZDA", year: 2011, engine: "2.0L", fuel: "petrol", gearbox: "manual"};
let flat013 = {adress: "Independence str, 12/321", floor: 12, area: "78 sq.m", room: 3, balcony: true};
let book014 = {name: "Star kings", author: "E. Hamilton", genre: "sci-fi", year: 1947, hero: "John Gordon"};


// -- Створити масив та вивести його в консоль:
// - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

let dog022 = [
    {name: "Duk", breed: "shepherd", age: 12, status: true, body: "grey"},
    {name: "Tuk", breed: "labrador", age: 2, status: true, body: "white"},
    {name: "Muk", breed: "terier", age: 7, status: false, body: "brown"},
    {name: "Ruk", breed: "shepherd", age: 9, status: false, body: "dark gray"},
    {name: "Kuk", breed: "boxer", age: 14, status: true, body: "black"}
];
console.log(dog022);

let human031 = [
    {name: "Kim", age: 31, eyes: "green", children: true, education: "bachelor"},
    {name: "Serg", age: 21, eyes: "gray", children: false, education: "shool"},
    {name: "Jim", age: 44, eyes: "brown", children: true, education: "phd"},
    {name: "Bim", age: 33, eyes: "blue", children: true, education: "master"},
    {name: "Zim", age: 7, eyes: "dark blue", children: false, education: "no education"},
];
console.log(human031);
// console.log(human031[3].age);

let car041 = [
    {brand: "Suzuki", year: 2016, engine: "2.5L", fuel: "petrol", gearbox: "automatic"},
    {brand: "VW", year: 1999, engine: "1.8L", fuel: "diesel", gearbox: "manual"},
    {brand: "BMW", year: 1988, engine: "3.0L", fuel: "diesel", gearbox: "automatic"},
    {brand: "MAZDA", year: 2019, engine: "2.0L", fuel: "petrol", gearbox: "automatic"},
    {brand: "Honda", year: 2003, engine: "1.6L", fuel: "petrol", gearbox: "manual"},
];
console.log(car041);



// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,
// ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка

let house060 = {adress: ["Petlury", 21, 44], floor: 2, area: "98 sq.m", room: 5, balcony: true};
let driver061 = {name: "Toni", age: "53", status: false, skill: ["car", "bus", "truck"], license: true};
let toy062 = {name: "T-rex", type: "animal", color: "green", price: "5$", ability: ["move", "sound"]};
let table063 = {type: "office", material: ["steel", "plywood"], color: "silver", weight: "27kg", price: "43$"};
let bag064 = {type: "travel", material: ["cotton", "rubber"], color: "black", weight: "3kg", price: "26$"};



// Дан массив:
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія

console.log(users[7].status);


// - статус Максима

console.log(users[4].status);
console.log(users[10].status);


// - ім'я передостаннього об'єкту

for (let i = 0; i < users.length; i++) {
    if (i === users.length - 2) {
        console.log(users[i].name);
    }
}


// - ім'я третього об'єкта

console.log(users[2].name);


// - вік Олега

console.log(users[6].age);


// - вік Олі

console.log(users[3].age);
console.log(users[9].age);


// - вік + ім'я 5го об'єкта

console.log(users[4].name, users[4].age);


// - вік + сатус Анни

console.log(users[5].age, users[5].status);


// Приклад: вивести ім'я 1го об'єкта. Відповідь: console.log (users [0] .name). Будьте уважні! 4й об'єкт має індес 3!

