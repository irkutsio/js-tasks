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

const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
];

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
