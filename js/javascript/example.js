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

const friendsOnline = function (allFriends) {
  const onlineFriend = [];

  //   for (const friend of allFriends) {
  //     console.log(friend.online);
  //     if (friend.online === true) {
  //       console.log('иди спать!');
  //     }
  //   }

  for (const friend of allFriends) {
    if (friend.online) {
      //if (!friend.online)// не онлайн, проверка на false
      onlineFriend.push(friend.name); //Не надо проверять на тру
      console.log(onlineFriend); //Kiwi
    }
  }
};

console.log(friendsOnline(friends));
