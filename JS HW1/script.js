// // присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 
// // 1, 10, -999, 123, 3.14, 2.7, 16, true, false 
// // Вывести каждую при помощи console.log , alert, document.write

// let name01 = "hello";
// let name02 = "owu";
// let name03 = "com";
// let name04 = "ua";
// let name05 = 1;
// let name06 = 10;
// let name07 = -999;
// let name08 = 123;
// let name09 = 3.14;
// let name10 = 2.7;
// let name11 = 16;
// let name12 = true;
// let name13 = false;

// console.log(name01);
// document.write(name02)
// alert(name03);
// console.log(name04);
// console.log(name05);
// document.write(name06);
// alert(name07);
// alert(name08);
// console.log(name09);
// document.write(name10);
// alert(name11);
// console.log(name12);
// document.write(name13);


// // - переопределить каждую переменную из задания 1 дав им произвольные значения 
// // Вывести каждую при помощи console.log , alert, document.write

// name01 = 01;
// name02 = 02;
// name03 = "three";
// name05 = "five";
// name06 = "ten";
// name07 = 07;
// name08 = 8;
// name09 = "nine";
// name10 = "zero nine";
// name11 = "sixteen";
// name12 = 12;
// name13 = 13;

// console.log(name01);
// document.write(name02);
// alert(name03);
// console.log(name04);
// console.log(name05);
// document.write(name06);
// document.write(name07);
// alert(name08);
// alert(name09);
// console.log(name10);
// console.log(name11);
// console.log(name12);
// console.log(name13);


// // - Создать 3 числовых и 3 стринговых константы. Вывести каждую при помощи console.log , 
// // alert, document.write

// const c1 = 1;
// const c2 = 2;
// const c3 = 3;
// const c4 = "a";
// const c5 = "zaq";
// const c6 = "cell";

// console.log(c1);
// document.write(c2);
// alert(c3);
// console.log(c4);
// document.write(c5);
// alert(c6);


// // - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО. 
// // Для фамилии имени и отчества создать разные переменные. Вывести каждую при 
// // помощи console.log , alert, document.write

const userInput1 = prompt("Please write your surname");
const userInput2 = prompt("Please write your name");
const userInput3 = prompt("Please write your parents name");

console.log(userInput1 + " " + userInput2 + " " + userInput3);

document.write(userInput1 + " " + userInput2 + " " + userInput3);

alert(userInput1 + " " + userInput2 + " " + userInput3);


// // - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.

// let user = (userInput1 + " " + userInput2 + " " + userInput3);
// console.log(user);


// // - Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.

// const fatherInput1 = prompt("Please write your surname");
// const fatherInput2 = prompt("Please write your name");
// const fatherInput3 = prompt("Please write your parents name");

// let father = (fatherInput1 + " " + fatherInput2 + " " + fatherInput3);
// console.log(father);

// const motherInput1 = prompt("Please write your surname");
// const motherInput2 = prompt("Please write your name");
// const motherInput3 = prompt("Please write your parents name");

// let mother = (motherInput1 + " " + motherInput2 + " " + motherInput3);
// console.log(mother);

// // - при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.

// let number1 = +prompt("Please write first number");
// let number2 = +prompt("Please write second number");
// let number3 = +prompt("Please write third number");
// console.log(number1 + number2 + number3);


// // - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. 
// // Сложить их между собой записав результат в переменную result и вывести в консоль браузера

// let number11 = +prompt("Please write first new number");
// let number12 = +prompt("Please write second new number");
// let number13 = +prompt("Please write third new number");
// let number14 = +prompt("Please write fourth new number");
// let result = parseInt(number11 + number12 + number13 + number14);
// console.log(result);


// // - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести 
// // их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в 
// // консоль браузера

// let number21 = +prompt("Please write first number again");
// let number22 = +prompt("Please write second number again");
// let number23 = +prompt("Please write third number again");


// let result2 = parseFloat(number21 + number22 + number23);
// console.log(result2);

// // - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round 
// // Сложить их между собой записав результат в переменную  и вывести в консоль браузера

// number21 = 1.123;
// number22 = 3.1256;
// number23 = 12.539;
// let result3 = Math.round(number21 + number22 + number23);
// console.log(result3);


// // - при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. 
// // Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. 
// // При помощи Math.pow возвести первое число в степень второго числа.

// let number31 = +prompt("Write integer1");
// let integer31 = Math.floor(number31);
// let number32 = +prompt("Write integer2");
// let integer32 = Math.floor(number32);
// let result4 = Math.pow(integer31, integer32);
// console.log(result4);


// // - При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их 
// // в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

// let a = 100; 
// let b = '100'; 
// let c = true; 
// let d = undefined;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);

// // - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// //  В одинаковых выражениях в задании не использовать два одинаковых оператора.
// // Каждое выражение вложить в свою переменную
//     // 5 ? 6 -> true
//     // 5 ? 6 -> false
//     // 5 ? 6 -> false
//     // 5 ? 6 -> false
//     // 10 ? 10 -> true
//     // 10 ? 10 -> true
//     // 10 ? 10 -> false
//     // 10 ? 10 -> false
//     // 10 ? 10 -> false
//     // 123 ? '123' -> false
//     // 123 ? '123' -> true

// let int1 = 5;
// let int2 = 6;
// let int3 = 10;
// let int4 = 123;

// console.log(int1 < int2);
// console.log(int1 > int2);
// console.log(int1 >= int2);
// console.log(int1 == int2);
// console.log(int3 === int3);
// console.log(int3 == int3);
// console.log(int3 > int3);
// console.log(int3 != int3);
// console.log(int3 !== int3);
// console.log(int4 < int4);
// console.log(int4 === int4);

// // Дополнительно:
// // - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// // console.log(132 > 100 && 45 < 12 );
// // console.log(34 > 33 && 23 < 90 );
// // console.log(99 > 100 && 45 > 12 );
// // console.log(132 > 100 || 45 < 12 );
// // console.log(111 > 11 || 45 < 111 );
// // console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );
// // console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );
// // console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );
// // console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));
// // console.log(!!'-1');
// // console.log(!!-1);
// // console.log(!!'0');
// // console.log(!!'null');
// // console.log(!!'undefined');
// // console.log(!!(3/'owu'));
// // console.log((111 > 11 || 45 < 111) ||  !!'0');
// // console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));

// // console.log(1);

// console.log(132 > 100 && 45 < 12 ); // false
// console.log(34 > 33 && 23 < 90 ); //true
// console.log(99 > 100 && 45 > 12 ); // false
// console.log(132 > 100 || 45 < 12 ); // true
// console.log(111 > 11 || 45 < 111 ); // true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); // true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); // true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); // false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); // true
// console.log(!!'-1'); // true
// console.log(!!-1); // true
// console.log(!!'0'); // true
// console.log(!!'null'); // true
// console.log(!!'undefined'); // true
// console.log(!!(3/'owu')); // false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); //true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); // false

// // CLASS

// // 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// //   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

// let str = "Привет";
// let num = 123;
// let flag = true;
// let txt = "true";

// // 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
// //     5 + 3,
// //     5 - 3,
// //     5 * 3,
// //     5 / 3,
// //     5 % 3
// //     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;

// // 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
// //     5 % 3,
// //     3 % 5,
// //     5 + '3',
// //     '5' - 3,
// //     75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 * 3;
// let a9 = "5" - 3;
// let a10 = 75 + "кг";

// // 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// //   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = height * width;
// // console.log(s);

// // 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// // результат поместите в переменную v.

// let heightC = 10;
// let dC = 4;
// let pow = Math.pow(dC, 2);
// let v = heightC * 3.14 * pow / 4;
// console.log(v);

// // 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
// //   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

// let n = 3;
// let m = 4;
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
// console.log(k);

// // 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

// let str1 = "Hello World";
// document.write(str1);
// alert(str1);
// console.log(str1);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

let yourName = "What is your name?";
// alert(yourName);
let yourAge = "How old are you?";
// alert(yourAge);
let yourHobby = "What is your hobby?"
alert(yourName + "\n" + yourAge + "\n" + yourHobby);


// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

let str1 = "Who";
let str2 = "you";
let str3 = "are?";
let concatenation = (str1 + " " + str2 + " " + str3);
document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");

document.write("<br/>");

let str = "20";
let a = 5;
document.write(str + a + "<br/>"); // 205
document.write(str - a + "<br/>"); // 15
document.write(str * "2" + "<br/>"); // 40
document.write(str / 2 + "<br/>"); // 10

// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14") // 3
//     parseInt("-7.875") // -7
//     parseInt("435") // 435
//     parseInt("Вася") // Nan

// console.log(parseInt("3.14"))
// console.log(parseInt("-7.875"))
// console.log(parseInt("435"))
// console.log(parseInt("Вася"))

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, 
// повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);

let str0 = prompt("Enter something", "ho-ho")
console.log(str0);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

let integer111 = +prompt("Put the first integer");
let integer112 = +prompt("Put the second integer");
alert(integer111 + integer112);

// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо 
// вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

let namePerson = prompt("Please write your name")
let surnamePerson = prompt("Please write your surname");
let agePerson = +prompt("How old are you?");
alert("Доброго вечера " + namePerson + " " + surnamePerson + ", мои поздравления что вам " + agePerson);

// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!