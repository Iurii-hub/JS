// console.log("test");

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

function tagFunction (titleOfTag, action, atributes = []) {
      this.titleOfTag = titleOfTag;
      this.action = action;
      this.atributes = atributes;
  
}

function atributesFunction (titleOfAttr, action) {
      this.titleOfAttr = titleOfAttr;
      this.action = action;
  
}

let a1 = new tagFunction ("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.");
a1.atributes[0] = new atributesFunction ("accesskey", "Активация ссылки с помощью комбинации клавиш.");
a1.atributes[1] = new atributesFunction ("coords", "Устанавливает координаты активной области.");
a1.atributes[2] = new atributesFunction ("download", "Предлагает скачать указанный по ссылке файл.");

let div1 = new tagFunction ("div","Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.");
div1.atributes[0] = new atributesFunction ("align", "Задает выравнивание содержимого тега <div>");
div1.atributes[1] = new atributesFunction ("title", "Добавляет всплывающую подсказку к содержимому.");

let h11 = new tagFunction ("h1","HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.");
h11.atributes[0] = new atributesFunction ("align","Определяет выравнивание заголовка.");

let span1 = new tagFunction ("span", "Тег <span> предназначен для определения строчных элементов документа");
span1.atributes[0] = new atributesFunction ("accesskey", "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.");
span1.atributes[1] = new atributesFunction ("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.");
span1.atributes[2] = new atributesFunction ("contenteditable", "Сообщает, что элемент доступен для редактирования пользователем.");

let input1 = new tagFunction ("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить");
input1.atributes[0] = new atributesFunction ("accesskey", "Переход к элементу с помощью комбинации клавиш.");
input1.atributes[1] = new atributesFunction ("accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.")

let form1 = new tagFunction ("form","Тег <form> устанавливает форму на веб-странице.");
form1.atributes[0] = new atributesFunction ("accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.");
form1.atributes[1] = new atributesFunction ("action", "Адрес программы или документа, который обрабатывает данные формы.");
form1.atributes[2] = new atributesFunction ("autocomplete", "Включает автозаполнение полей формы.");

let option1 = new tagFunction ("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>");
option1.atributes[0] = new atributesFunction ("disabled", "Заблокировать для доступа элемент списка.");
option1.atributes[1] = new atributesFunction ("label", "Указание метки пункта списка.");
option1.atributes[2] = new atributesFunction ("selected", "Заранее устанавливает определенный пункт списка выделенным.");

let select1 = new tagFunction ("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,");
select1.atributes[0] = new atributesFunction ("autofocus", "Устанавливает, что список получает фокус после загрузки страницы.");
select1.atributes[1] = new atributesFunction ("disabled", "Блокирует доступ и изменение элемента.");

console.log(a1, div1, h11, span1, input1, form1, option1, select1);


// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

class Tag {
  constructor (titleOfTag, action, atributes = []) {
      this.titleOfTag = titleOfTag;
      this.action = action;
      this.atributes = atributes;
  }
}

class Atributes {
  constructor (titleOfAttr, action) {
      this.titleOfAttr = titleOfAttr;
      this.action = action;
  }
}

let a = new Tag ("a", "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.");
a.atributes[0] = new Atributes ("accesskey", "Активация ссылки с помощью комбинации клавиш.");
a.atributes[1] = new Atributes ("coords", "Устанавливает координаты активной области.");
a.atributes[2] = new Atributes ("download", "Предлагает скачать указанный по ссылке файл.");

let div = new Tag ("div","Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.");
div.atributes[0] = new Atributes ("align", "Задает выравнивание содержимого тега <div>");
div.atributes[1] = new Atributes ("title", "Добавляет всплывающую подсказку к содержимому.");

let h1 = new Tag ("h1","HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.");
h1.atributes[0] = new Atributes ("align","Определяет выравнивание заголовка.");

let span = new Tag ("span", "Тег <span> предназначен для определения строчных элементов документа");
span.atributes[0] = new Atributes ("accesskey", "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.");
span.atributes[1] = new Atributes ("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.");
span.atributes[2] = new Atributes ("contenteditable", "Сообщает, что элемент доступен для редактирования пользователем.");

let input = new Tag ("input", "Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить");
input.atributes[0] = new Atributes ("accesskey", "Переход к элементу с помощью комбинации клавиш.");
input.atributes[1] = new Atributes ("accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.")

let form = new Tag ("form","Тег <form> устанавливает форму на веб-странице.");
form.atributes[0] = new Atributes ("accept-charset", "Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные.");
form.atributes[1] = new Atributes ("action", "Адрес программы или документа, который обрабатывает данные формы.");
form.atributes[2] = new Atributes ("autocomplete", "Включает автозаполнение полей формы.");

let option = new Tag ("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>");
option.atributes[0] = new Atributes ("disabled", "Заблокировать для доступа элемент списка.");
option.atributes[1] = new Atributes ("label", "Указание метки пункта списка.");
option.atributes[2] = new Atributes ("selected", "Заранее устанавливает определенный пункт списка выделенным.");

let select = new Tag ("select", "Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором,");
select.atributes[0] = new Atributes ("autofocus", "Устанавливает, что список получает фокус после загрузки страницы.");
select.atributes[1] = new Atributes ("disabled", "Блокирует доступ и изменение элемента.");

console.log(a, div, h1, span, input, form, option, select);


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    model: "civic",
    manufacturer: "honda",
    yearOfProduction: 2010,
    maxSpeed: 172,
    engineVolume: "1.6",

    drive () {console.log(`їдемо зі швидкістю ${this.maxSpeed} km на годину`)},
    info () {console.log(this.car)},
    increaseMaxSpeed (newSpeed) {this.maxSpeed = newSpeed},
    changeYear (newValue) {this.yearOfProduction = newValue},
    addDriver (driver) {this.driver = driver},

}

car.drive();


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

function car1 (model, manufacturer, yearOfProduction, maxSpeed, engineVolume) {
  this.model = model,
  this.manufacturer = manufacturer,
  this.yearOfProduction = yearOfProduction,
  this.maxSpeed = maxSpeed,
  this.engineVolume = engineVolume,

  this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
  },

  this.info = function () {
    console.log(this);
  },

  this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed += newSpeed;
  },
  this.changeYear = function (newValue) {
    this.yearOfProduction = newValue;
  },

  this.addDriver = function (driver) {
    this.driver = driver;
  }
}

let mazda = new car1 (6, "mazda motor", 2003, 211, "2.0")
mazda.info();

// mazda.maxSpeed = 344;

mazda.drive();


// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

class Car2 {
  constructor (model, manufacturer, yearOfProduction, maxSpeed, engineVolume) {
    this.model = model,
    this.manufacturer = manufacturer,
    this.yearOfProduction = yearOfProduction,
    this.maxSpeed = maxSpeed,
    this.engineVolume = engineVolume,

    this.drive = function () {
      console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    },
  
    this.info = function () {
      console.log(this);
    },
  
    this.increaseMaxSpeed = function (newSpeed) {
      this.maxSpeed += newSpeed;
    },
    this.changeYear = function (newValue) {
      this.yearOfProduction = newValue;
    },
  
    this.addDriver = function (driver) {
      this.driver = driver;
    }
  }
}

let honda = new Car2 ("accord", "honda motor", 2012, 199, "2.4")
honda.info();

honda.drive();
 

// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

class Cinderella {
  constructor (name, age, footSize) {
    this.name = name,
    this.age = age,
    this.footSize = footSize
  }
}



let cinderella1 = new Cinderella ("Inna", 23, 38);
let cinderella2 = new Cinderella ("Irina", 29, 37);
let cinderella3 = new Cinderella ("Karina", 18, 39);
let cinderella4 = new Cinderella ("Mila", 19, 35);
let cinderella5 = new Cinderella ("Rita", 27, 36);
let cinderella6 = new Cinderella ("Olga", 31, 38);
let cinderella7 = new Cinderella ("Sveta", 44, 40);
let cinderella8 = new Cinderella ("Nata", 22, 41);
let cinderella9 = new Cinderella ("Tanya", 33, 37);
let cinderella10 = new Cinderella ("Katya", 28, 35);

let arrCinderellas = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];
  


class Prince {
  constructor (name, age, shoeFinded) {
    this.name = name,
    this.age = age,
    this.shoeFinded = shoeFinded
  }
  findCinderella (arrCinderellas) {
    for (const i of arrCinderellas) {
      if (this.shoeFinded === i.footSize) {
        console.log(i);
      }
      
    }
  }
}

let princeKolya = new Prince ("Kolya", 32, 35)
princeKolya.findCinderella(arrCinderellas);


// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

function getCinderella (name, age, footSize) {
  this.name = name;
  this.age = age;
  this.footSize = footSize;
}

function getPrince (name, age, shoeFinded) {
  this.name = name;
  this.age = age;
  this.shoeFinded = shoeFinded;

  this.getCinderella = function getCinderella(arrCinderella) {
    for (const j of arrCinderellas) {
      if (this.shoeFinded === j.footSize)
      console.log(j);
    }
  }
}

let princeSanya = new getPrince ("Sanya", 18, 39);
princeSanya.getCinderella(arrCinderellas);
