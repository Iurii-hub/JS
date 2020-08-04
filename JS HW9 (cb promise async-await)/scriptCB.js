// console.log("test");

// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.

// І їх всіх реалізувати трьома спомобами.
// Колбек. Проміс. Асинк

console.log("CALLBACK");

// let myDay = "";

// function wakeUp(isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "hello";
//             cb(null, myDay);
//         } else {
//             cb("day's lost", null)
//         }
//     }, 500) 
// }

// function getUp(isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "well done";
//             cb(null, myDay);
//         } else {
//             cb("lazy", null)
//         }
//     }, 100) 
// }

// function wc (isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "good job";
//             cb(null, myDay);
//         } else {
//             cb("ill", null)
//         }
//     }, 200) 
// }

// function teeth (isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "care";
//             cb(null, myDay);
//         } else {
//             cb("dentist is waiting", null)
//         }
//     }, 700) 
// }

// function shower (isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "nice looking";
//             cb(null, myDay);
//         } else {
//             cb("dirty", null)
//         }
//     }, 300) 
// }

// function breakfast (isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "tasty";
//             cb(null, myDay);
//         } else {
//             cb("hungry", null)
//         }
//     }, 300) 
// }

// function dress (isSmooth, cb) {
//     setTimeout(() => {
//         if (isSmooth) {
//             myDay = "good";
//             cb(null, myDay);
//         } else {
//             cb("cold", null)
//         }
//     }, 900) 
// }

// wakeUp(true, (error, myDay) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(myDay);

//         getUp(myDay, (error, myDay) => {
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log(myDay);
//             }
//         })
//     }

// })


console.log("PROMISE");

let chance = 0.2;

function myDay2(wakeup2) {
    console.log("**********************");
    console.log("time to wake up");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(wakeup2)
                : reject("day's lost")
        }, 1000)
        
    })  
}

function getUp2(getup2) {
    console.log("**********************");
    console.log("time to get up");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(getup2)
                : reject("ill")
        }, 1000)
    })  
}

function shower2(shower2) {
    console.log("**********************");
    console.log("time to take a shower");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(shower2)
                : reject("dirty")
        }, 1000)
    })  
}

function breakfast2(breakfast2) {
    console.log("**********************");
    console.log("time to eat");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(breakfast2)
                : reject("hungry")
        }, 1000)
    })  
}

function dress2(dress2) {
    console.log("**********************");
    console.log("time to dress up");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(dress2)
                : reject("naked")
        }, 1000)
    })  
}

function walk2(walk2) {
    console.log("**********************");
    console.log("time to walk");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(walk2)
                : reject("lazy")
        }, 1000)
    })  
}

function sleep2(sleep2) {
    console.log("**********************");
    console.log("go to bed");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > chance
                ? resolve(sleep2)
                : reject("insomnia")
        }, 1000)
    })  
}


myDay2("wake up")
    .then((result) => {
        console.log(result);
        return getUp2("good morning")
    })
    .then((result) => {
        console.log(result);
        return shower2("nice looking")
    })
    .then((result) => {
        console.log(result);
        return breakfast2("tasty food")
    })
    .then((result) => {
        console.log(result);
        return dress2("perfect look")
    })
    .then((result) => {
        console.log(result);
        return walk2("good wheather outside")
    })
    .then((result) => {
        console.log(result);
        return sleep2("good night")
    })
    .then((result) => {
        console.log(result); 
    })
    .catch(error => {
        console.error("error", error);
    });


// console.log("ASYNC/AWAIT");


// Значить так. #task 
// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !