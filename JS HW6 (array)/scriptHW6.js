console.log("test");

// - создать массив с 20 числами.

let arr20 = [15, 34, 78, -65, 20, -89, 211, -44, 981, 0, 54, -41, 84, 12, 653, -711, -41, 92, 48, 762];

let arr20random = [];
for (let i = 0; i < 20; i++) {
    let resultRandom = Math.round(Math.random() * 100);
    arr20random.push(resultRandom);  
}
console.log(arr20random);

// -- при помощи метода sort и колбека  отсортировать массив.

arr20.sort((a, b) => a - b);
console.log(arr20);

arr20random.sort((a, b) => a - b);
console.log(arr20random);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

arr20.sort((a, b) => b - a);
console.log(arr20);


// -- при помощи filter получить числа кратные 3

// let filteredArr20 = arr20.filter((a) => {
//     if (a % 3 === 0) {
//         return true
//     }
// })
let filteredArr20 = arr20.filter((a) => (a % 3 === 0 && a !== 0));

console.log(filteredArr20);


// -- при помощи filter получить числа кратные 10

// let filteredArr20new = arr20.filter((a) => {
//     return (a % 10 === 0)
// })
let filteredArr20new = arr20.filter((a) => (a % 10 === 0 && a !== 0));
console.log(filteredArr20new);


// -- перебрать (проитерировать) массив при помощи foreach()

arr20.forEach(a => console.log(a));


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let mappedArr20 = arr20.map(a => (a * 3));
console.log(mappedArr20);


// - создать массив со словами на 15-20 элементов.

let arrNames = ["gosha", "Alex", "max", "Tolya", "Kolya", "Sveta", "tanya", "Nura", 
"paul", "David", "Nick", "Anton", "Roma", "Dima", "Valera", "bogdan"];


// -- отсортировать его по алфавиту в восходящем порядке.

// arrNames.sort();
// console.log(arrNames)

arrNames.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return - 1
    }
    return 1
})
console.log(arrNames)


// -- отсортировать его по алфавиту  в нисходящем порядке.


// arrNames.sort((a, b) => {
//     if (a.toLowerCase() < b.toLowerCase()) {
//         return 1
//     }
//     return - 1
// })
// console.log(arrNames)



// -- отфильтровать слова длиной менее 4х символов

let filteredNames = arrNames.filter(a => a.length < 4);
console.log(filteredNames);


// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let mappedArrNames = arrNames.map(a => a + "!");
// console.log(mappedArrNames);

let mappedArrNames = arrNames.map(a => {
    a = a + "!";
    return a
})
console.log(mappedArrNames);


// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
let users = [ 
    {name: 'vasya', age: 31, status: false}, 
    {name: 'petya', age: 30, status: true}, 
    {name: 'kolya', age: 29, status: true}, 
    {name: 'olya', age: 28, status: false}, 
    {name: 'max', age: 30, status: true}, 
    {name: 'anya', age: 31, status: false}, 
    {name: 'oleg', age: 28, status: false}, 
    {name: 'andrey', age: 29, status: true}, 
    {name: 'masha', age: 30, status: true}, 
    {name: 'olya', age: 31, status: false}, 
    {name: 'max', age: 31, status: true} 
];
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// users.sort((a, b) => b.age - a.age);
// console.log(users);


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// users.sort((a, b) => a.name.length - b.name.length);
// console.log(users);

// users.sort((a, b) => b.name.length - a.name.length);
// console.log(users);


// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// (По якому принципу його створювати - ваше рішення), 
// та зберегти це в новий масив (первинний масив залишиться без змін)

let usersNew = JSON.parse(JSON.stringify(users));

usersNew.map((user, id) => {
    user.id = id + 1;

    return user; 
});

console.log(users);
console.log(usersNew);


// - відсортувати його за індентифікатором

let usersNew2 = JSON.parse(JSON.stringify(usersNew));

usersNew2.sort((a, b) => b.id - a.id)
console.log(usersNew2)


// -- наисать функцию калькулятора с 2мя числами и колбеком




// -- наисать функцию калькулятора с 3мя числами и колбеком




// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================

let cars = [ 
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400}, 
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250}, 
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300}, 
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140}, 
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200}, 
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165}, 
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120}, 
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120}, 
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350}, 
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180}, 
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400}, 
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];
// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів

const carsVolumeMore3 = cars.filter(a => a.volume > 3);
console.log(carsVolumeMore3);

// - двигун = 2л

const carsVolumeEq2 = cars.filter(a => a.volume === 2);
console.log(carsVolumeEq2);


// - виробник мерс

const carsProdMerc = cars.filter(a => a.producer === "mercedes");
console.log(carsProdMerc);


// - двигун більше 3х літрів + виробник мерседес

const carsProdMercVolMore3 = cars.filter(a => a.producer === "mercedes" && a.volume > 3);
console.log(carsProdMercVolMore3);


// - двигун більше 3х літрів + виробник субару

const carsProdSubVolMore3 = cars.filter(a => a.producer === "subaru" && a.volume > 3);
console.log(carsProdSubVolMore3);


// - сили більше ніж 300

const carsPowerMore300 = cars.filter(a => a.power > 300);
console.log(carsPowerMore300);


// - сили більше ніж 300 + виробник субару

const carsPowerMore300Sub = cars.filter(a => a.power > 300 && a.producer === "subaru");
console.log(carsPowerMore300Sub);


// - мотор серіі ej

const carsEngEj = cars.filter(a => a.engine.startsWith("ej"));
console.log(carsEngEj);


// - сили більше ніж 300 + виробник субару + мотор серіі ej

const carsEngEjPowMore300 = cars.filter(a => a.engine.startsWith("ej") && a.power > 300);
console.log(carsEngEjPowMore300);


// - двигун меньше 3х літрів + виробник мерседес

const carsMercEngVolLess3 = cars.filter(a => a.producer === "mercedes" && a.engine < 3);
console.log(carsMercEngVolLess3);


// - двигун більше 2л + сили більше 250

const carsEngMore250VolMore2 = cars.filter(a => a.volume > 2 && a.power > 250);
console.log(carsEngMore250VolMore2);


// - сили більше 250  + виробник бмв

const carsProdBmwPowMore250 = cars.filter(a => a.producer === "bmw" && a.power > 250);
console.log(carsProdBmwPowMore250);


// - взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}}, 
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}, 
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}}, 
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}}, 
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}}, 
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}}, 
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, 
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}}, 
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, 
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}
];

// -- отсортировать его по id пользователей

// usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(usersWithAddress);


// -- отсортировать его по id пользователей в обратном опрядке

usersWithAddress.sort((a, b) => b.id - a.id);
console.log(usersWithAddress);


// -- отсортировать его по возрасту пользователей

let usersWithAddress2 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress2.sort((a, b) => a.age - b.age);
console.log(usersWithAddress2);


// -- отсортировать его по возрасту пользователей в обратном порядке

let usersWithAddress3 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress3.sort((a, b) => b.age - a.age);
console.log(usersWithAddress3);


// -- отсортировать его по имени пользователей

let usersWithAddress4 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress4.sort((a, b) => {
    if (a.name < b.name) {
        return -1
    }
    return 1
});
console.log(usersWithAddress4);


// -- отсортировать его по имени пользователей в обратном порядке

let usersWithAddress5 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress5.sort((a, b) => {
    if (a.name > b.name) {
        return -1
    }
    return 1
});
console.log(usersWithAddress5);


// -- отсортировать его по названию улицы  в алфавитном порядке

let usersWithAddress6 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress6.sort((a, b) => {
    if (a.address.street < b.address.street) {
        return -1
    }
    return 1
});
console.log(usersWithAddress6);


// -- отсортировать его по номеру дома по возрастанию

let usersWithAddress7 = JSON.parse(JSON.stringify(usersWithAddress));

usersWithAddress7.sort((a, b) => {
    if (a.address.number < b.address.number) {
        return -1
    }
    return 1
});
console.log(usersWithAddress7);


// -- отфильтровать (оставить) тех кто младше 30

let usersYounger30 = usersWithAddress.filter(a => a.age < 30);
console.log(usersYounger30);


// -- отфильтровать (оставить) тех у кого отрицательный статус

let usersFalse = usersWithAddress.filter(a => a.status === false);
console.log(usersFalse);


// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

let usersFalseYounger30 = usersWithAddress.filter(a => a.status === false && a.age < 30);
console.log(usersFalseYounger30);


// -- отфильтровать (оставить) тех у кого номер дома четный

let usersNumber2 = usersWithAddress.filter(a => a.address.number % 2 === 0);
console.log(usersNumber2);


// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.

let arrCars = [
    {model: "acura", hp: 230, owner: {name: "driver1", age: 32, driveExp: 12}, cost: 21226, year: 2020},
    {model: "bmw", hp: 339, owner: {name: "driver2", age: 38, driveExp: 17}, cost: 6500, year: 1995},
    {model: "citroen", hp: 130, owner: {name: "driver3", age: 26, driveExp: 4}, cost: 4565, year: 2010},
    {model: "dodge", hp: 90, owner: {name: "driver4", age: 67, driveExp: 41}, cost: 2176, year: 1988},
    {model: "ford", hp: 67, owner: {name: "driver5", age: 55, driveExp: 33}, cost: 7844, year: 2001},
    {model: "kia", hp: 111, owner: {name: "driver6", age: 18, driveExp: 1}, cost: 876, year: 1990},
    {model: "mazda", hp: 256, owner: {name: "driver7", age: 32, driveExp: 12}, cost: 32000, year: 2016},
    {model: "lincoln", hp: 432, owner: {name: "driver8", age: 27, driveExp: 4}, cost: 44000, year: 2010},
];

// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

let arrCars1 = JSON.parse(JSON.stringify(arrCars));

let carPower = arrCars1.map((car, index) => {
    if (index < (arrCars1.length/2)) {
        
            car.hp *= 1.1;
            
    
            console.log(car.model, "hp " + car.hp);
            return car; 
    }   
})
console.log(arrCars1);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

let arrDriver = [
    {name: "new1", age: 42, driveExp: 22},
    {name: "new2", age: 52, driveExp: 32},
    {name: "new3", age: 62, driveExp: 42},
    {name: "new4", age: 72, driveExp: 52},
]

arrCars1.forEach((a, index) => {

    if (index < (arrCars1.length/2)) {
        
        a.owner = arrDriver[index];
    
        // console.log(a.owner);
        return a.owner; 
    }   
});

console.log(arrCars1);


// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

let arrCars3 = arrCars;

let carPower3 = arrCars3.map((car, index) => {
    if (index % 2 === 0) {
        
            car.hp *= 1.1;
            car.cost *=1.05;
            
    
            console.log(car.model, "hp " + car.hp, "cost " + car.cost);
            return car; 
    }   
})
console.log(arrCars3);


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, 
// що збільшить йому досвід на 1 рік.

let driveExpAge = arrCars3;
driveExpAge.forEach(a => {
    if (a.owner.driveExp < 5 && a.owner.age > 25) {
        console.log(a.owner.name + " відправити на курси підвищення кваліфікації");
        a.owner.driveExp +=1;
        console.log(a.owner.driveExp);
    
    }
})
console.log(driveExpAge);


// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

let totalCarCost = arrCars3.reduce((accumulator, currentValue) => {
    // console.log(accumulator.cost);
    // console.log(currentValue.cost);
    return accumulator + currentValue.cost
}, 0);

console.log(totalCarCost);


// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];

// function finder (number, arr) {
//     let minIndex = arr.indexOf(number);
//     let maxIndex = arr.lastIndexOf(number);

//     console.log("minIndex = " + minIndex);
//     console.log("maxIndex = " + maxIndex);
// }

// finder(1, arr);
// finder(4, arr);

function finder(arr, number) {
    let min = null;
    let max = null;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === number) {
            if (!min) {
                min = index;
            }
            max = index;
        }
    }
    min !== null 
        ? console.log(`minIndex = ${min} maxIndex = ${max}`) 
        : console.log(-1);
}

finder(arr, 4);

