// task 26 =========================================================================================================================
//  ПЕРЕВІРКА ПАРОЛЯ

// description on the task 
// Функція checkPassword(password) порівнює переданий їй пароль(параметр password)
//  зі збереженим паролем адміністратора(константа ADMIN_PASSWORD) і повертає рядок з повідомленням про результат.

// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

//----------------------------------------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password == ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";

//   return message;
// }
//----------------------------------------------------------------------

// task 27 =========================================================================================================================
// ІНСТРУКЦІЯ SWITCH

// >>>>> У деяких випадках незручність читання складних розгалужень if...else можна уникнути, 
// використовуючи «плоскіший» синтаксис інструкції розгалуження switch.
// Сфера застосування switch обмежена задачами з одним загальним питанням
//     (що порівнювати) і безліччю варіантів відповідей(з чим порівнювати).

// example:
// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;
// }

// description on the task 
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача(параметр type),
    // перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else

//----------------------------------------------------------------------
// before:
// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }

// after:
// function getSubscriptionPrice(type) {
//   let price;

//  switch (type) { 
//    case "starter": 0;
//       price = 0;
//       break;

//    case "professional": 20;
//       price = 20;
//       break;

//    case "organization": 50;
//       price = 50; 
//       break;
//   }

//   return price;
// }
//----------------------------------------------------------------------

// task 28 =========================================================================================================================
// ІНСТРУКЦІЯ SWITCH З БЛОКОМ DEFAULT

// >>>>> Якщо жодного збігу значень не відбулося, необхідно виконати код за замовчуванням,
//  як у блоці else для інструкції if...else. Для цього, після всіх блоків case додається блок default.

// example:
// switch (значення) {
//   case значення:
//     інструкції;
//     break;

//   case значення:
//     інструкції;
//     break;

//   default:
//     інструкції;
// }

// description on the task 
// Функція checkPassword(password) отримує пароль в параметр password,
//     перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення
//      про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

//----------------------------------------------------------------------
// before:
 //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }

// after:
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   switch (password) {
//     case null: "Canceled by user!";
//       message = "Canceled by user!"
//       break

//     case ADMIN_PASSWORD: "Welcome!";
//       message = "Welcome!";
//       break;

//     default: "Access denied, wrong password!";
//       message = "Access denied, wrong password!";
//   }

//   return message;
// }
//----------------------------------------------------------------------


// task 29 =========================================================================================================================
//  ДОСТАВКА ТОВАРУ

// description on the task 
// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну
// користувача(параметр country) і повертати повідомлення про результат,
//     що зберігається у змінній message.Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//     де замість < country > і < price >, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. 
// Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

//----------------------------------------------------------------------
// function getShippingCost(country) {
//   let message;

//   switch (country) {
//  case "Australia": 
//       message = "Shipping to Australia will cost 170 credits"
//       break;

//          case "Germany": 
//       message = "Sorry, there is no delivery to your country"
//       break;
      
//     case "China":
//       message = "Shipping to China will cost 100 credits"
//       break;

//     case "Chile": 
//       message = "Shipping to Chile will cost 250 credits"
//       break;

//     case "Jamaica": 
//       message = "Shipping to Jamaica will cost 120 credits"
//       break;

//     case "Sweden": 
//       message = "Sorry, there is no delivery to your country"   
//   }

//   return message;
// }
//----------------------------------------------------------------------

// task 30 =========================================================================================================================
// ДОВЖИНА РЯДКА

// >>>>> Для того щоб дізнатися довжину рядка, тобто кількість її символів, у рядків є вбудована властивість length,
//  значення якої можна отримати,
//  звернувшись до неї через крапку після імені змінної або рядкового літерала.

// example:
// const productName = "Repair droid";

// // Якщо у змінній зберігається рядок
// console.log(productName.length); // 12

// // Якщо рядковий літерал
// console.log("Repair droid".length); // 12

// description on the task 
// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
//  Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

//----------------------------------------------------------------------
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }
//----------------------------------------------------------------------