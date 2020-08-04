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


let chanceCB = 0.3;

function myDay(cb) {
    console.log("**********************");
    setTimeout(() => {
        Math.random() > chanceCB
            ? cb(null, "time to wake up")
            : cb("day's lost")
        }, 1000)
}

function getUp(check, cb) {
    console.log("**********************");
    setTimeout(() => {
        check
            ? cb(null, "time to get up")
            : cb("ill")
        }, 1000) 
}

function shower(check, cb) {
    console.log("**********************");
    setTimeout(() => {
        check
            ? cb(null, "time to take a shower")
            : cb("dirty")
        }, 1000)
}

function breakfast(check, cb) {
    console.log("**********************");
    setTimeout(() => {
        check
            ? cb(null, "time to eat")
            : cb("hungry")
        }, 1000)
}

function dress(check, cb) {
    console.log("**********************");
    setTimeout(() => {
        check
            ? cb(null, "time to dress up")
            : cb("naked")
        }, 1000)
}

function walk(check, cb) {
    console.log("**********************");
    setTimeout(() => {
        check
            ? cb(null, "time to walk")
            : cb("lazy")
        }, 1000)
}

function sleep(check, cb) {
    console.log("**********************");
        setTimeout(() => {
            check
                ? cb(null, "go to bed")
                : cb("insomnia")
        }, 1000)
}

myDay((error, data) => {
    if (error) {
        console.error(error, "didn't wake up");
    } else {
        console.log(data);
        getUp(true, (error, data) => {
            if (error) {
                console.error(error, "didn't get up");
            } else {
                console.log(data);
                shower(true, (error, data) => {
                    if (error) {
                        console.error(error, "didn't take a shower");
                    } else {
                        console.log(data);
                        breakfast(true, (error, data) => {
                            if (error) {
                                console.error(error, "didn't have a breakfast");
                            } else {
                                console.log(data);
                                dress(true, (error, data) => {
                                    if (error) {
                                        console.error(error, "didn't dress up");
                                    } else {
                                        console.log(data);
                                        walk(true, (error, data) => {
                                            if (error) {
                                                console.error(error, "didn't walk");
                                            } else {
                                                console.log(data);
                                                sleep(false, (error, data) => {
                                                    if (error) {
                                                        console.error(error, "couldn't sleep");
                                                    } else {
                                                        console.log(data);
                                                        console.log("**********************");
                                                        console.log("the end");
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})


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


console.log("ASYNC/AWAIT");


// Значить так. #task 
// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !