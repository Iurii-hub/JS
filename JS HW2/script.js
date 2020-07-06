let str = "String";
let num = 31;
let bool = true;
let undef = undefined;
let null1 = null;
let obj = {};
let symb = Symbol;

// let bigInt1 = bigInt(333_333_333_332_324_254);



// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу

let arr1 = [10, 2, -34, 0.12, -0.45];
console.log(arr1);
arr1[2] = "array99";
console.log(arr1);

let arr2 = ["red", "white", "green", "blue", "black"];
console.log(arr2);

let arr3 = ["dark", 34, true, false, 55];
console.log(arr3);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arrEmpty = [];
    arrEmpty[5] = 34;
    arrEmpty[9] = true;
    arrEmpty[12] = "word";
console.log(arrEmpty);


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write("<div>hi</div>");
};


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    // document.write(i);
    document.write(i, "<div>yeah</div>");
};


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write("<h1>ohoho</h1>");
    i++;
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let p = 0;
while (p < 20) {
    document.write(p, "<h1>ohoho</h1>");
    p++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr10 = [10, 2, -34, 0.12, -0.45, 45, 12, 76, 37, 0];
for (array of arr10) {
    document.write(array, " ");
    // console.log(array);
}

document.write("<hr>");
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr10str = ["red", "white", "green", "blue", "black", "purple", "orange", "magenta", "silver", "gray"];
for (array of arr10str) {
    document.write(array, " ");
}

document.write("<hr>");
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr10any = ["dark", 34, true, false, 55, "pink", "yellow", 12, -0.456, true];
for (array of arr10any) {
    document.write(array, " ");
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arr10some = ["dark", 34, true, false, 55, "pink", "yellow", 12, -0.456, true];

// for (let d = 0; d < 10; d++) {
//     if (arr10some[d] === true || arr10some[d] === false) {
//         console.log(typeof arr10some[d]);
//     }
// }

for (let bool of arr10some) {
    if (typeof bool === "boolean") {
        console.log(bool);
    }   
}


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

for (let num of arr10some) {
    if (typeof num === "number") {
        console.log(num);
    } 
}


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

for (let str of arr10some) {
    if (typeof str === "string") {
        console.log(str);
    } 
}


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. 
// Вивести в консоль всі його елементи в циклі.

let arrEmpty2 = [];
    arrEmpty2[0] = 34;
    arrEmpty2[1] = "ring";
    arrEmpty2[2] = false;
    arrEmpty2[3] = 21.34;
    arrEmpty2[4] = 4567.1;
    arrEmpty2[5] = null;
    arrEmpty2[6] = undefined;
    arrEmpty2[7] = Symbol;
    arrEmpty2[8] = true;
    arrEmpty2[9] = "word";
for (let elem of arrEmpty2) {
    console.log(elem);
}


// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 10; i++) {
    document.write("<hr>", i);
    console.log(i);
};


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 1; i <= 100; i++) {
    document.write("<br>", i);
    console.log(i);
}


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i += 2) {
    document.write("<br>", i);
    console.log(i);
}


// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        document.write("<br>", i);
        console.log(i);
    }
}


// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        document.write("<br>", i);
        console.log(i);
    }
}


// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

for (let minute = 0; minute <= 2; minute++) {
    for (let second = 0; second < 60; second++) {
        if (minute === 2 && second === 1) {
            break;
        }
        console.log(minute + "min " + second + "sec");
    }
        
}


// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// for (let hour = 0; hour < 3; hour++) {
//     for (let minute = 0; minute < 60; minute++) {
//         if (hour === 2 && minute === 20) {
//             break;
//         }
//         for (let second = 0; second < 60; second++) {
//             console.log(hour + "h " + minute + "min " + second + "sec");
//         }
//     }
// }

for (let hour = 0; hour < 3; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        for (let second = 0; second <60; second++) {
            if (hour === 2 && minute === 20 && second === 1) {
                break;
            }
            console.log(hour + "h " + minute + "min " + second + "sec");
        }
        if (hour === 2 && minute === 20) {
            break;
        }
    }
}


// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arrOfSymbols = ["a", "b", "c"];

let box = "";
for (let m = 0; m < arrOfSymbols.length; m++) {
    box += arrOfSymbols[m];
}
console.log(box);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let l = "";
let q = 0;
while (q < arrOfSymbols.length) {
    l += arrOfSymbols[q];
    q++
}
console.log(l);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let x = "";
for (const symb of arrOfSymbols) {
    x += symb
}
console.log(x);

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let ii = ["a", "b", "c"];
ii[3] = "1";
ii[4] = "2";
ii[5] = "3";
for (i = 0; i < 1; i++) {
    console.log(ii);
}


// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let reverse3 = [];
let arrOfSymbols123New = ["a", "b", "c"];
while (arrOfSymbols123New.length) {
    reverse3.unshift(arrOfSymbols123New.shift());
}
console.log(reverse3);


// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

let arrOfSymbols456 = ["a", "b", "c"];
arrOfSymbols456.push(4, 5, 6);
console.log(arrOfSymbols456);


// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let arrOfSymbols123Renew = ["a", "b", "c"];
arrOfSymbols123Renew.unshift(4, 5, 6);
console.log(arrOfSymbols123Renew);


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arrJs = ["js", "css", "jq"];
console.log(arrJs.shift());


// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

console.log(arrJs.pop());


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let arrSlice = [1, 2, 3, 4, 5];
console.log(arrSlice.slice(3));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

console.log(arrSlice.slice(0, 2));


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

console.log(arrSlice.splice(1, 2)); 
console.log(arrSlice); 


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let arrSlice1 = [1, 2, 3, 4, 5];
console.log(arrSlice1.splice(3, 0, "a", "b", "c"));
console.log(arrSlice1);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arrSlice2 = [1, 2, 3, 4, 5];
arrSlice2.splice(1, 0, "a", "b");
arrSlice2.splice(6, 0, "c");
arrSlice2.splice(8, 0, "e");
console.log(arrSlice2);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arr354 = [12, -12, 62, 45, 748, 7, -435, 23, 175, 522];

let z354 = 0;
while (z354 < arr354.length) {
    if (arr354[z354] % 2 === 0) {
        console.log(arr354[z354]);
    }
    z354++;
}


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення 
// одного масиву в інший

let arr1010 = [23, 12, 2, 4, 78, 77, -45, 13, 675, 222];
let arr1010empty = [];
for (i = 0; i < 10; i++) {
    arr1010empty.push(arr1010[i]);
}
console.log(arr1010empty);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного 
// масиву в інший.

let arr1010emptyCopy = [];
for (i = 0; i < 10; i++) {
    arr1010emptyCopy[i] = arr1010[i];
}
console.log(arr1010emptyCopy);


// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let array10 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let z384 = 0;
while (z384 < array10.length) {
    console.log(array10[z384]);
    z384++;
}


// 2. перебрати його циклом for

for (let i = 0; i < array10.length; i++) {
    console.log(array10[i]);
}


// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

let z401 = 1;
while (z401 < array10.length) {
    console.log(array10[z401]);
    z401 = z401 + 2;
}


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 0; i < array10.length; i++) {
    if (array10[i] % 2 === 1) {
        console.log(array10[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні значення

let z418 = 0;
while (z418 < array10.length) {
    if (array10[z418] % 2 === 0) {
        console.log(array10[z418]);
    }
    z418++;
}


// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < array10.length; i++) {
    if (array10[i] % 2 === 0) {
        console.log(array10[i]);
    }
}


// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < array10.length; i++) {
    if (array10[i] % 3 === 0) {
        array10.splice(i, 1, "okten");
    }
}
console.log(array10);


// 8. вивести масив в зворотньому порядку.

let reverse10 = [];
while (array10.length) {
    reverse10.unshift(array10.shift());
}
console.log(reverse10);


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let array466 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let z466 = array466.length - 1;
while (z466 >= 0) {
    // console.log(z466);
    console.log(array466[z466]);
    z466--;
}


for (let i = array466.length - 1; i >= 0; i--) {
    console.log(array466[i]);
}


let z479 = array466.length - 1;
while (z479 >= 0) {
    if (z479 % 2 !== 0) {
        console.log(z479);
    }
    z479--;
}


for (let i = array466.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

let z496 = array466.length - 1;
while (z496 >= 0) {
    if (array466[z496] % 2 === 0) {
        console.log(array466[z496]);
    }
    z496--;
}

for (let i = array466.length - 1; i >=0; i--) {
    if (array466[i] % 2 === 0) {
        console.log(array466[i]);
    }
}


for (let i = 0; i < array466.length; i++) {
    if (array466[i] % 3 === 0) {
        array466.splice(i, 1, "okten");
    }
}
let array466reverse = [];
for (let i = array466.length - 1; i >= 0; i--) {
    array466reverse.unshift(array466.shift());
}
console.log(array466reverse);


// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.

let arr527 = [];
// for ()


// - заповнити його 50 непарними числами за допомоги циклу.




// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.




// 2. заповнити його 50 непарними числами за допомоги циклу.




// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.




//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

let arrRandom = [];
for (let i = 0; i < 20; i++) {
    let resultRandom = (Math.random() * (732 - 8) + 8);
    arrRandom.push(resultRandom)
}
console.log(arrRandom);


//  2. вывести на консоль  каждый третий елемент




//  3. вывести на консоль  каждый третий елемент но при условии что его значение является парным.




//  4. вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
//  записать их в другой массив.




//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный

let arr101 = [23, 34, 12, 1, 5, 567, 34, 21, 87, 9];
for (let i = 0; i < arr101.length; i++) {
    if (arr101[i + 1] % 2 === 0) {
        console.log(arr101[i]);

    }
}


//   5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

let arrAverage = [100, 250, 50, 168, 120, 345, 188];

let sum = 0;
for (const number of arrAverage) {
    sum = sum + number;
}
console.log(sum / arrAverage.length);


// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arrRandom2 = [];
let arrRandom21 = []; 
for (let i = 0; i < 3; i++ ) {
    let resultRandom2 = Math.round(Math.random() * 100);
    arrRandom2.push(resultRandom2)
    
    arrRandom21.push(resultRandom2 * 5); 
}
console.log(arrRandom2);
console.log(arrRandom21);
    

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let arrLast = [1, "word", false, null, -43, "word", 55];

let arrLastNew = [];
for (let num of arrLast) {
    if (typeof num === "number") {
        let arrLastNew = [num];
        console.log(num); //  changed
    } 
    
}
