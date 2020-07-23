console.log("test");

// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


const btnT = document.getElementById("buttonText");
const elemT = document.getElementById("text");

btnT.onclick = (event) => {
    elemT.hidden
    ? elemT.hidden = false
    : elemT.hidden = true
}


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

const btnH = document.getElementById("buttonHide");
btnH.onclick = (event) => {
    btnH.hidden = true
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const btnConfirm = document.getElementById("buttonAge");
// personAge.value = "17";

btnConfirm.onclick = (event) => {
    const ageInput = document.getElementById("personAge");
    const value = personAge.value;
    console.log(value);
    if (value < 18) {
        alert("Access denied")  
    } else {
        alert("Welcome mate")
    }
}


// - Создайте меню, которое раскрывается/сворачивается при клике

const menu = document.getElementById("menu");
const submenu = document.getElementById("submenu");

let flag = "";
menu.onclick = (event) => {
    if (flag) {
        submenu.style.display = "block";
        flag = false;
    } else {
        submenu.style.display = "none";
        flag = true;
    }
}


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentsArr = [
    {title : 'user 1', body:'lorem ipsum dolo sit ameti'},
    {title : 'user 2', body:'lorem ipsum dolo sit ameti'},
    {title : 'user 3', body:'lorem ipsum dolo sit ameti'},
    {title : 'user 4', body:'lorem ipsum dolo sit ameti'}
];

let content = document.getElementById("content");
commentsArr.forEach(item => {
    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btnCom = document.createElement("button");
    
    btnCom.innerText = "hide comment";
    h3.innerText = item.title;
    p.innerText = item.body;
    btnCom.onclick = (event) => {
        p.hidden
        ? p.hidden = false
        : p.hidden = true
    }

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(btnCom);

    content.appendChild(div)
});


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

const btnType = document.getElementById("btnType");
const input11 = document.getElementById("type11");
const input12 = document.getElementById("type12");
const input21 = document.getElementById("type21");
const input22 = document.getElementById("type22");

btnType.onclick = (event) => {
    console.log(input11.value + " " + input12.value + " " + input21.value + " " + input22.value);
}



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

let elem = document.querySelector(`#elem`);


function createTable(rows, cols, parent) {
    let table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.innerText = i.toString() + j.toString();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    parent.appendChild(table);
}
createTable(8, 4, elem);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// const elemNew = document.querySelector(`#elem`);
// const btnTypeNew = document.getElementById("btnTypeNew");
// const inputNew1 = document.getElementById("typeNew1");
// const inputNew2 = document.getElementById("typeNew2");
// const inputNew3 = document.getElementById("typeNew3");

// function createTableNew(rows, cols, contentNew) {
//     let table = document.createElement("table");
    

//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement("tr");

//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement("td");
//             td.innerText = i.toString() + j.toString();
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     contentNew.appendChild(table);
// }

// btnTypeNew.onclick = (event) => {
//     createTableNew(inputNew1, inputNew2, inputNew3, elemNew);
// } //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.


// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку




// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

// -- взять массив пользователей
let usersWithAddress = [
                {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
                {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
                {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
                {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
                {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
                {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
                {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
                {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
                {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
                {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
            ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ



// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан