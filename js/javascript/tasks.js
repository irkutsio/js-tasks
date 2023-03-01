// автоперевірка 7
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }
// sayHi();

// автоперевірка 8
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// автоперевірка 9
// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// автоперевірка 10
// function makeMessage(name, price) {
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   console.log(message);
//   return message;
// }
// makeMessage('Radar', 6150);
// makeMessage('Scanner', 3500);
// makeMessage('Reactor', 8000);
// makeMessage('Engine', 4070);

// автоперевірка 11
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   console.log(totalPrice);
//   return totalPrice;
// }

// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// автоперевірка 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const massage = `You ordered droids worth ${
//     pricePerDroid * orderedQuantity + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   console.log(massage);
//   return massage;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// автоперевірка 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed);
//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// автоперевірка 14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';

//   const isMatch = password === 'jqueryismyjam';
//   console.log(isMatch);

//   return isMatch;
// }
// isValidPassword('mangodab3st');
// isValidPassword('kiwirul3z');
// isValidPassword('jqueryismyjam');

// автоперевірка 15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   console.log(message);
//   return message;
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// автоперевірка 16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = 'Not enough goods in stock!';
//   }
//   // Change code above this line
//   else {
//     message = 'Order is processed, our manager will contact you.';
//   }
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// автоперевірка 17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// автоперевірка 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   console.log(message);
//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// автоперевірка 19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     message = 'Canceled by user!';
//   } else if (password === 'jqueryismyjam') {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   console.log(message);
//   return message;
// }

// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// автоперевірка 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// автоперевірка 21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// автоперевірка 21
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line
//   console.log(canAccessContent);
//   return canAccessContent;
// }
// checkIfCanAccessContent('pro');
// checkIfCanAccessContent('starter');
// checkIfCanAccessContent('free');

// автоперевірка 23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// автоперевірка 24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;

//   if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else {
//     discount = GOLD_DISCOUNT;
//   }

//   console.log(discount);
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// автоперевірка 25
// function checkStorage(available, ordered) {
//   let message;

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   console.log(message);
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// автоперевірка 26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message = ADMIN_PASSWORD === password ? 'Access is allowed' : 'Access denied, wrong password!';
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword('jqueryismyjam');
// checkPassword('angul4r1sl1f3');
// checkPassword('r3actsux');

// автоперевірка 27
// function getSubscriptionPrice(type) {
//   let price;

//   switch (type) {
//     case 'starter':
//       price = 0;
//       break;

//     case 'professional':
//       price = 20;
//       break;

//     case 'organization':
//       price = 50;
//       break;
//   }
//   console.log(price);
//   return price;
// }

// getSubscriptionPrice('professional');
// getSubscriptionPrice('organization');
// getSubscriptionPrice('starter');

// автоперевірка 28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   console.log(message);
//   return message;
// }
// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// автоперевірка 29
// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;
//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }

//   console.log(message);
//   return message;
// }
// getShippingCost('Germany');
// getShippingCost('China');
// getShippingCost('Chile');
// getShippingCost('Jamaica');
// getShippingCost('Sweden');

// автоперевірка 30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;
//   console.log(message);
//   return message;
// }
// getNameLength('Poly');
// getNameLength('Harambe');
// getNameLength('Billy');
// getNameLength('Joe');

// автоперевірка 31
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

// автоперевірка 32 ?????
// function getSubstring(string, length) {
//   const substring = string.slice(0, length);

//   return substring;
// }
// getSubstring(string, length);
// getSubstring('Hello world', 3);
// getSubstring('Hello world', 6);
// getSubstring('Hello world', 8);
// getSubstring('Hello world', 11);
// getSubstring('Hello world', 0);

// автоперевірка 33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     result = message.slice(0, maxLength) + '...';
//   }
//   /// Change code above this line
//   console.log(result);
//   return result;
// }
// formatMessage('Curabitur ligula sapien', 16);
// formatMessage('Curabitur ligula sapien', 23);
// formatMessage('Vestibulum facilisis purus nec', 20);
// formatMessage('Vestibulum facilisis purus nec', 30);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 15);
// formatMessage('Nunc sed turpis a felis in nunc fringilla', 41);

// автоперевірка 34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// normalizeInput(input);
// normalizeInput('Hello world');
// normalizeInput("This ISN'T SpaM");
// normalizeInput('Big SALE');

// автоперевірка 35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }
// checkForName(fullname, name).checkForName('Egor Kolbasov', 'Egor');
// checkForName('Egor Kolbasov', 'egor');
// checkForName('Egor Kolbasov', 'egOr');
// checkForName('Egor Kolbasov', 'Zhenya');
// checkForName('Vadim Nekrasov', 'Vadim');
// checkForName('Vadim Nekrasov', 'vadim');
// checkForName('Vadim Nekrasov', 'Dima');

// автоперевірка 36
// function checkForSpam(message) {
//   let result;
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');

//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam('Latest technology news');
// checkForSpam('JavaScript weekly newsletter');
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight');
// checkForSpam('Trust me, this is not a spam message');
// checkForSpam('Get rid of sPaM emails. Our book in on sale!');
// checkForSpam('[SPAM] How to earn fast money?');

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// модуль 2 автоперевірка 1
// function checkAge(age) {
//   if (age >= 20) {
//     // Change this line
//     return 'You are an adult';
//   } else {
//     return 'You are a minor';
//   }
// }

//  автоперевірка 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';

//   // Change code above this line
// }

//  автоперевірка 3
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }

//   return 'The order is accepted, our manager will contact you';
// }

//  автоперевірка 6
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.log(lastElement);
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// // Write your code under this line
// console.log(fruits);

//  автоперевірка 8

// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex);
// console.log(lastElement);

//  автоперевірка 9
// function getExtremeElements(array) {

//   return (array = [array[0], array[array.length - 1]]);

// }

// автоперевірка 10
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line

//   return words;
// }

// splitMessage('Mango hurries to the train', ' '); //повертає ["Mango", "hurries", "to", "the", "train"]
// splitMessage('Mango', ''); //повертає ["M", "a", "n", "g", "o"]
// splitMessage('best_for_week', '_'); //["best", "for", "week"]

// автоперевірка 10
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let value;
//   value = message.split(' ');

//   return value.length * pricePerWord;

//   // console.log(value.length * pricePerWord);
// }

// calculateEngravingPrice('JavaScript is in my blood', 10);
// calculateEngravingPrice('JavaScript is in my blood', 20);
// calculateEngravingPrice('Web-development is creative work', 40);

// автоперевірка 12
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// автоперевірка 13
// function slugify(title) {
//   let result;

//   result = title.toLowerCase().split(' ').join('-');
//   // Change code below this line
//   // Change code above this line
//   console.log(result);
// }

// надо было сделать через ретерн
// function slugify(title) {
//   return  title.toLowerCase().split(' ').join('-');
// }

// slugify('Arrays for begginers'); //повертає "arrays-for-begginers"
// slugify('English for developer'); //повертає "english-for-developer"
// slugify('Ten secrets of JavaScript'); //повертає "ten-secrets-of-javascript"
// slugify('How to become a JUNIOR developer in TWO WEEKS'); //повертає "how-to-become-a-junior-developer-in-two-weeks"

//автоперевірка 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

//автоперевірка 16
// function makeArray(firstArray, secondArray, maxLength) {
//работает:
// let newArray;
// let message;
// newArray = firstArray.concat(secondArray);
// if (makeArray.length > maxLength) {
//   message = newArray.split(0, maxLength);
// }
// console.log(newArray.splice(0, maxLength));

//тоже работает Ж
// function makeArray(firstArray, secondArray, maxLength) {

// if (firstArray.concat(secondArray).length >= maxLength) {
//     return firstArray.concat(secondArray).slice(0, maxLength);
// }
// }

// makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3);
// makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4);
// makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3);

// function calculateTotal(number) {
//   let sum;
//   // Change code below this line
// }
// calculateTotal(1);
// calculateTotal(3); //повертає 6
// calculateTotal(7); //повертає 28
// calculateTotal(18); //повертає 171

// const start = 0;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

//автоперевірка 18

// function calculateTotal(number) {
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(calculateTotal(12));

// //автоперевірка 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// автоперевірка 20
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }
//   // console.log(total);
// }
// calculateTotalPrice([12, 85, 37, 4]); //повертає 138
// calculateTotalPrice([164, 48, 291]); //повертає 503

// function findLongestWord(string) {
//   // let wordsArray;
// let maxword;
// wordsArray = string.split(' ');
// maxword = wordsArray[0].length;
// for (let i = 0; i <= C.length; i += 1) {
//   if (maxword < wordsArray[i]) {
//     maxword = wordsArray[i];
//   }
//   console.log(maxword);
// }

// автоперевырка 21
//   let stringArray = string.split(' ');
//   let maxword = stringArray[0];
//   console.log(stringArray);
//   console.log(maxword);

//   for (let i = 0; i < stringArray.length; i += 1) {
//     console.log(i);
//     if (maxword.length < stringArray[i].length) {
//       maxword = stringArray[i];
//       console.log(maxword);
//     }
//     return maxword;
//   }
// }

// findLongestWord('May the force be with you');
// findLongestWord('The quick brown fox jumped over the lazy dog');

//автоперевірка 22 не совсем то !!!!
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(numbers);
//   }
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(14, 17);
// // createArrayOfNumbers(29, 34);

//автоперевірка 23
// function filterArray(numbers, value) {
//   const newArray = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       // console.log(numbers[i]);
//       newArray.push(numbers[i]);
//     }
//   }
//   console.log(newArray);
// }
// filterArray([12, 24, 8, 41, 76], 20);

//автоперевірка 24
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   if (fruits.includes(fruit)) {
//     console.log(true);
//   }
//   // return; // Change this line
//   else {
//     console.log(false);
//   }
// }
// checkFruit('plum');
// checkFruit('mandarin');
// checkFruit('pear');
// checkFruit('Pear');

// //автоперевірка 24
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   // Change code above this line
// }

// автоперевірка 25
// function getCommonElements(array1, array2) {
//   let newArray = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   console.log(newArray);
//   return newArray;
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

//// автоперевірка 27
// function filterArray(numbers, value) {
//  const filteredNumbers = [];
// for (const number of numbers) {
//     console.log(number);
// if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
// return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// *****

//автоперевірка 29
// function getEvenNumbers(start, end) {
//   const numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     console.log([i]);
//     if ([i] % 2 === 0) {
//       console.log(numbers.push[i]);
//     }
//   }
// }
// **********
// function getEvenNumbers(start, end) {
//   const numbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       numbers.push(i);
//     }
//     console.log(numbers);
//   }
//   return numbers;
// }

// getEvenNumbers(7, 15);

//// автоперевірка 32
// Change code below this line
// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       console.log(true);
//     }
//   }
//   console.log(false);
//   // Change code above this line
// }

// includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter');
// includes(['apple', 'plum', 'pear', 'orange'], 'plum');

// ****** модуль 3
// автоперевірка 10
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (items in apartment) {
//   keys.push(items);
//   values.push(apartment[items]);
// }
// console.log(values);

// ******** автоперевырка12
// function countProps(object) {
//   let propCount = 0;

//   //для значения ключа
//   const values = Object.values(object);
//   console.log(values);

//   // for (const key in object)
//   //   // console.log(key);
//   //   propCount += object.hasOwnProperty(key);
//   //   // console.log(propCount);
//   // }//тоже засчитало правильно

//   // propCount = Object.keys(object).length;
//   // console.log(propCount);// правильное решение
//   return propCount;
// }
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 });

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай
// в масив values всі значення його властивостей.

// ********автоперевірка 13
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
//   console.log(keys);
//   console.log(values);
// }

// ***********
// автоперевірка 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   console.log(values);
//   for (const value of values) totalSalary += value;
//   console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }

// countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 });

// ***********
// автоперевірка 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// ************
// автоперевірка 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price);
//     }
//   }
// }
// getProductPrice('Radar');
// getProductPrice('Grip');
// getProductPrice('Scanner');
// getProductPrice('Droid');

//***********автоперевірка 19 */
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// const propNames = [];

// function getAllPropValues(propName) {
//   for (const product of products) {
//     if (product[propName]) {
//       console.log(product[propName]);
//       propNames.push(product[propName]);
//         console.log(propNames);
//     }
//   }

//   const arr = [];
//   for (const product of products) {
//     for (const key in product) {
//       if (key === propName) {
//         arr.push(product[key]);
//       }
//     }
//   }
//   return arr;
// }

// getAllPropValues('name');
// getAllPropValues('quantity');
// getAllPropValues('price');

//****************** */
// автоперевірка 20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(product.price * product.quantity);
//     }
//   }
// }
// calculateTotalPrice('Droid'); //повертає 2800
// calculateTotalPrice('Grip'); //повертає 10800
// calculateTotalPrice('Scanner'); //повертає 8100

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

//****************
// автоперевірка 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
//   console.log(hexColors);
// }

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },

//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;

//**************** автоперевірка 26

// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   console.log((todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4);
// }
// calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } });
//  ********************************
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   const obj = {
//     category,
//     priority,
//     ...data,
//     text,
//     completed,
//   };
// }

// // makeTask({ category: 'General', priority: 'Normal', completed: false });
// // makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' });

//******************* */
// Change code below this line

// **********************
//автоперевірка 32

// function addOverNum(firstNum, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNum) {
//       total += arg;
//     }
//   }
// return total;
// }
// add(20, 74, 11, 62, 46, 12, 36);

//*********************** */
// автоперевірка 33
// Change code below this line
// function findMatches(arr, ...numbers) {
//   const matches = []; // Don't change this line
//   for (const item of arr) {
//     for (const number of numbers) {
//       if (item === number) {
//         matches.push(item);
//         console.log(matches);
//       }
//     }
//   }
// }
// findMatches([1, 2, 8, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);

// *******************
//автоперевірка 35
// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги
// з oldName на newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний
// елемент масиву, і splice() для того, щоб замінити цей елемент.
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // console.log(this.books);
//     console.log(this.books.indexOf(oldName));
//     console.log(this.books.splice(this.books.indexOf(oldName), 1, newName));
//     console.log(this.books);
//   },
// };
// bookShelf.updateBook('Haze', 'Dungeon chronicles'); // значення властивості books -
// //це масив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// // bookShelf.updateBook('The last kingdom', 'Dune'); //значення властивості books -
// //це масив["Dune", "Haze", "The guardian of dreams"]

//автоперевірка 39
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // console.log(this.potions.indexOf(potionName));
//     // console.log(this.potions.splice(this.potions.indexOf(potionName), 1));
//     // console.log(this.potions);
//   },
// };

// atTheOldToad.removePotion('Dragon breath'); //
// //   у властивості potions буде масив["Speed potion", Stone skin"]
// atTheOldToad.removePotion('Speed potion');
// //у властивості potions буде масив["Stone skin"]

//автоперевірка 40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     console.log(this.potions.indexOf(oldName));
//     return this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//   },
// };

//*********************** */
//автоперевірка 41

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions)
//       if (potion.name.includes(newPotion.name)) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         this.potions.splice(this.potions.indexOf(potion), 1);
//         return this.potions;
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       //   console.log(this.potions);
//       console.log(potion.name);
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//   },
//   // Change code above this line
// };

//*****************автоперевірка 4 модуль 4 */

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess;
//     }
//     return onError;
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Mango', takeCall, activateAnsweringMachine);
// processCall('Poly', takeCall, leaveHoloMessage);

//****автоперевірка 5 */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//     console.log(totalPrice);
//   });

//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([4, 6, 5, 7]);

//****автоперевірка 6 */
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (item) {
//     if (item > value) {
//       filteredNumbers.push(item);
//       console.log(filteredNumbers);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//***********************автоперевірка 7 */
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//       console.log(commonElements);
//     }
//   });
//   return commonElements;
//   // Change code above this line
// }
// // getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// Виконай рефакторинг функції calculateTotalPrice(orderedItems),
//     замінивши її оголошення на стрілочну функцію.Заміни колбек - функцію,
//         передану в метод forEach(), на стрілочну функцію.

//***********************автоперевірка 10 */
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });
//   console.log(totalPrice);
//   return totalPrice;
// };
// // Change code above this line

// calculateTotalPrice([412, 371, 94, 63, 176]);
// calculateTotalPrice([164, 48, 291]);
