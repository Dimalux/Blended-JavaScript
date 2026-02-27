'use strict';


// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]


// Варіант 1   Цикл "for...of"

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = [];
// for(const number of numbers) {
// numbersNew.push(number ** 2);
// }
// console.log(numbersNew);   //   [1, 4, 9, 16, 25]

//...............

// Варіант 2   forEach(callback)

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = [];

//  numbers.forEach(item => numbersNew.push(item ** 2))

// console.log(numbersNew);   //   [1, 4, 9, 16, 25]



//...............

// Варіант 3   Метод map()

// const numbers = [1, 2, 3, 4, 5];

// const numbersNew = numbers.map(item => item ** 2)

// console.log(numbersNew);   //   [1, 4, 9, 16, 25]



//..............................
//..............................


// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].


// Варіант 1   Метод forEach(callback) (це метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією)   +   Операція ...spread (дозволяє зкопіювати властивості об'єкта, тобто вмтянути з об'єкта тіло - позбутися фігурних дужок) :

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const numbersNew = [];
// data.forEach(item => numbersNew.push(...item.values));
// console.log(numbersNew);    //   [1, 2, 3, 4, 5, 6, 7, 8, 9]

//............


// Варіант 2    Метод flatMap(callback) застосовується у випадках, коли результат — це багатовимірний масив, який необхідно «розгладити»

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const numbersNew = data.flatMap(item => item.values)
// console.log(numbersNew);    //   [1, 2, 3, 4, 5, 6, 7, 8, 9]


//..............................
//..............................


// Завдання 3:    Метод some().  Метод some(callback) перевіряє, чи задовольняє хоча б один елемент умову колбек-функції.

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(people.some(item => item.age < 20));    //   true



//..............................
//..............................



// Завдання 4:     Метод every()  Метод every(callback) перевіряє, чи задовольняють усі елементи умову колбек-функції.

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// // Варіант 1
// console.log(numbers.every(item => item % 2 === 0));   //  true

// // Варіант 2  через оператор заперечення :
// console.log(numbers.every(item => !(item % 2)));       //  true



//..............................
//..............................



// Завдання 5:    Метод find(). Метод find(callback) дозволяє знайти і повернути перший відповідний елемент, що задовольняє умову, після чого перебирання масиву припиняється.

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(item => item % 2));   //  1



//..............................
//..............................



// Завдання 6:   Метод toSorted()

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// console.log(numbersArray.toSorted((a, b) => a - b));     //   [1, 2, 3, 4, 5]


//..............................
//..............................


// Завдання 7:      Метод toSorted((a, b) => a.localeCompare(b))  -   колбек для сортування рядків     

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// console.log(stringArray.toSorted((a, b) => a.localeCompare(b)));   //   ["apple", "banana", "orange", "pear"]


//..............................
//..............................


// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// console.log(users.toSorted((a, b) => a.age - b.age));


//..............................
//..............................


// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// console.log(user.filter(item => item.age > 20));


//..............................
//..............................


// Завдання 10:  Метод reduce()

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// Варіант 1   Метод reduce() з акумулятором :
// console.log(numbers.reduce((prev, item) => prev + item, 0));  //   15

// Варіант 2   Метод reduce() БЕЗ акумулятора :
// console.log(numbers.reduce((prev, item) => prev + item));  //   15


//..............................
//..............................


// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод subtract - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24



// Завдання 12:

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email



// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.






  // ................................






// const p1 = Promise.resolve(1);
// const p2 = Promise.reject("Rejected promise 2");
// const p3 = Promise.resolve(3);

// Promise.all([p1, p2, p3])
// 	.then(values => console.log(values))
// 	.catch(error => console.log(error)); // "Rejected promise 2"






//Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентифікатор як id і викликає callback
//Передаючи йому створений об'єкт.
//showProduct(product) - коллбек приймаючий об'єкт
//продукту і логірующий їх у консоль

// id: Math.random()
// product.id = Date.now()
// product.id = new Date()
// product.id = Math.floor(Math.random() * 100)


// function makeProduct(name, price, callback) {

// // const product = `${name}.id ${price}`;
// const product = {
//   name,
//   price,
// id: Math.random()

// };

// return callback(product);
// };

// function showProduct(product) {
//   console.log(product);  
// }

// makeProduct("tea", 10, showProduct);






//Виправте помилки, щоб код працював

// function callAction(action) {
//   action();
// }

// const item = {
//   getQuantity() {
//     console.log(this.quantity);
//   },
//   quantity: 5,
// };

// callAction(item.getQuantity.bind(item));


//  ....................................
//  ....................................


//TODO: № 5 на перебирання 

// 1) Зібрати в "allTopics" масив всіх предметів всіх курсів :
// 2) Виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи

// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "GitHub Desctop"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub", "Git", "Terminal"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Function",
//       "Git",
//       "Conditions",
//       "Classes",
//       "GitHub",
//       "DOM",

//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Git",
//       "Promises",
//       "AJAX",
//       "GitHub",
//     ],
//   },
// ];


// ВАРІАНТ 1 - МІЙ :  за допомогою методів "flatMap", "toSorted" і циклу "for" :

// 1) Зібрати в "allTopics" масив всіх предметів всіх курсів :

// const allTopics = courses.flatMap(item => item.topics);
// console.log(allTopics);   //  (28) ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop', 'VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal', 'VSCode', 'Type system', 'Loops', 'Function', 'Git', 'Conditions', 'Classes', 'GitHub', 'DOM', 'VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub']


// 2) Виконати фільтрацію, залишивши в "uniqueTopics" тільки унікальні елементи :

// const allTopics1 = allTopics.toSorted((a, b) => a.localeCompare(b));
// console.log(allTopics1);

// let uniqueTopics = [];

// for (let i = 0; i < allTopics1.length; i += 1) {

// if (allTopics1[i] !== allTopics1[i + 1]) {
//   uniqueTopics.push(allTopics1[i]);
// }
// }

// console.log(uniqueTopics);  //  (18) ['AJAX', 'Bundlers', 'Classes', 'Conditions', 'CSS', 'DOM', 'Function', 'Git', 'GitHub', 'GitHub Desctop', 'HTML', 'Loops', 'NPM', 'Promises', 'Terminal', 'Transpiling', 'Type system', 'VSCode']

//  ..................



//  це завдання за допомогою reduce()?


// const uniqueTopics = allTopics.filter(item => )    





// const allTopics = courses.flatMap(course => course.topics);

//   console.log(allTopics);

//   console.log(allTopics.toSorted());

//   ...new Set(allTopics)

//   const uniqueTopics = [...new Set(allTopics)];


  
// ---------------------------------------------


// 4. Заняття 03 (5-6 modules) відео - 16:16


//Напиши функцію конструктор User для створення користувача з такими властивостями

//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} ${} років і в нього ${} публікацій.`


// function User(userName, age, numbersOfPost) {
//   this.userName = userName;
//   this.age = age;
//   this.numbersOfPost = numbersOfPost;

//   this.getInfo = function () {
//     return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`;
//   };
// }


// const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });
// console.log(polly);
// polly.getInfo();

//----------------


//Напиши клас Client який створює об'єкт
//з ​​властивостями login email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email

// для перевірки
// const client = new Client("mango", "mango@gmail.com");
// client.changeEmail = "change_mail@gmail.com";
// console.log(client.getClientData.email);



// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

  
//   get email() {
//     return this.#email;
//   }  
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// const client = new Client("mango", "mango@gmail.com");

// console.log(client.login); 
// console.log(client.email); 


// client.email = "change_mail@gmail.com";

// console.log(client.login); 
// console.log(client.email); 




//_______________________________



//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тва



// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }

//   getInfo() {
//     return `Name animal: ${this.name}, Type animal: ${this.type}`;
//   }

//   feed() {
//     console.log(`Feeding ${this.name}....`);
//   }
// }

// console.log(Animal);


// Mammal - хижак
// Bird - птах



// class Mammal extends Animal {
//   constructor(name, type, food) {
// super(name, type);
// this.food = food;
//  }
//   live() {
//     console.log(`Lives in ${this.name}....`);
//   }
//  }





// class Bird extends Animal {
//   constructor(name, type, food) {
// super(name, type);
// this.food = food;
//   }

//   live() {
//     console.log(`Lives in ${this.name}....`);
//   }

//  }











// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]



// ВАРІАНТ 1 ___________________

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// const number = [];
// console.log(number);

// for (let i = 0; i < numbers.length; i ++) {
//     number.push(numbers[i] * numbers[i]); 
//     };

//     console.log(number);




// ВАРІАНТ 2 ___________________

    //     const numbers = [1, 2, 3, 4, 5];
    //     console.log(numbers);
        
    //     const numberAdd = [];
    //     console.log(numberAdd);

    // for (const number of numbers) {
    //     numberAdd.push(number * number); 
    //   }

    //   console.log(numberAdd);





// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];




// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const sum = data.flatMap(item => item.values);

// console.log(sum); 






// Завдання 3:

// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];



// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// // ВАРІАНТ 1 ___________
// const result = people.some(item => item.age < 20);
// console.log(result);


// // ВАРІАНТ 2 ___________
// console.log(people.some(item => item.age < 20));








// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10]. 
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];



// const numbers = [2, 4, 6, 8, 10];

// // // ВАРІАНТ 1 ___________
// const result = numbers.every(item => item % 2 === 0);
// console.log(result);


// // // ВАРІАНТ 2 ___________
// console.log(numbers.every(item => item % 2 === 0));







// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];



// const numbers = [2, 1, 6, 8, 9, 10, 12];

// console.log(numbers.find(item => item % 2 === 0));





// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3] 
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];



//  РІШЕННЯ  ______________НЕ МАЄ 2-х значних чисел !!!_____________________

// const numbersArray = [4, 2, 5, 1, 3];

//  console.log(numbersArray.toSorted());





// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту. 
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];


//  РІШЕННЯ  ____________всі регістри однакові!!!__

// const stringArray = ['banana', 'orange', 'apple', 'pear'];
// console.log(stringArray.toSorted());



// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


//  РІШЕННЯ  ____________всі числа 2-х значні !!!____


// const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];


// console.log(users.toSorted((a, b) => a.age - b.age));
 




// Завдання 9:

// Дано масив об'єктів. 
// Створіть новий масив, що містить тільки об'єкти, в яких 
// вік більше 20 років. 
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

//const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]



//РІШЕННЯ  ____________(подібне Завдання 8)___


// const user = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ]

// console.log(user.filter(item => item.age > 20));






// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5]. 
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];


//РІШЕННЯ  ____________

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce((acc, item) => acc + item, 0));
 



// Завдання 11:

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 
 // Приклад використання:
 // const calc = new Calculator();


// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24


//   console.log(result); // 24


//РІШЕННЯ  ___________



// class Calculator {

// number(value) {
//   this.value;
// }

// add() {

// }

// }










// Завдання 12:
 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email



//РІШЕННЯ  ___________

//  class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

  
//   get email() {
//     return this.#email;
//   }  
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }




// Завдання 13:

  //  Наслідування у класах!
  // Cтворіть клас `Person`, який містить наступні властивості:
  //  - `name` - ім'я людини;
  //  - `age`- вік людини;
  //  - `gender` - стать людини;
  //  - `email`- електронна пошта людини.
  
  // Крім того, клас `Person` має мати метод `getDetails()`,
  // який повертає об'єкт з ім'ям, віком, статтю 
  //та електронною поштою людини.
  
  // 
  // Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  //  - salary - зарплата співробітника;
  //  - department - відділ, в якому працює співробітник.
  // Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.





