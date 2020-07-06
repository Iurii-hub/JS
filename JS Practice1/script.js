// console.log(22232333)

// 1. Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'. 
// Перевірте роботу скрипта при a, що дорівнює 1, 0, -3

let a = null;

if (a === 0) {
    console.log("Вірно");
} 
else {console.log("Не вірно")};

a===0 ? console.log("Вірно") : console.log("Не вірно")
// let b = a || 'Vasy';
// console.log(b)

// 2. В змінної min лежить число від 0 до 59. 
// Визначте в яку чверть години потрапляє це число (в першу, другу, третю або четверту).

let number = 35;
if (number >= 0 && number <= 14) {
    console.log("First Part Of Hour");
}
else if (number >= 15 && number <= 29) {
    console.log("Second Part Of Hour");
}
else if (number >= 30 && number <= 44) {
    console.log("Third Part Of Hour")
}
else if (number >= 45 && number <= 59) {
    console.log("Fourth Part Of Hour")
}

// 3.Якщо змінна a дорівнює або менше 1, а змінна b більше або дорівнює 3, 
// то виведіть суму цих змінних, 
// інакше виведіть їх різницю (результат віднімання).
//  Перевірте роботу скрипта при a і b, що дорівнює 1 і 3, 0 і 6, 3 і 5.

let q = 1;
let w = 2.2;
if (q <= 1 && w >= 3) {
    console.log(q + w);
}
else {
    console.log(q - w);
}

// 4. В змінної month лежить якесь число з інтервалу від 1 до 12.
// Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).

let month = 11;
if (month <= 2 || month === 12) {
    console.log("winter");
}
else if (month >=3 && month <= 5) {
    console.log("spring");
}
else if (month >=6 && month <= 8) {
    console.log("summer");
}
else if (month >=9 && month <= 11) {
    console.log("autumn");
}

// 1. Три різних числа вводяться через prompt(). 
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

let number1 = +prompt("put number one"); //5
let number2 = +prompt("put number two"); //3
let number3 = +prompt("put number three"); //8
// let number1 = 5
// let number2 = 3
// let number3 = 8
if (number1 > number2 && number1 > number3 && number2 > number3)  {
    console.log(number3, number2, number1);
}

if (number1 > number2 && number1 > number3 && number3 > number2)  {
    console.log(number2, number3, number1);
}
if (number2 > number1 && number2 > number3 && number1 > number3) {
    console.log(number3, number1, number2);
}

if (number2 > number1 && number2 > number3 && number3 > number1) {
    console.log(number1, number3, number2);
}

if (number3 > number1 && number3 > number2 && number1 > number2) {
    console.log(number2, number1, number3);
}

if (number3 > number1 && number3 > number2 && number2 > number1) {
    console.log(number1, number2, number3);
}


// 2. 
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

let action = prompt("Traffic light: what is the color?");

switch (action) {
    case "green":
        console.log("go");
        break;
    
    case "yellow":
        console.log("wait");
        break;
    
    case "red":
        console.log("stop");
        break;

    default:
        console.log("HOHOHOHOHOHO...I warned");
    }


// 3 
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди"

let action2 = prompt("Traffic light: what is the color?"); 
let isRoadClear = confirm("Is road clear?");

switch (action2) {
    case "green":
        isRoadClear ? console.log("go") : console.log("wait til cars pass");
        break;
    
    case "yellow":
        isRoadClear ? console.log("wait") : console.log("you must wait green light");
        break;
    
    case "red":
        isRoadClear ? console.log("stop") : console.log("stop & wait green light");
        break;

    default:
        console.log("HOHOHOHOHOHO...I warned");
    }

