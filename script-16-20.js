// task 16 =========================================================================================================================
// СКЛАД ТОВАРІВ

// description on the task
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
//  Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// available - загальна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі,
//     у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

//----------------------------------------------------------------------
// function checkStorage(available, ordered) {
//   let message;

//  if (ordered >= available) { 
//     message = 'Not enough goods in stock!';
//   } else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   return message;
// }
//----------------------------------------------------------------------


// task 17 =========================================================================================================================
// КОМБІНОВАНИЙ ОПЕРАТОР ПРИСВОЄННЯ

// >>>>> Комбіновані оператори - це коротший спосіб присвоїти змінній нове значення,
//     ґрунтуючись на її попередньому значенні.

// Будемо збільшувати значення змінної age на одиницю від попереднього,
//     імітуючи оновлення віку після дня народження користувача.

// example:
// let age = 25;
// // Класичний запис
// age = age + 1;
// console.log(age); // 26

// >>>>> Виконаємо рефакторинг операції оновлення віку, використовуючи комбінований оператор присвоєння з додаванням.

// example:
// let age = 25;
// // Просто коротший запис, працює так само
// age += 1;
// console.log(age); // 26

// description on the task
// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння
//  з додаванням, відніманням, множенням і діленням.

//----------------------------------------------------------------------
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// before: 
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// after:
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
//----------------------------------------------------------------------



// task 18 =========================================================================================================================
// ПЕРЕВІРКА БАЛАНСУ

// description on the task 
// Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів 
// і повертає повідомлення про результат операції.
// Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// pricePerDroid - ціна одного дроїда
// orderedQuantity - кіл-сть замовлених дроїдів
// customerCredits - сума коштів на рахунку клієнта
// Доповни її наступним функціоналом:

// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення:
// "You ordered <число> droids, you have <число> credits left".

//----------------------------------------------------------------------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;

// let totalPrice = (pricePerDroid * orderedQuantity);

//  if (totalPrice > customerCredits) { 
//     message = `Insufficient funds!`;
//   }
//  else  { customerCredits = (customerCredits - totalPrice);
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   }

//   return message;
// }
//----------------------------------------------------------------------


// task 19 =========================================================================================================================
// БЛОК ELSE...IF

// >>>>> Конструкція if...else може перевірити і зреагувати на виконання або невиконання тільки однієї умови.

// example:
// let cost;
// const subscription = "pro";

// if (subscription === "pro") {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 100

// >>>>> Блок else...if дозволяє додати після else ще один оператор if з умовою.
//  В кінці ланцюжка може бути класичний блок else, який виконається тільки у разі, коли жодна з умов не приведеться до true.

// example:
// let cost;
// const subscription = "premium";

// if (subscription === "free") {
//   cost = 0;
// } else if (subscription === "pro") {
//   cost = 100;
// } else if (subscription === "premium") {
//   cost = 500;
// } else {
//   console.log(`Invalid subscription type - ${subscription}`);
// }

// console.log(cost); // 500

// description on the task
// Функція checkPassword(password) отримує пароль користувача в параметр password,
//     перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і 
//     повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null,
//     значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD,
//     у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася,
//     у змінну message записується рядок "Access denied, wrong password!".

//----------------------------------------------------------------------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password == null) { 
//     message =  'Canceled by user!';
//   } else if (password == ADMIN_PASSWORD) { 
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
//----------------------------------------------------------------------


// task 20 =========================================================================================================================
// СКЛАД ТОВАРІВ 2.0

// description on the task
// Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення
//  і повертає повідомлення про результат.
//  Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - одиниць товару в замовленні
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0,
//     у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі,
//     то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

//----------------------------------------------------------------------
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered == 0) { 
//     message =  'There are no products in the order!';
//   } else if (ordered > available) { 
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }
//----------------------------------------------------------------------