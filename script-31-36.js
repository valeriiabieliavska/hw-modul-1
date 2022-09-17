// task 31 =========================================================================================================================
// ІНДЕКСАЦІЯ ЕЛЕМЕНТІВ РЯДКА

// >>>>> Рядок — це індексований набір з нуля або більше символів, взятих в одинарні, подвійні або скісні лапки.
// Для доступу до значення елемента рядка використовується синтаксис квадратних дужок рядок[індекс].

// example:
// const productName = "Repair droid";
// console.log(productName[0]); // "R"
// console.log(productName[5]); // "r"
// console.log(productName[11]); // "d"
// console.log(productName[productName.length - 1]); // "d"

// description on the task
// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів 
// або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

//----------------------------------------------------------------------
// const courseTopic = "JavaScript essentials";


// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// console.log(courseTopic[courseTopic.length - 1]);
//----------------------------------------------------------------------


// task 32 =========================================================================================================================
// МЕТОД SLICE()

// >>>>> Метод рядків slice(startIndex, endIndex) використовується для створення копії частини або всього рядка.
//  Він робить копію елементів рядка від startIndex і до, але не включно endIndex, і повертає новий рядок.

// example:
// const productName = "Repair droid";
// console.log(productName.slice(0, 4)); // "Repa"
// console.log(productName.slice(3, 9)); // "air dr"
// console.log(productName.slice(0, productName.length)); // "Repair droid"
// console.log(productName.slice(7, productName.length)); // "droid"

// description on the task
// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
//  Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

//----------------------------------------------------------------------
// function getSubstring(string, length) {
//   const substring = string.slice(0,length); 

//   return substring;
// }
//----------------------------------------------------------------------


// task 33 =========================================================================================================================
// ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ

// description on the task
// Функція formatMessage(message, maxLength) приймає рядок(параметр message) і форматує його,
//     якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і 
// додає в кінець три крапки "...", після чого повертає скорочену версію.

//----------------------------------------------------------------------
// function formatMessage(message, maxLength) {
//   let result;

// if (message.length > maxLength) {
//   result = message.slice(0, maxLength) + "..."
// }
//   else {
//     result = message;
//   }

//   return result;
// }
//----------------------------------------------------------------------


// task 34 =========================================================================================================================
// МЕТОДИ TOLOWERCASE() І TOUPPERCASE()

// >>>>> Mожна зробити «нормалізацію» введеного користувачем рядка, 
// тобто перетворити всі його символи у верхній або нижній регістр.
//  Методи рядка toLowerCase() і toUpperCase() повернуть новий рядок у відповідному регістрі, не змінюючи оригінальний.

// example:
// const BRAND_NAME = "SAMSUNG";
// const userInput = "saMsUng";
// const normalizedToUpperCaseInput = userInput.toUpperCase();

// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// description on the task
// Функція normalizeInput(input) приймає рядок(параметр input) і повертає такий самий рядок, але в нижньому регістрі.
//  Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

//----------------------------------------------------------------------
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }
//----------------------------------------------------------------------


// task 35 =========================================================================================================================
// МЕТОД INCLUDES()

// >>>>> Метод рядків includes(substring) перевіряє, чи входить підрядок substring у рядок, 
// повертає буль - true, якщо входить, і false - в іншому випадку. 
// Регістр символів в рядку і підрядку має значення, оскільки, наприклад літера "a" не дорівнює літері "А".

// example:
// const productName = "Repair droid";

// console.log(productName.includes("a")); // true
// console.log(productName.includes("A")); // false
// console.log(productName.includes("droid")); // true
// console.log(productName.includes("Droid")); // false
// console.log(productName.includes("Repair")); // true
// console.log(productName.includes("repair")); // false

// description on the task
// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false
//     - результат перевірки входження підрядка name у рядок fullname.

// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені(параметр name),
//     у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер,
// тобто «Петя» і «петя» - для неї різні імена.

//----------------------------------------------------------------------
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }
//----------------------------------------------------------------------


// task 36 =========================================================================================================================
// ПЕРЕВІРКА СПАМУ

// description on the task
// Функція checkForSpam(message) приймає рядок(параметр message),
//     перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
//     Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

//----------------------------------------------------------------------
// function checkForSpam(message) {
//   let result;

// result = message.toUpperCase().includes("SPAM") || message.toUpperCase().includes("SALE")
  
//   return result;
// }
//----------------------------------------------------------------------