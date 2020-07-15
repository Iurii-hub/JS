// console.log("test");

// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)

// function Car (model, color, speed, spec = [engine, hp]) {
//     this.model = model;
//     this.color = color;
//     this.speed = speed;
//     this.spec = spec;
// }

// let mazda = new Car(6, "red", 211, 3);

// let engine = "2.0";
// let hp = 165;
// console.log(mazda);


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

class Tag {
    constructor (titleOfTag, action, atributes = []) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.atributes = atributes;
    }
}

class Atributes {
    constructor (TitleOfAttr, action) {
        this.titleOfAttr = TitleOfAttr;
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


// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

let car = {
    model: "6",
    manufacturer: "mazda",
    yearOfProduction: 2020,
    maxSpeed: 222,
    engineVolume: "2.0",

    drive () {`їдемо зі швидкістю ${this.maxSpeed} на годину`},
    info () {console.log(this)},
    increaseMaxSpeed (newSpeed) {this.maxSpeed = newSpeed},
    changeYear (newValue) {this.yearOfProduction = newValue},
    addDriver (driver) {this.driver = driver},

}

car.drive ();
console.log(car.drive);


// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================






class Human {
    constructor(age, gender, color) {
      this.age = age;
      this.gender = gender;
      this.color = color;
      this.money = 0;
    }
  
    eat() {
      console.log('Om nom nom')
    }
  
    goWork() {
      this.money += 100;
    }
  
    goBeer() {
      if (this.money > 200) {
        document.write('I AM HAMMERED')
        document.write(`<br>`)
  
        this.money -= 200;
      } else {
        document.write('DOW')
        document.write(`<br>`)
  
      }
    }
  }
  
  
  class Developer extends Human {
    constructor(age, gender, color, skill) {
      super(age, gender, color);
      this.skill = skill;
    }
  
    goBeer() {
      if (this.money < 500) {
        document.write('Вася позич до ЗП');
        document.write(`<br>`)
  
      } else {
        document.write('Го в правду');
        document.write(`<br>`)
  
        this.money = 0;
      }
    }
  
    codding() {
      document.write(`Tap tap tap on ${this.skill}`)
      document.write(`<br>`)
    }
  }
  
  let Iron = new Developer(20, 'female', 'white', 'JS');
  
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  Iron.goWork()
  
  Iron.goBeer()
  
  Iron.codding()
  
  console.log(Iron);
  
  let homer = new Human(35, 'male', 'yellow');
  
  console.log(homer);
  
  homer.eat();
  
  homer.goBeer();
  
  homer.goWork()
  homer.goWork()
  homer.goWork()
  
  console.log(homer);
  
  homer.goBeer();
  
  console.log(homer);
  
//   homer.codding();
  
  
  
  class MyAddres {
    constructor(street) {
      this.street = street;
    }
  }
  
  const robota = new MyAddres('H.UPA')
  const dim = new MyAddres('VV')
  
  let addreses = [robota, dim]