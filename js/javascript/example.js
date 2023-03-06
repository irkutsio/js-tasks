// const cards = [1, 2, 3, 45, 23, 8];
// let total = 0;

// for (const wer of cards) {
//   total += wer;
// }
// console.log(total);

// *******

// const add = function (cards) {
//   //   console.log(cards);
//   let total = 0;

//   for (const wer of cards) {
//     total += wer;
//   }
//   return total;
// };

// console.log(add([34, 45, 67, 34, 12]));
// console.log(add([23, 45, 90, 12, 367]));

// **************

// ***********
// const planets = ['Earth', 'Mars', 'Venus'];

// for (const planet of planets) {
//   console.log(planet);
// }

// Task №4

/** задача от препода зозуля
 *?  Записать массив, const arr = ['BEST', 'the', 'foo', 'is',  'JS' ]
 *? развернуть массив,
 *? вырезать foo,
 *? перевести его в строку разделенную пробелами не меняя массив
 */

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];
// const arrReverse = arr.reverse();
// // const newArray1 = arrReverse.slice(0, 2);
// // const newArray2 = arrReverse.slice(-2);
// // console.log(newArray1);
// // console.log(newArray2);
// // console.log(newArray1.concat(newArray2).join(' '));

// console.log(arr);
// console.log(arrReverse.slice(0, 2).concat(arrReverse.slice(-2)).join(' '));

// slice;

// .push(arrReverse.slice(-2))

//*************
// const name = 'Nata';
// const age = 29;

// const user = {
//   name,
//   age,
// };
// console.log(user.name);

// ******
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     henry: 'carter@aptmail.com',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// console.log(apartment);

//*********
//* /

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptDescr);

// *********
// const person = {
//   firstName: 'John',
//   age: 30,
// };
// const { firstName: personName } = person;
// console.log(personName); //John
// ****************

// function fn() {}

// fn.hello = 'qweqwe';
// console.log(fn.hello);

// ************

//пример с функцией
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   getSum(a) {
//     console.log(a ** 2);
//   },
// };

// apartment.getSum(8); //64

//************** */поменяла цену
///*внутри метода обьекта никогда не использовать его имя....только через this!!! */
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   changePrice(newPrice) {
//     console.log((this.price = newPrice));
//   },
// };

// apartment.changePrice(6666); //6666
// *****************

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
// ];

// friends[1].name = 'Ira'; // поменяет имя Kiwi  на Ira

// for (friend of friends) {
//   console.log(friend.name); // Mango,Kiwi,Poly
//   console.log(friend.name.length); // длинна каждого имени (5, 3, 4)
// }

// console.log(friends);

// const findFriendName = function (allFriends, name) {
//   //   console.log(allFriends[0].name === name); //false(только первое имя)
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     // console.log(friend.name === name); //false,false,true(перебрало все имена)
//     if (friend.name === name) {
//       return 'Ураа!!';
//     }
//   }
// };

// console.log(findFriendName(friends, 'Poly'));

// const getAllNames = function (allFriends) {
//   const allNames = [];
//   for (const friend of allFriends) {
//     allNames.push(friend.name);
//     // console.log(allNames);
//   }
//   return allNames; //вернуло масив имен
// };
// console.log(getAllNames(friends));

// const friendsOnline = function (allFriends) {
//   const onlineFriend = [];

//   //   for (const friend of allFriends) {
//   //     console.log(friend.online);
//   //     if (friend.online === true) {
//   //       console.log('иди спать!');
//   //     }
//   //   }

//   for (const friend of allFriends) {
//     if (friend.online) {
//       //if (!friend.online)// не онлайн, проверка на false
//       onlineFriend.push(friend.name); //Не надо проверять на тру
//       console.log(onlineFriend); //Kiwi
//     }
//   }
// };

// console.log(friendsOnline(friends));

// ******************
//SPREAD//
// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// // console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// // console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25
// console.log(Math.max(...[14, -4, 25, 8, 11])); //25

// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
// Операція ... (spread) дозволяє розподілити властивості довільної кількості об'єктів в один новий.
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// ********REST*******

// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
// console.log(firstNumber); // Значення першого аргументу
// console.log(secondNumber); // Значення другого аргументу
// console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// ************************

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? 'публічному' : 'закритому';
// console.log(`Книга ${book.title} автора ${book.author} з рейтингом ${book.rating}
// знаходиться в ${accessType} доступі.`);

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;
// console.log(message);

// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title: firstTitle, coverImage: firstCoverImage = 'https://via.placeholder.com/640/480' } =
//   firstBook;

// console.log(firstBook);
// // console.log(firstTitle); // The Last Kingdom
// // console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const { title: secondTitle, coverImage: secondCoverImage = 'https://via.placeholder.com/640/480' } =
//   secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480
// console.log(secondBook);
// *****************************
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
// ];

// // for (const book of books) {
// //   console.log(book.title);
// //   // console.log(book.author);
// //   // console.log(book.rating);
// // }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }
// ********тоже самое
// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// Глибока деструктуризація
// Для деструктуризації властивостей вкладених об'єктів використовуються
// ті самі принципи, що й в трьох попередніх вправах.

// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views, likes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(views); // 4827
// console.log(likes); // 1308

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// ******************
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;
// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"

// const rgb = [200, 100, 255];
// const [red, green, blue, alfa = 0.3] = rgb;
// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// const rgb = [200, 255, 100];
// const [red, ...colors] = rgb;
// console.log(red); // "200"
// console.log(colors); // [255, 100]

// const rgb = [200, 100, 255];
// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`); // "Blue: 255"

// **********************

// const user = {
//   name: 'Artem',
//   age: 28,
//   languages: {
//     html: false,
//     css: false,
//     js: true,
//     'React Native': false,
//   },
//   sayHello() {
//     console.log(`My name ${this.name}`);
//   },
//   iKnow() {
//     // for (const key in this.languages) {
//     //   // console.log(this.languages[key]); false false true false
//     //   if (this.languages[key]) {
//     //     console.log(key); //js
//     //   }
//     // }
//     // const keys = Object.keys(this.languages);
//     // for (const key of keys) {
//     //   console.log(this.languages[key]);
//     //   if (this.languages[key]) {
//     //     console.log(key);
//     //   }
//     // }
//     // console.log(keys);

//     // console.log(Object.values(this.languages));
//     console.log(Object.entries(this.languages));
//   },
// };

// user.iKnow();

// //*******************************88 */
// const salaries = {
//   John: 300,
//   Sam: 190,
//   Frank: 165,
// };

// let sum = 0;
// for (const key in salaries) {
//   // console.log(salaries[key]);
//   sum += salaries[key];
//   // console.log(sum);
// }

// // console.log(Object.values(salaries));
// const values = Object.values(salaries) // лучше ввести переменную
// for (const value of Object.values(salaries)) {
//   sum += value;
//   console.log(sum);
// }

//********************* */

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet('Манго')); // Ласкаво просимо Манго.

// Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() { return `Ласкаво просимо ${name}.`; }

// Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// //Функція вищого порядку//
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall('Mango');

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

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// function printValue(value) {
//   // console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// *******************************CALLBACK*****************************************

// function doMath(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }

// doMath(6, 8, function add(x, y) {
//   return x + y;
// });
// doMath(61, 8, function sub(x, y) {
//   return x - y;
// });

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// function filter(array, test) {
//   for (const el of array) {
//     console.log(el);
//     console.log(test(el));
//   }
// }

// function callback(value) {
//   return value >= 4;
// }

// filter([1, 2, 3, 9, 5, 6, 7, 8], callback);

// filter = [1, 2, 3, 9, 5, 6, 7, 8];
// for (let i = 0; i < filter.length; i += 1) {
//   console.log(filter[i]); //значение
//   console.log(i); // номер итерации
// }

// ***************************************CALLBACK************************************
// const arr = [1, 4, 3, 7, 6];

// function foo(arr, callback) {
//   let total = 0;
//   for (const item of arr) {
//     total = callback(total, item);
//   }
//   return total;
// }

// function add(a, b) {
//   return a + b;
// }

// console.log(foo(arr, add));

// const arr = [1, 4, 3, 7, 6];
// arr.forEach(function (item, idx, arr) {
//   console.log(item, idx);
//   // ***********//повертаэ undefined!!!!!!*****************
// });

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// colorPickerOptions.find(option => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(item => item.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find(option => option.label === 'white');

//************** */
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   console.log('number -', number);
//   console.log('previousValue -', previousValue);

//   return previousValue + number;
// }, 0);

// // console.log(total); // 32
//**************** */
// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// Напишите функцию add, которая принимает
// два числа и функцию - колбэк, которая будет вызвана с результатом сложения этих чисел.

// function add(num1, num2, callback) {
//   const sum = num1 + num2;
//   callback(sum);
// }

// add(5, 10, function (result) {
//   console.log(result); // Output: 15
// });

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// function multiplyByTwo(arr, callback) {
//   const multipliedArr = arr.map(number => number * 2);
//   callback(multipliedArr);
// }

// const numbers = [1, 2, 3, 4, 5];

// multiplyByTwo(numbers, function (result) {
//   console.log(result); // Output: [2, 4, 6, 8, 10]
// });

//************************
// const numbers = [1, 2, 3, 4, 5];

// function multiplyByTwo(numbers, callback) {
//   const multipliedArr = numbers.forEach(number => number * 2);

//   callback(multipliedArr);
// }

// multiplyByTwo(numbers, function (result) {
//   console.log(result); // Output: [2, 4, 6, 8, 10]
// });
//**********************************

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

//***************map **************//

// const forecast = [
//   { today: 1, low: 28, high: 32 },
//   { tomorrow: 2, low: 27, high: 31 },
//   { nextday: 3, low: 25, high: 39 },
// ];

// const onlyLow = forecast.map(item => item.low);
// console.log(onlyLow);

// const onlyHigh = forecast.map(item => item.high);
// console.log(onlyHigh);

// const test = forecast.map(({ low, high }) => {
//   return { low, high };
// });
// console.log(test);

// const onlyHigh = forecast.map(item => {
//   console.log(item);

//   return {
//     ...item,
//     low: 12,
//   };
// });
// console.log(onlyHigh);

// **********поменяла одну температуру */
// const changeLow = 27;

// const test2 = forecast.map(item => {
//   console.log(item.low);
//   if (item.low === changeLow) {
//     console.log(`вот и оно`);

//     return {
//       ...item,
//       low: -3,
//     };
//   }

//   return item;
// });
// console.log(test2);

// *************тернарник */

// const changeLow = 27;
// const test2 = forecast.map(item => {
//   return item.low === changeLow ? { ...item, low: -3 } : item;
// });
// console.log(test2);

// *********************filter***********

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// const ageFilter = users.filter(({ age }) => {
//   return age > 27;
// });
// console.log(ageFilter);

// const userIsActive = users.filter(user => user.isActive)
//**************деструктуризация */
// const userIsActive = users.filter(({ isActive }) => {
//   return isActive;
// });
//************** */
// console.log(userIsActive);
// const userIsNotActive = users.filter(user => !user.isActive);
// console.log(userIsNotActive);

//******************* */

// const numbers = [1, 2, 4, 3, 6, 5];
// // const filterNumbers = numbers.filter(number => {
// //   console.log(number);

// //   return number > 3;
// // });
// // ******************
// // const filterNumbers = numbers.filter(number => number < 2 || number > 5);

// console.log(filterNumbers);

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     cars: ['bmw', 'peugeot'],
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     cars: ['mazda', 'peugeot'],
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     cars: ['audi', 'kia'],
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     cars: ['audi', 'kia', 'aston martin'],
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     cars: ['audi', 'kia', 'aston martin'],
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// const carsOfUsers = users =>
//   users.flatMap(users => users.cars).filter((car, idx, cars) => cars.indexOf(car) === idx);
// console.log(carsOfUsers(users));

//**************************FIND */

// const userName = users.find(({ name }) => name === 'Sheree Anthony');
// console.log(userName);
/////
// const findUser = (obj, userName) => {
//   return obj.find(user => user.name === userName);
// };

// console.log(findUser(users, 'Sheree Anthony'));

// const arr = [
//   { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
//   { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
//   { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
//   { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
//   { name: 'Pierre', surname: 'Curie', born: 1859, dead: 1906, id: 5 },
//   { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 6 },
//   { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 7 },
//   { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 8 },
//   { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 9 },
//   { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 10 },
//   { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 11 },
//   { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 12 },
//   { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 13 },
// ];

// // - Получить массив ученых, родившихся в 19 веке.
// // - Найти общую сумму лет, сколько прожили все ученые.
// // - Отсортировать ученых по алфавиту.
// // - Отсортировать ученых по количеству прожитых лет.
// // - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
// // - Найти ученого, который родился позже всех.
// // - Найти год рождения Albert Einstein.
// // - Найти ученых, фамилия которых начинается на букву "С".
// // - Удалить из массива всех ученых, имя которых начинается на букву "A".
// // - Найти ученого, который прожил больше всех и ученого, который меньше.
// // - Найти ученых, у которых совпадают первые буквы имени и фамилии.
// // - Узнать, все ли ученые работали в 19 веке.

//**************************REDUCE */
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// const total = thirdArray.reduce((acc, number) => acc + number);
// console.log(total);
// *******************
// const salaries = {
//   John: 300,
//   Sam: 190,
//   Frank: 165,
// };
// const totalSal = Object.values(salaries).reduce((acc, salary) => {
//   return acc + salary;
// });
// console.log(totalSal);
// ********************
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];

// *************************SORT****
// const numbers = [1, 4, 3, 6, 5];
// numbers.sort((a, b) => {
//   return b - a;
// });
// console.log(numbers);

// const letters = ['S', 'a', 'A', 'b', 'B'];
// letters.sort();
// console.log(letters);

// const numbers = [1, 4, [6, 9, [7, [0], 4]], [3, 0, 9], 6, 5];
// console.log(numbers.flat(3));

const numbers = [1, 2, 3];
const numbers1 = [3, 4, 5];
// const newArr = [...numbers, ...numbers1].filter(
//   (item, idx, newArr) => newArr.indexOf(item) === idx
// );
