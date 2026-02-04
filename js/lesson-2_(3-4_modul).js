'use strict';



// Завдання 1:


// ВАРІАНТ 1

// 1-а  ЧАСТИНА
// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код


// 1-а  ЧАСТИНА
// const styles = ["jazz", "blues"];
// console.log(styles);

// styles.push("rock-n-roll");
// console.log(styles);

// for(let i = 0; i < styles.length; i++) {
// if(styles[i] === "blues") {
// styles[i] = "classic";
// }
// }
// console.log(styles);



// 2-а  ЧАСТИНА
// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// logItems(styles);

// function logItems(array) {
//     for(let i = 0; i < array.length; i++) {
// console.log(`${i + 1} - ${array[i]}`);
//     }
// }



// ВАРІАНТ 2

// let styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// styles[styles.indexOf('blues')] = 'classic';

// console.log(styles);

// function logItems(styles) {

//     for (let i = 0; i < styles.length; i++) {
//             console.log(`${i+1} - ${styles[i]}`);
//               }
// }

// logItems(styles);


//  ....................................
//  ....................................



// Завдання 2:

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".
// const logins = ["Peter", "John", "Igor", "Sasha"];


// ВАРІАНТ 1

//  const logins = ["Peter", "John", "Igor", "Sasha"];

//  checkLogin(logins);

// function checkLogin(array) {
// const userName = prompt("Введіть своє ім'я :");
// if(array.includes(userName)) {
//     alert(`Welcome, ${userName}!`);    
// } else {
// alert("User not found");
// }
// }


//  ....................................


// ВАРІАНТ 2

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(logins) {
//     const name = prompt("Ім'я користувача:");
//     logins.includes(name);

//     if (logins.includes(name)) {
//         alert(`Welcome, ${name}!`);
//           } else {
//             alert("User not found");
//           }
//         }

//         checkLogin(logins);



//  ....................................
//  ....................................


// Завдання 3:

// Напишіть функцію calculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// ВАРІАНТ 1

// console.log(calculateAverage(1,6,5,7,9));

// function calculateAverage(...rest) {
// let sum = 0;
// for(const item of rest) {
//     if(!isNaN(item)) {
// sum += item;
//     } else {return `${item} не є числом!!!`}
// }
// return Math.round(sum / (rest.length));
// }


//  ....................................


// ВАРІАНТ 2


// function calculateAverage(...args) {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//       if (typeof args[i] === 'number') {
//         sum += args[i];
//       }
//     }
//     return sum / args.length;
//   }

//   console.log(calculateAverage(4, 8, 6, 10));



//  ....................................
//  ....................................



// Завдання 4:

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].


// ВАРІАНТ 1

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// console.log(foo());

// function foo() {
// let arrSum = [];
//     for(let i = 0; i < someArr.length - 1; i++) {
// arrSum.push(someArr[i] + someArr[i + 1])
//     }
//    return arrSum;  
// }



//  ....................................


// ВАРІАНТ 2  -  з  методом forEach(callback)

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function ddd(arr) {

//   let sum = [];

//   arr.forEach(function (number, index) {

//     // console.log(`Index ${index}, value ${number}`);

//     sum.push(arr[index] + arr[index + 1]);
//   });
//   const sum1 = sum.slice(0, sum.length - 1);
//   return console.log(sum1);
// }

// ddd(someArr);



//  ....................................
//  ....................................



// Завдання 5:

// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];



// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
// // const numbers = "num";

// console.log(findSmallestNumber(numbers));

// function findSmallestNumber(numbers) {
// if(Array.isArray(numbers)) {
// return Math.min(...numbers);
// } else {
//     return "Sory, it is not an array!";
// }
// }



//  ....................................
//  ....................................



// Завдання 6:
// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.
// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


// ВАРІАНТ 1  -  Мій
// console.log(findLongestWord("London is the capital of Great Britain"));

// function findLongestWord(string) {
// const arrText = string.split(" ");
// console.log(arrText);
// let result = [];
// for(const item of arrText) {
// result.push(item.length);
// }
// console.log(result);
// const numMax = Math.max(...result)
// console.log(numMax);
// const resInd = result.indexOf(numMax);
// return arrText[resInd];
// }


//  ....................................



// ВАРІАНТ 2

// function findLongestWord(string) {

//     const words = string.split(" ");
// console.log(words);
//    const add = [];
//    for(let i = 0; i < words.length; i += 1) {
//     add.push(words[i].length);
//             }

//         console.log(add);
//         const add1 = Math.max(...add);
//         console.log(add1);

// const result = add.indexOf(add1);
//         console.log(result);

// return words[result];
//     }
//     console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'


//  ....................................
//  ....................................



// Завдання 7:

// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false:

//    user.mood = 'happy';
//     user.hobby = 'skydiving';
//     user.premium = 'false';

//     console.log(user);


//  .....................


// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// Ще один мій ВАРІАНТ:
const keys = Object.keys(user);
    console.log(keys);

    for(const key of keys) {
console.log(`${key} : ${user[key]}`);
    }

//  .....................


//     const add = Object.keys(user);

//     console.log(add);

//     for (const sum of add) {
//        console.log(`${sum}:${user[sum]}`);
//     }

// // Доступ до властивості обекту через КРАПКУ
//  console.log(user.name);

// // Доступ до властивості обекту через []  1-й варіант. Замість індексу ставимо ключ як РЯДОК.
//  console.log(user["name"]);

// // Доступ до властивості обекту через []  2-й варіант. Замість індексу ставимо ЗМІННУ.
// const sum = "name";
// console.log(user[sum]);

// // Виклик значення властивості обєкту через []

//  const userName = "age";
// console.log(user[userName]);


//  ....................................
//  ....................................


// Завдання 8:

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

//   let sum = 0;

//   for (const key in salaries) {
//     sum += salaries[key];

//   }
// console.log(sum);

// const values = Object.values(salaries);
// console.log(values);
// let sum = 0;

// for (let salarie of values) {
//   sum += salarie;
// }

// console.log(sum);

// Завдання 9:

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().
// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// const calculator = {

//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     return this.a + this.b;
//       },

//   mult() {
//     return this.a * this.b;
//       },
// }

// calculator.read(5, 10);
// console.log(calculator);

// console.log(calculator.sum());

// console.log(calculator.mult());

// Завдання 10:

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.
// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
//   ];

// function calcTotalPrice(fruits, fruitName) {
// let sum = 0;

// for (const fruit of fruits) {

// if (fruitName === fruit.name) {
//   sum += fruit.price * fruit.quantity;
// }
// }

// return sum;
// }
// console.log(calcTotalPrice(fruits, "Банан"));
