// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

let object1 = {name: "aaa1", surname: "bbb1", age: 11};
let object2 = {model: "aaa2", color: "bbb2", price: "22$"};
let object3 = {manufacturer: "aaa3", brand: "bbb3", logo: "33"};
let object4 = {city: "aaa4", street: "bbb4", house: 44};
let object5 = {bank: "aaa5", id: "bbb5", account: 55};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... 
// Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };

let car ={general: {manuafacturer: "honda motor", brand: "honda"}, model: "civic", spec: ["4doors", "FWD"]};
let paint ={painter: {name: "gustav", surname: "floyd"}, details: ["a", "b"], size: "120 x 60cm"};
let furniture ={year: 1999, material: ["wood", "plastic"], details: {color: "brown", legs: false}};
let house ={adress: ["resp", "12"], status: true, room: {room1: "23sq.m", room2: "12sq.m"}};
let toy ={type: "babyborn", condition: "new", design: ["modern", "friendly"], color: {top: "pink", bottom: "white"}};


// - При помощи for in вывести все ключи всех объектов из задания 1 и 2

// for (const obj021 in object1) {
//     console.log(obj021,object1[obj021]);
// }
for (const keys in object1) {
    console.log(keys);   
}

for (const keys in object2) {
    console.log(keys); 
}

for (const keys in object3) {
    console.log(keys);
}

for (const keys in object4) {
    console.log(keys);
}

for (const keys in object5) {
    console.log(keys);
}

for (const keys in car) {
    console.log(keys);
}

for (const keys in paint) {
    console.log(keys);
}

for (const keys in furniture) {
    console.log(keys);
}

for (const keys in house) {
    console.log(keys);
}

for (const keys in toy) {
    console.log(keys);
}


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

console.log(Object.keys(object1));
console.log(Object.keys(object2));
console.log(Object.keys(object3));
console.log(Object.keys(object4));
console.log(Object.keys(object5));

console.log(Object.keys(car));
console.log(Object.keys(paint));
console.log(Object.keys(furniture));
console.log(Object.keys(house));
console.log(Object.keys(toy));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

let arrCars082 = [
    {model: "honda", year: 1994, hp: 99, color: "blue"},
    {model: "mazda", year: 1999, hp: 122, color: "pink"},
    {model: "toyota", year: 2001, hp: 87, color: "black"},
    {model: "bmw", year: 2020, hp: 224, color: "grey"},
    {model: "porsche", year: 2016, hp: 321, color: "green"},
    {model: "mercedes", year: 1988, hp: 178, color: "orange"},
    {model: "volvo", year: 2010, hp: 235, color: "yellow"},
    {model: "opel", year: 2008, hp: 222, color: "white"},
    {model: "ford", year: 2020, hp: 398, color: "red"},
    {model: "suzuki", year: 1991, hp: 177, color: "silver"}
];


// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)

let arrCities098=[];
for (let i = 0; i < 10; i++) {
    arrCities098[i] = {name:"city name", population: "xxx_000", country:"country name", region: "country region"};
    console.log(arrCities098[i]);
}


// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let arrCars107 = [];
for (let i = 0; i < 10; i++) {
    arrCars107[i] = {model: "name", year: "year", hp: "xxx", color: "color", driver: {name: "drivers name", age: "drivers age", sex: "xxx", experience: "xx"}};
    console.log(arrCars107[i]);
}


// - проитерировать каждый массив из задания 5,6,7 при помощи while.

let cars082 = 0;
while (cars082 < arrCars082.length) {
    console.log(arrCars082[cars082]);
    cars082++
}

let cities098 = 0;
while (cities098 < arrCities098.length) {
    console.log(arrCities098[cities098]);
    cities098++
}

let cars107 = 0;
while (cars107 < arrCars107.length) {
    console.log(arrCars107[cars107]);
    cars107++
}

// - проитерировать каждый массив из задания 5,6,7 при помощи for.

for (let cars0821 = 0; cars0821 < arrCars082.length; cars0821++) {
    console.log(arrCars082[cars0821]);
}

for (let cities0981 = 0; cities0981 < arrCities098.length; cities0981++) {
    console.log(arrCities098[cities0981]);
}

for (let cars1071 = 0; cars1071 < arrCars107.length; cars1071++) {
    console.log(arrCars107[cars1071]);
}


// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.

for (let cars0822 of arrCars082) {
    console.log(cars0822);
}

for (let cities0982 of arrCities098) {
    console.log(cities0982);
}

for (let cars1072 of arrCars107) {
    console.log(cars1072);
}


// - взять объекты из задания 1 и превратить каждый в json.

let str166 = JSON.stringify(object1);
console.log(str166);
let str168 = JSON.stringify(object2);
console.log(str168);
let str170 = JSON.stringify(object3);
console.log(str170);
let str172 = JSON.stringify(object4);
console.log(str172);
let str174 = JSON.stringify(object5);
console.log(str174);


// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];




// // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// // *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. 
// Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// // ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который 
// сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. 
// Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
