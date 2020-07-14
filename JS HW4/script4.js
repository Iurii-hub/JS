// - створити функцію яка виводить масив

function getArray003(arr) {
  console.log(arr);
}
    

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function getArrayRandom010(length, min, max) {
  let array011 = [];
  for (let i = 0; i < length; i++) {
    array011.push(Math.floor(Math.random() * (max - min) + min))
  }
  getArray003(array011)
}

getArrayRandom010(5, -33, 33);


// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function get3min() {
  let min = arguments[0];

  for (let i = 0; i < 3; i++) {
    if (arguments[i] < min) {
      min = arguments[i]
    }
  }
  console.log(min);
  return min;
}

get3min(34, -5, 1);


// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function get3max() {
  let max = arguments[0];
  
  for (let i = 0; i < 3; i++) {
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  console.log(max);
  return max;
}

get3max(31, 29, 27);


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function getMinMax() {
  let min = arguments[0];
  let max = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i]
    }

    if (arguments[i] > max) {
      max = arguments[i]
    }
  }

  console.log(max + " max")
  return (min + " min");
}

let num075 = getMinMax(2, 9, 6, -532, 4, 10, 16, 8, 0, -90, 7, 88, 534, 78);
console.log(num075);


// - створити функцію яка виводить масив

function getArray081(arr) {
  console.log(arr);

}


// - створити функцію яка повертає найбільше число з масиву

function getMaxArray (arguments) {
  let max = arguments[0];

  for (let i of arguments) {
    if (i > max) {
      max = i;
    }
  }
  return max;
}
let maxArray100 = [11, -5, 44, -11, 232, 431];
let num100 = getMaxArray(maxArray100);
console.log(num100);


// - створити функцію яка повертає найменьше число з масиву

function getMinArray (arguments) {
  let min = arguments[0];

  for (let i of arguments) {
    if (i < min) {
      min = i;
    }
  }
  return min;
}
let minArray116 = [23, -11, 45, -234];
let num117 = getMinArray(minArray116);
console.log(num117);


// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

function getSumArray (arguments) {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
}
let sumArray = [-2, 7, 7, 12, 1];
let sum131 = getSumArray(sumArray);
console.log(sum131);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function getAverageArray (arguments) {
  let averNumber = 0;
  for (const i of arguments) {
    averNumber += i / (averageArray.length);
  }
  return averNumber;
}
let averageArray = [23, -17, 10];
let averNumber145 = getAverageArray(averageArray);
console.log(averNumber145);


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

function getAnyArray (arguments) {
  let anyNumber = 0;
  for (const i of arguments) {
    anyNumber = anyNumberArray.length;
  }
  return anyNumber;
}
let anyNumberArray = [23, -17, 10, 4];
let anyNumber159 = getAnyArray(anyNumberArray);
console.log(anyNumber159);


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них


function getAnyArray2 (arguments) {
  let numField = 0;
  for (let i = 0; i < numFieldArray.length; i++) {
    if (i = Object.key(arguments)) {
      for (let key in i) {
        numField++;
      }
    }
  }
  return numField;
}
  
let numFieldArray = [{num1: 11, type1: 123}, {num2: 45, type2: 123}, {num3: 145, type3: 3}];
let numField173 = getAnyArray2(numFieldArray);
console.log(getAnyArray2(numField173));
console.log(getAnyArray2("numField173")); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function arraySumator(arr1, arr2) {
  const resultArr = [];

  for (let i = 0; i < arr1.length; i++) {
    const sumOfElems = arr1[i] + arr2[i];

    resultArr.push(sumOfElems)
  }

  return resultArr;
}

let someArr = arraySumator([1, 2, 3, 4], [2, 3, 4, 5]);

console.log(someArr);


// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

function itemChanger(array, i) {
  const buffer = array[i];

  array[i] = array[i + 1]
  array[i + 1] = buffer;

  console.log(array);
}

itemChanger([1, 2, 3, 4, 9, 62, 3, 4, 5], 4)


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]





// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addText () {
  let divFirst = document.createElement("div");
  
  divFirst.innerText = "Hello owu";
  document.body.append(divFirst);
}
addText();


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addTextAny (typeElem, textElem) {
  let elem = document.createElement(typeElem);
  elem.innerText = textElem || "practice";

  document.body.appendChild(elem);
}
addTextAny();


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

let arrCars = [
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


// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========

