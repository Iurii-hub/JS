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

let myDay = "";

function wakeUp(isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "hello";
            cb(null, myDay);
        } else {
            cb("day's lost", null)
        }
    }, 500) 
}

function getUp(isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "well done";
            cb(null, myDay);
        } else {
            cb("lazy", null)
        }
    }, 100) 
}

function wc (isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "good job";
            cb(null, myDay);
        } else {
            cb("ill", null)
        }
    }, 200) 
}

function teeth (isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "care";
            cb(null, myDay);
        } else {
            cb("dentist is waiting", null)
        }
    }, 700) 
}

function shower (isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "nice looking";
            cb(null, myDay);
        } else {
            cb("dirty", null)
        }
    }, 300) 
}

function breakfast (isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "tasty";
            cb(null, myDay);
        } else {
            cb("hungry", null)
        }
    }, 300) 
}

function dress (isSmooth, cb) {
    setTimeout(() => {
        if (isSmooth) {
            myDay = "good";
            cb(null, myDay);
        } else {
            cb("cold", null)
        }
    }, 900) 
}

wakeUp(true, (error, myDay) => {
    if (error) {
        console.log(error);
    } else {
        console.log(myDay);

        getUp(myDay, (error, myDay) => {
            if (error) {
                console.log(error);
            } else {
                console.log(myDay);
            }
        })
    }

})









// Значить так. #task 
// Необхіжно реалізувати друкарську машинку.
// У вас є інпут. Ви в нього ввожите якусь слово і тицькаєте кнопку "друкувати".

// Після того як ви тикнули кнопку вам необхідно запустити функцію яка буде друкувтаи на строніці то, шо ви ввели по одній букві з рандомною затримкою від 0.1 до 0.5 секунд. 
// Тим самим симулюючи друкування цього тексту реальною людиною.
// НА КОЖНУ БУКВА РІЗНА ЗАТРИМКА !