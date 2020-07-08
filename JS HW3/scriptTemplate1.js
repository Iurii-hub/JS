
// -Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

console.log("test");


// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"

let text010 = document.getElementById("content");
console.log(text010);


// - отримує текст з блоку з id "rules"

let text016 = document.getElementById("rules");
console.log(text016);


// - замініть текст параграфа з id 'content' на будь-який інший

text010.innerText = "Оформлення проїзду на поїзди до Луганської та Донецької областей за 45 діб. Відтепер квитки на поїзди, що";

// - замініть текст параграфа з id 'rules' на будь-який інший

text016.innerText = "Укроборонпром офіційно призначив нового президента ДП Антонов (Економічна правда)";


// - змініть кожному елементу колір фону на червоний

let division031 = document.getElementsByTagName("div");
division031[0].style.backgroundColor = "red";

let class034 = document.getElementsByClassName("fc bp");
class034[0].style.backgroundColor = "red";

let body037 = document.getElementsByTagName("body");
// body037[0].style.backgroundColor = "red";

let paragraph040 = document.getElementsByTagName("p");
paragraph040[0].style.backgroundColor = "red";

let li043 = document.getElementsByTagName("li");
for (let i = 0; i < li043.length; i++) {
    li043[i].style.backgroundColor = "red";
}

// - змініть кожному елементу колір тексту на синій

division031[0].style.backgroundColor = "blue";

class034[0].style.backgroundColor = "blue";

// body037[0].style.backgroundColor = "blue";

paragraph040[0].style.backgroundColor = "blue";

for (let i = 0; i < li043.length; i++) {
    li043[i].style.backgroundColor = "blue";
}


// - отримати весь список класів елемента з id=rules і вивести їх в console.log

let class065 = document.getElementsByClassName("fc_rules");
console.log(class065);


// - отримати всі елементи з класом fc_rules

for (let i = 0; i < li043.length; i++) {
    console.log(li043[i]);
}


// - поміняти колір тексту у всіх елементів fc_rules на червоний

for (let i = 0; i < li043.length; i++) {
    li043[i].style.backgroundColor = "red";
}


// ====================
// ====================
// ====================

// =================
// =====class=======
// =================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший
// -- робить шириниу елементу ul 400 пікселів
// -- робить шириниу всіх елементів з класом linkList шириною 50%
// -- отримує текст який зберігається в елементі з класом listElement2
// -- отримує всі елементи li та змінює ім колір фону на сірий
// -- отримує всі елементи 'a' та додає їм клас anchor
// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// © 2020 GitHub, Inc.