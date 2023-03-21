// function rangeOfNumbers(startNum, endNum) {
//   if (endNum < startNum) {
//     return [];
//   } else {
//     const numbers = rangeOfNumbers(startNum, endNum - 1);
//     numbers.push(endNum);
//     return numbers;
//   }
// }
// // console.log(rangeOfNumbers(4, 8));
// let dog = {
//   name: 'Spot',
//   numLegs: 4,
//   sayLegs: function () {
//     return 'This dog has 4 legs.';
//   },
// };
function Bird(name) {
  this.name = name;
}

console.log(Bird.prototype);
