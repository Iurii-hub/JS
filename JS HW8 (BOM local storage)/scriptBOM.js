// console.log("test");

// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

let textArea = document.getElementById("textId");

textArea.value = localStorage.getItem("textArea");

textArea.oninput = (event) => {
    localStorage.setItem("textArea", event.target.value);
}


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

const form = document.getElementById("form");
getDataForm(form);

function saveForm(t) {
    setDataForm(t);
}


function setDataForm(tag) {
    for (let i = 0; i < tag.length; i++) {
        const tagElement = tag[i];
        console.log(tagElement);
        if (tagElement.type === "checkbox" || tagElement.type === "radio")
        tagElement.checked
            ? tagElement.value = true
            : tagElement.value = false

        localStorage.setItem(tagElement.id, tagElement.value)
        
    }  
}

function getDataForm(tag) {
    for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.hasOwnProperty(tag.children[i].id)) {
        tag.children[i].value = localStorage.getItem(tag.children[i].id);
            if (tag.children[i].value === "true") {
            tag.children[i].setAttribute("checked", "checked");
            }
        } 
    }
}


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
const textArea3 = document.getElementById("textArea3");
const inputSave = document.getElementById("inputSave");

inputSave.onclick = () => {
    localStorage.setItem(localStorage.length + 1, textArea3.value);
}



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


let noteBook = [
        {
          name: "Leanne Graham",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031",
          company: "Romaguera-Crona",
          department: "harness real-time e-markets",
          birth: "13 Jun 1994",
        },
        {
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593",
          company: "Deckow-Crist",
          department: "synergize scalable supply-chains",
          birth: "10 Jul 1974",
        },
        {
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447",
          company: "Romaguera-Jacobson",
          department: "e-enable strategic applications",
          birth: "22 Jan 1986",
        },
]

let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let companyInput = document.getElementById("company");
let departmentInput = document.getElementById("department");
let birthInput = document.getElementById("birth");
const save = document.getElementById("btnSave");
const edit = document.getElementById("btnEdit");
let allUsers = document.getElementById("allUsers");


function editor(params) {
    allUsers.innerHTML = "";

    noteBook.forEach(({name, email, phone, company, department, birth}, index) => {
        let userDiv = document.createElement("div");
        userDiv.innerText = `${index + 1}. name: ${name}, email: ${email}, phone: ${phone}, company: ${company}, department: ${department}, birth: ${birth}`;
    
        const remove = document.createElement("button");
        remove.innerText = "Remove";
        
        const edit = document.createElement("button");
        edit.innerText = "Edit";
        

        remove.onclick = () => {
            noteBook.splice(index, 1);

            editor();
        }
        
        edit.onclick = () => {
            editHelper ({name, email, phone, company, department, birth}, index);

        }


        userDiv.style.backgroundColor = "lightgreen";
        allUsers.appendChild(userDiv);
        userDiv.style.margin = "20px";
    
        userDiv.appendChild(remove);
        userDiv.appendChild(edit);
    
    })
}
editor()

save.onclick = () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const company = companyInput.value;
    const department = departmentInput.value;
    const birth = birthInput.value;


    noteBook.push({name, email, phone, company, department, birth});

    editor();
}

function editHelper({name, email, phone, company, department, birth}, index) {
    


}
