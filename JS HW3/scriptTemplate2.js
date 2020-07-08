// =================
// =====class=======
// =================

console.log("test");

// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let element011 = document.getElementById("main_header");
element011.style.color = "orange";

// -- робить шириниу елементу ul 400 пікселів

let ul016 = document.getElementsByTagName("ul");
ul016[0].style.width = "400px";


// -- робить шириниу всіх елементів з класом linkList шириною 50%

let li022 = document.getElementsByClassName("linkList");
for (let i = 0; i < li022.length; i++) {
    li022[i].style.width = "50%";
}


// -- отримує текст який зберігається в елементі з класом listElement2

let text030 = document.getElementsByClassName("listElement2");
// text030 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// -- отримує всі елементи li та змінює ім колір фону на сірий

let li035 = document.getElementsByTagName("li");
for (let i = 0; i < li035.length; i++) {
    li035[i].style.backgroundColor = "lightgrey";
}

// -- отримує всі елементи 'a' та додає їм клас anchor

let a040 = document.getElementsByTagName("a");
for (let i = 0; i < a040.length; i++) {
    a040[i].classList.add("anchor");    
}


// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for (let i = 0; i < a040.length; i++) {
    if (a040[i] === "link3") {
        a040[i].style.fontSize = "40px"; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }
}


// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// -- отримати елементи p та змінити їм paddin на довільне значення
// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// © 2020 GitHub, Inc.