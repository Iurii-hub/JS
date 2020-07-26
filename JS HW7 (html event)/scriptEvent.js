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

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити 
// вік чи меньше він ніж 18, та повідомити про це користувача

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
    { title: 'user 1', body: 'lorem ipsum dolo sit ameti' },
    { title: 'user 2', body: 'lorem ipsum dolo sit ameti' },
    { title: 'user 3', body: 'lorem ipsum dolo sit ameti' },
    { title: 'user 4', body: 'lorem ipsum dolo sit ameti' }
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

let elemNew = document.querySelector(`#elemNew`);
let btnTypeNew = document.getElementById("btnTypeNew");
let inputNew1 = document.getElementById("typeNew1");
let inputNew2 = document.getElementById("typeNew2");
let inputNew3 = document.getElementById("typeNew3");

function createTableNew(rows, cols, contentNew) {
    let table = document.createElement("table");

    rows = document.getElementById("typeNew1").value;
    cols = document.getElementById("typeNew2").value;
    contentNew = document.getElementById("typeNew3").value;

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < cols; j++) {
            let td = document.createElement("td");
            td.innerText = contentNew;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    elemNew.appendChild(table);
}

btnTypeNew.onclick = (event) => {

    createTableNew(inputNew1, inputNew2, inputNew3);
}

// let elemNew = document.querySelector(`#elemNew`);
// let btnTypeNew = document.getElementById("btnTypeNew");
// let inputNew1 = document.getElementById("typeNew1");
// let inputNew2 = document.getElementById("typeNew2");
// let inputNew3 = document.getElementById("typeNew3");

// function createTableNew(rows, cells, contentNew) {
//     let table = document.createElement("table");

//     rows = document.getElementById("typeNew1").value;
//     cells = document.getElementById("typeNew2").value;
//     contentNew = document.getElementById("typeNew3").value;

//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement("tr");

//         for (let j = 0; j < cells / rows; j++) {
//             let td = document.createElement("td");

//             if ((i + 1) * (j + 1) < cells) {
//                 td.innerText = contentNew
//             } else {
//                 td.innerText = " "
//                 }
//                 tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     elemNew.appendChild(table);
// }

// btnTypeNew.onclick = (event) => {

//     createTableNew(inputNew1, inputNew2, inputNew3);
// }



// (Додатковачастина для завдання)

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let arrImg = [
    { id: 1, img_url: "pic/tiggo1.jpg" },
    { id: 2, img_url: "pic/tiggo2.jpg" },
    { id: 3, img_url: "pic/tiggo3.jpg" },
    { id: 4, img_url: "pic/tiggo4.jpg" },
];

const contentP = document.getElementById("pictures");
const img = document.createElement("img");
const btnLeft = document.createElement("button");
const btnRight = document.createElement("button");

btnLeft.innerText = "Left";
btnRight.innerText = "Right";

let index = 0;

img.width = 400;
img.src = arrImg[index].img_url;

contentP.appendChild(img);
contentP.appendChild(btnLeft);
contentP.appendChild(btnRight);

btnLeft.onclick = () => {
    index - 1 < 0
        ? index = arrImg.length - 1
        : index = index - 1

    img.src = arrImg[index].img_url
};

btnRight.onclick = () => {
    index + 1 > arrImg.length - 1
        ? index = 0
        : index = index + 1

    img.src = arrImg[index].img_url
}


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

let arrBadWords = ["bad1", "bad2", "bad3", "bad4", "bad5"];
let inputBw = document.createElement("input");
const btnBw = document.createElement("button");

btnBw.innerText = "Check";

const divBw = document.getElementById("badWords");
divBw.appendChild(inputBw);
divBw.appendChild(btnBw);

inputBw.id = "wordId";

function getCheckBadWord() {
    let inp = document.querySelector("#wordId");
    console.log(inp.value); 

    let inpArr = inp.value.split(" ")

for (let j = 0; j < inpArr.length; j++) {
    for (let i = 0; i < arrBadWords.length; i++) {  
        if (inpArr[j] === arrBadWords[i]) {
            alert("Warning, such word is not allowed")
        }
    }    
}
   
}

btnBw.onclick = (event) => {
    getCheckBadWord()
}


// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте

const arrHeads = document.getElementsByTagName("h2");
const contentRules = document.getElementById("contentRules");
const wrap = document.getElementById("wrap");
const ul = document.createElement("ul");

for (let i = 0; i < arrHeads.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    let anchor = "anchor" + i;
    a.href = "#" + anchor;
    arrHeads[i].setAttribute("id", anchor);
    a.innerHTML = arrHeads[i].innerText;
    li.appendChild(a);
    ul.appendChild(li);
}

contentRules.appendChild(ul);
contentRules.style.width = "40%";
wrap.style.width = "60%";
contentRules.style.float = "left";
wrap.style.float = "left";


// -- взять массив пользователей
let usersWithAddress = [
    { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
    { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
    { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
    { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
    { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
    { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
    { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
    { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
    { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
    { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

const userAddress = document.getElementById("userAddress");
const userDiv = document.createElement("div");
userDiv.className = "user";
userDiv.appendChild(renderContent(usersWithAddress));

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");

const label1 = document.createElement("label");
const label2 = document.createElement("label");
const label3 = document.createElement("label");

const buttonAddress = document.createElement("button");

label1.innerText = "со статусом false";
label2.innerText = "старше 29 лет включительно";
label3.innerText = "город киев";

buttonAddress.innerText = "Filter";

input1.type = "checkbox";
input2.type = "checkbox";
input3.type = "checkbox";

userAddress.appendChild(userDiv);

userAddress.appendChild(label1);
userAddress.appendChild(input1);
userAddress.appendChild(label2);
userAddress.appendChild(input2);
userAddress.appendChild(label3);
userAddress.appendChild(input3);

userAddress.appendChild(buttonAddress);

buttonAddress.onclick = (event) => {
    let myArray = JSON.parse(JSON.stringify(usersWithAddress));

    if (input1.checked) myArray = myArray.filter(value => !value.status);
    if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
    if (input3.checked) myArray = myArray.filter(value => value.address.city === "Kyiv");

    userDiv.innerHTML = "";
    userDiv.appendChild(renderContent(myArray));
}


function renderContent(array) {
    const main = document.createElement("div");
    array.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = JSON.stringify(item);
        main.appendChild(div);
    })
    return main;
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан