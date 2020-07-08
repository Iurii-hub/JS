
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

division031[0].style.color = "blue";

class034[0].style.color = "blue";

// body037[0].style.backgroundColor = "blue";

paragraph040[0].style.color = "blue";

for (let i = 0; i < li043.length; i++) {
    li043[i].style.color = "blue";
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
    li043[i].style.color = "red";
}


// ====================
// ====================
// ====================

