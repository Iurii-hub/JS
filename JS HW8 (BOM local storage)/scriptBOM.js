// console.log("test");

// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

// let textArea = document.getElementById("textId");

// textArea.value = localStorage.getItem("textArea");

// textArea.oninput = (event) => {
//     localStorage.setItem("textArea", event.target.value);
// }


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

btnLeft.onclick = () => {
    btnRight.style.visibility = "visible";
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === textArea3.value) {
                index = key;
            }
        }
    }
    if (index === "1") {
        btnLeft.style.visibility = "hidden";
        return;
    }
    textArea3.value = localStorage.getItem(index - 1);
}

btnRight.onclick = () => {
    btnLeft.style.visibility = "visible";
    let index;
    for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            if (localStorage.getItem(key) === textArea3.value) {
                index = key;
            }
        }
    }
    if (index === localStorage.length.toString()) {
        btnRight.style.visibility = "hidden";
        return;
    }
    textArea3.value = localStorage.getItem(+index + 1);
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

    // let item = localStorage.getItem(noteBook);
    // const noteBook = JSON.parse(item);

    noteBook.forEach(({name, email, phone, company, department, birth}, index) => {
        let userDiv = document.createElement("div");
        userDiv.innerText = `${index + 1}. name: ${name}, email: ${email}, phone: ${phone}, company: ${company}, department: ${department}, birth: ${birth}`;
    
        const remove = document.createElement("button");
        remove.innerText = "Remove";
        
        const edit = document.createElement("button");
        edit.innerText = "Edit";
        

        remove.onclick = () => {
            noteBook.splice(index, 1);
            
            localStorage.setItem("noteBook", JSON.stringify(noteBook))
            
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
    document.getElementById("editForm").style.display = "block";

    let editName = document.getElementById("editName");
    let editPhone = document.getElementById("editPhone");
    let editEmail = document.getElementById("editEmail");
    let editCompany = document.getElementById("editCompany");
    let editDepartment = document.getElementById("editDepartment");
    let editBirth = document.getElementById("editBirth");
    let btnSaveEdit = document.getElementById("saveEdit");

    editName.value = name;
    editPhone.value = phone;
    editEmail.value = email;
    editCompany.value = company;
    editDepartment.value = department;
    editBirth.value = birth;

    btnSaveEdit.onclick = () => {
        noteBook[index].name = editName.value;
        noteBook[index].phone = editPhone.value;
        noteBook[index].email = editEmail.value;
        noteBook[index].company = editCompany.value;
        noteBook[index].birth = editBirth.value;

        editor();

        document.getElementById("editForm").style.display = "none";
    }

}

// 2nd option

const arrUsers2 = "Array Users 2";
let tempUser2 = {};
const content = document.getElementById("content");

const myForm2 = document.forms.myForm2;
myForm2.submit2.onclick = (event) => {
    // event.preventDefault();
    let person = {...tempUser2};
    tempUser2 = {};
    for (let i = 0; i < myForm2.children.length; i++) {
        const myForm2Element = myForm2.children[i];
        if (myForm2Element.name && myForm2Element.type !== "submit") {
            person[myForm2Element.name] = myForm2Element.value;
        }
        
    }
    if (!person.id) {
        person.id = new Date().getTime();
    };
    
    // console.log("person");
    // console.log(person);
    saveUser(person);
    
}


function saveUser(user) {
    if (localStorage.hasOwnProperty(arrUsers2)) {
        const arrUsers2new = JSON.parse(localStorage.getItem(arrUsers2));
        const find = arrUsers2new.find(value => value.id === user.id);
        if (find) {
            const filter = arrUsers2new.filter(value => value.id !== user.id);
            filter.push(user);
            localStorage.setItem(arrUsers2, JSON.stringify(filter));

        } else {
            arrUsers2new.push(user);
            localStorage.setItem(arrUsers2, JSON.stringify(arrUsers2new));
        }

    } else {
        localStorage.setItem(arrUsers2, JSON.stringify([user]));
    }
}

function getUser(params) {
    if (localStorage.hasOwnProperty(arrUsers2)) {
        const arrUsers3 = JSON.parse(localStorage.getItem(arrUsers2));
        for (const user of arrUsers3) {
            content.appendChild(createDivPerson(user));
        }
    }
}

getUser();

function createDivPerson(user) {
    const divUser = document.createElement("div");
    let flag = true;
    for (const key in user) {
        if (flag) {
            const h3 = document.createElement("h3");
            h3.innerText = key + " " + user[key];
            divUser.appendChild(h3);
            flag = false;
        } else {
            const p = document.createElement("p");
            p.innerText = key + " " + user[key];
            divUser.appendChild(p);
        }
    }
    divUser.style = "width: 300px; float: left";
    const b1 = document.createElement("button");
    const b2 = document.createElement("button");

    b1.innerText = "Edit";
    b2.innerText = "Delete";

    b1.onclick = () => {
        editUser(user.id);
    };
    b2.onclick = () => {
        deleteUser(user.id);
    }

    divUser.appendChild(b1);
    divUser.appendChild(b2);

    return divUser;
}

function deleteUser(id) {
    const del1 = JSON.parse(localStorage.getItem(arrUsers2));
    const del2 = del1.filter(user => user.id !== id);
    localStorage.setItem(arrUsers2, JSON.stringify(del2));
    location.reload();

}

function editUser(id) {
    const edit1 = JSON.parse(localStorage.getItem(arrUsers2));
    const user = edit1.find(user => user.id === id);
    for (let i = 0; i < myForm2.children.length; i++) {
        const myForm2Element = myForm2.children[i];
        if (myForm2Element.name && myForm2Element.type !== "submit") {
            for (const key in user) {
                if (myForm2Element.name === key) {
                    myForm2Element.value = user[key]; 
                }
            }
        }
        
    }
    tempUser2 = user;
}